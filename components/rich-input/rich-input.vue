<template>
  <!-- begin .rich-input-->
  <div class="rich-input">
    <template v-if="editor && extensionsHaveAny">
      <client-only>
        <bubble-menu class="bubble-menu" :tippy-options="{ duration: 100 }" :editor="editor">
          <b-bubble>
            <template v-if="extensionsHave('bold')">
              <b-bubble-button
                :is-active="editor.isActive('bold')"
                @click="editor.chain().focus().toggleBold().run()"
              >
                <template #hint>Жирный</template>
                <template #default>
                  <svg-icon name="bold" />
                </template>
              </b-bubble-button>
            </template>
            <template v-if="extensionsHave('italic')">
              <b-bubble-button
                :is-active="editor.isActive('italic')"
                @click="editor.chain().focus().toggleItalic().run()"
              >
                <template #hint>Курсив</template>
                <template #default>
                  <svg-icon name="italic" />
                </template>
              </b-bubble-button>
            </template>
            <template v-if="extensionsHave('underline')">
              <b-bubble-button
                :is-active="editor.isActive('underline')"
                @click="editor.chain().focus().toggleUnderline().run()"
              >
                <template #hint>Подчёркнутый</template>
                <template #default>
                  <svg-icon name="underline" />
                </template>
              </b-bubble-button>
            </template>
            <template v-if="extensionsHave('strike')">
              <b-bubble-button
                :is-active="editor.isActive('strike')"
                @click="editor.chain().focus().toggleStrike().run()"
              >
                <template #hint>Перечёркнутый</template>
                <template #default>
                  <svg-icon name="strikethrough" />
                </template>
              </b-bubble-button>
            </template>
          </b-bubble>
        </bubble-menu>
      </client-only>
    </template>
    <editor-content :editor="editor" />
  </div>
  <!-- end .rich-input-->
</template>

<script lang="ts">
import { Component, Prop, Vue, Watch } from 'nuxt-property-decorator';
import { Editor, EditorContent, BubbleMenu, Extension, Extensions } from '@tiptap/vue-2';
import type { PropType } from 'vue';
import { Placeholder } from '@tiptap/extension-placeholder';
import { Document } from '@tiptap/extension-document';
import { Text } from '@tiptap/extension-text';
import { Paragraph } from '@tiptap/extension-paragraph';
import { Strike } from '@tiptap/extension-strike';
import { Underline } from '@tiptap/extension-underline';
import { Italic } from '@tiptap/extension-italic';
import { Bold } from '@tiptap/extension-bold';
import { Mention } from './extensions/mention/extension';
import BBubbleButton from '~/components/bubble/bubble-button.vue';
import BBubble from '~/components/bubble/bubble.vue';
import { MentionEvent } from '~/store/messages';

@Component({
  name: 'b-rich-input',
  components: {
    BBubbleButton,
    BBubble,
    EditorContent,
    BubbleMenu,
  },
})
export default class RichInput extends Vue {
  @Prop({
    required: false,
    type: String as PropType<string>,
    default: '',
  })
  public readonly modelValue!: string;

  @Prop({
    required: false,
    type: String as PropType<string | null>,
    default: null,
  })
  public readonly placeholder!: string | null;

  @Prop({
    required: false,
    type: Array as PropType<Extensions>,
    default: () => [
      Document.extend({
        content: 'block+',
      }),
      Text,
      Paragraph,
      Bold,
      Italic,
      Underline,
      Strike,
      Mention,
    ],
  })
  public readonly extensions!: Extensions;

  private editor: Editor | null = null;

  get extensionsHave() {
    return (name: string): boolean => {
      return !!this.extensions.find((ext) => ext.name === name);
    };
  }

  get extensionsHaveAny(): boolean {
    return (
      this.extensionsHave('bold') ||
      this.extensionsHave('italic') ||
      this.extensionsHave('underline') ||
      this.extensionsHave('strike')
    );
  }

  created(): void {
    if (process.client) {
      const extensions: Extensions = [
        Extension.create({
          addKeyboardShortcuts: () => {
            return {
              Enter: (): boolean => {
                this.$emit('enter');
                return true;
              },
              'Shift-Enter': (): boolean => {
                if (this.editor) {
                  this.editor.commands.first(({ commands }) => [
                    (): boolean => commands.newlineInCode(),
                    (): boolean => commands.createParagraphNear(),
                    (): boolean => commands.liftEmptyBlock(),
                    (): boolean => commands.splitBlock(),
                  ]);
                }

                return false;
              },
            };
          },
        }),
        ...this.extensions,
      ];

      if (this.placeholder) {
        extensions.push(
          Placeholder.configure({
            placeholder: this.placeholder,
          }),
        );
      }

      this.editor = new Editor({
        content: this.modelValue,
        extensions,
      });
    }
  }

  @Watch('modelValue')
  onModelValueUpdate(): void {
    this.setContent(this.modelValue);
  }

  getText(): string {
    return this.editor?.getText() ?? '';
  }

  getHtml(): string {
    return this.editor?.getHTML() ?? '';
  }

  setContent(content: string): void {
    this.editor?.commands.setContent(content);
  }

  insertContent(content: string): void {
    this.editor?.chain().insertContent(`${content} `).focus().run();
  }

  mention(event: MentionEvent): void {
    this.editor
      ?.chain()
      .insertContent({
        type: 'mention',
        attrs: {
          id: event.id,
          label: event.username,
        },
        text: `@${event.username}`,
      })
      .insertContent({
        type: 'text',
        text: ' ',
      })
      .focus()
      .run();
  }

  focus(): void {
    this.editor?.chain().focus().run();
  }

  beforeDestroy(): void {
    this.editor?.destroy();
  }
}
</script>

<style lang="stylus" src="./rich-input.styl" />
