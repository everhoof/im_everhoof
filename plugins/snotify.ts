import Vue from 'vue';
import Snotify, { SnotifyPosition } from 'vue-snotify';

const options = {
  toast: {
    position: SnotifyPosition.leftTop,
  },
};

Vue.use(Snotify, options);
