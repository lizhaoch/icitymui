import Dialog from "../components/dialog/index";
import load from "../util/load";

export default {
  install: function(Vue, options) {
    load.attach(Vue, Dialog, (obj, target) => {
      obj.dialog = obj.dialog || {};
      obj.dialog.show = function(params) {
        target.outside = params.outside || "";
        target.title = params.title;
        target.content = params.content || "";
        if (params.cancelText) {
          target.cancelText = params.cancelText;
        }
        if (params.confirmText) {
          target.confirmText = params.confirmText;
        }
        target.value = true;
        target.cancel = () => {
          target.value = false;
          params.cancel && params.cancel();
        };
        target.confirm = () => {
          target.value = false;
          params.confirm && params.confirm();
        };
        if (params.dismiss) {
          target.dismiss = () => {
            target.value = false;
            params.dismiss && params.dismiss();
          };
        }
      };
      obj.dialog.hide = function() {
        target.value = false;
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
