import Alert from "../components/alert/index";
import load from "../util/load";

export default {
  install: function(Vue, options) {
    load.attach(Vue, Alert, (obj, target) => {
      obj.alert = obj.alert || {};
      obj.alert.show = function(params) {
        target.title = params.title;
        target.content = params.content || "";
        if (params.confirmText) {
          target.confirmText = params.confirmText;
        }
        target.value = true;
        target.confirm = () => {
          target.value = false;
          params.confirm && params.confirm();
        };
      };
      obj.alert.hide = function() {
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
