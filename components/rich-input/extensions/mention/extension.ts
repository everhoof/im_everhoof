import { Mention as ParentExtension } from '@tiptap/extension-mention';
import { mergeAttributes } from '@tiptap/core';
import { SuggestionOptions } from '@tiptap/suggestion';
import { VueRenderer } from '@tiptap/vue-2';
import tippy, { GetReferenceClientRect, Instance as TippyInstance } from 'tippy.js';
import Component from './component.vue';

export interface MentionItem {
  id: number;
  label: string;
}

const suggestion: Omit<SuggestionOptions, 'editor'> = {
  items: ({ query }): Promise<MentionItem[]> => {
    return window.$nuxt.$accessor.chat
      .searchUsers({ query })
      .then((users) =>
        users
          .filter((user) => user.username?.toLowerCase().includes(query.toLowerCase()))
          .slice(0, 5)
          .map(({ id, username }) => ({ id, label: username || 'unknown' })),
      )
      .catch(() => []);
  },

  render: () => {
    let component: VueRenderer;
    let popup: TippyInstance[];

    return {
      onStart: (props): void => {
        component = new VueRenderer(Component, {
          parent: this,
          propsData: props,
        });

        if (!props.clientRect) {
          return;
        }

        popup = tippy('body', {
          getReferenceClientRect: props.clientRect as GetReferenceClientRect,
          appendTo: () => document.body,
          content: component.element,
          showOnCreate: true,
          interactive: true,
          trigger: 'manual',
          placement: 'bottom-start',
        });
      },

      onBeforeUpdate(props): void {
        component.updateProps({ ...props, isLoading: true });
      },

      onUpdate(props): void {
        component.updateProps({ ...props, isLoading: false });

        if (!props.clientRect) {
          return;
        }

        popup[0].setProps({
          getReferenceClientRect: props.clientRect as GetReferenceClientRect,
        });
      },

      onKeyDown(props): boolean {
        if (props.event.key === 'Escape') {
          popup[0].hide();

          return true;
        }

        const mentionList = component.ref as Component;
        return mentionList.onKeyDown(props);
      },

      onExit(): void {
        popup[0].destroy();
        component.destroy();
      },
    };
  },
};

export const Mention = ParentExtension.extend({
  addAttributes() {
    return {
      id: {
        default: null,
        parseHTML: (element): string | null => element.getAttribute('data-id'),
        renderHTML: (attributes): Record<string, string> => {
          if (!attributes.id) {
            return {};
          }
          return {
            'data-id': attributes.id,
          };
        },
      },
      label: {
        default: null,
        parseHTML: (element): string | null => {
          return element.getAttribute('data-name');
        },
        renderHTML: (attributes): Record<string, string> => {
          if (!attributes.label) {
            return {};
          }
          return {
            'data-name': attributes.label,
          };
        },
      },
    };
  },
  parseHTML() {
    return [
      {
        tag: 'mention',
      },
    ];
  },
  renderHTML({ node, HTMLAttributes }) {
    return [
      'mention',
      mergeAttributes({}, this.options.HTMLAttributes, HTMLAttributes),
      this.options.renderText({
        options: this.options,
        node,
      }),
    ];
  },
}).configure({
  suggestion,
});
