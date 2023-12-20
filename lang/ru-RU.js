export default {
  welcome: 'Добро пожаловать',

  // Authentication
  username_fill_error: 'Заполните поле Логин.',
  username_length_error: 'Неверная длина логина: макс. 32, мин. 3 символов.',
  username_regex_error: 'Неверный формат логина: [a-z, 0-9, _].',
  email_fill_error: 'Заполните поле E-mail.',
  email_length_error: 'Неверный формат почты.',
  email_regex_error: 'Неверный формат почты.',
  password_fill_error: 'Заполните поле Пароль.',
  passport_length_error: 'Пароль должен быть не менее 5 символов.',
  passwords_do_not_match: 'Пароли не совпадают',

  modals: {
    profile: {
      registered: 'Зарегистрирован',
      was_online: 'Был в сети',
    },

    settings: {
      dark_theme: 'Тёмная тема',
      compact_view: 'Компактный вид',
      snow: 'Снег',
      message_sound: 'Звук сообщения',
      message_sound_options: {
        none: 'Нет',
        sound_1: 'Звук 1',
        sound_2: 'Звук 2',
      },
    },

    punishment: {
      times: {
        forever: 'Навсегда',
        day: '1 День',
        hour: '1 Час',
        ten_minutes: '10 Минут',
        custom: 'Свой вариант',
        minutes: 'минут',
      },
      mute_time: 'Время наказания',
      mute_reason: 'Причина наказания',
      mute_reason_placeholder: 'Нарушение правил чата',
      delete_all_users_messages: 'Удалить все сообщения пользователя',
      mute: 'Заглушить',
    },

    politics: {
      title: 'Предупреждение!',
      text:
        'Просим вас соблюдать уважение к ведущим и слушателям и не поднимать тему политики. ' +
        'У каждого своё мнение по сложившейся ситуации, и мы уважаем их все.' +
        '<br />' +
        '<br />' +
        'Пользователи, проигнорировавшие эту просьбу, будут заглушены на 15 минут.',
      close: 'Хорошо, я понял.',
    },
  },

  reminders: {
    confirm_email: {
      message: 'Подтвердите адрес эл. почты, чтобы использовать чат.',
      action: 'Подтвердить',
    },
  },

  warning: 'Просим вас соблюдать уважение к ведущим и другим слушателям, и не поднимать тему политики.',
};
