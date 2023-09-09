export default {
  welcome: 'Welcome',

  // Authentication
  username_fill_error: 'Fill in the username field.',
  username_length_error: 'Wrong nickname format: max 32, min 3 characters.',
  username_regex_error: 'Wrong nickname format: [a-z, 0-9, _].',
  email_fill_error: 'Fill in the email field.',
  email_length_error: 'Wrong email format.',
  email_regex_error: 'Wrong email format.',
  password_fill_error: 'Fill in the password field.',
  passport_length_error: 'Password must be at least 5 characters long.',
  passwords_do_not_match: 'Passwords do not match.',

  modals: {
    profile: {
      registered: 'Registered',
      was_online: 'Was online',
    },

    settings: {
      dark_theme: 'Dark theme',
      compact_view: 'Compact view',
      message_sound: 'Message Sound',
      message_sound_options: {
        none: 'None',
        sound_1: 'Sound 1',
        sound_2: 'Sound 2',
      },
    },

    punishment: {
      times: {
        forever: 'Forever',
        day: '1 Day',
        hour: '1 Hour',
        ten_minutes: '10 Minutes',
        custom: 'Custom',
        minutes: 'minutes',
      },
      mute_time: 'Mute time',
      mute_reason: 'Mute reason',
      mute_reason_placeholder: 'Violation of the chat rules',
      delete_all_users_messages: "Delete all user's messages",
      mute: 'Mute',
    },

    politics: {
      title: 'Warning!',
      text:
        'We ask you to respect the broadcasters and listeners and not to start the topic of politics. ' +
        'Everyone has their own opinion on the current situation, and we respect them all.' +
        '<br />' +
        '<br />' +
        'Users who ignore this request will be muted for 15 minutes.',
      close: 'Ok. I get it.',
    },
  },

  reminders: {
    confirm_email: {
      message: 'Confirm your email address to use the chat.',
      action: 'Confirm',
    },
  },

  warning:
    'We ask you to respect the presenters and other listeners, and not to raise the topic of politics.',
};
