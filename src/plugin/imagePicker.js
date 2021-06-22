import ImagePicker from "../components/imagePicker/index";
import load from "../util/load";

export default {
  install: function(Vue, options) {
    load.attach(Vue, ImagePicker, (obj, target) => {
      obj.imagePicker = obj.imagePicker || {};
      obj.imagePicker.show = function(params) {
        target.title = !!params ? params.title : null;
        target.value = true;
        (target.confirm = (type) => {
          target.value = false;
          params.confirm && params.confirm(type);
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
