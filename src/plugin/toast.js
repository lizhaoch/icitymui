import Toast from "../components/toast/index";
import load from "../util/load";

export default {
  install: function(Vue, options) {
    options = this.check(options);
    load.attach(Vue, Toast, (obj, target) => {
      obj.toast = obj.toast || {};
      obj.toast.show = function(text, millisecond) {
        target.text = text;
        target.value = true;
        setTimeout(() => {
          target.value = false;
        }, millisecond || options.timeout);
      };
    });
  },

  check(options) {
    options = options || {};
    if (!options.timeout) {
      options.timeout = 3000;
    }
    return options;
  },
};
