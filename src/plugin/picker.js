import Picker from "../components/picker/index";
import load from "../util/load";

export default {
  install: function(Vue, options) {
    load.attach(Vue, Picker, (obj, target) => {
      obj.picker = obj.picker || {};
      obj.picker.show = function(params) {
        target.title = params.title;
        target.data = params.data;
        target.value = true;
        (target.confirm = (val, index) => {
          target.value = false;
          params.confirm && params.confirm(val, index);
        }),
          (target.cancel = () => {
            target.value = false;
            params.cancel && params.cancel();
          });
      };
      if (options && options.router) {
        this.recycle(options.router, target);
      }
    });
  },

  recycle(router, target) {
    router.afterEach((to, from) => {
      target.value = false;
    });
  },
};
