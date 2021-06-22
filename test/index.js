import './index.css'
import Vue from "vue";
import router from "./router";

import "../lib/iconfont.css";

import Alert from '../lib/alert'
import Dialog from '../lib/dialog'
import Toast from '../lib/toast'
import ImagePicker from '../lib/imagePicker'
import Picker from '../lib/picker'

Vue.use(Alert)
Vue.use(Dialog)
Vue.use(Toast)
Vue.use(ImagePicker)
Vue.use(Picker)

new Vue({
  el: "#app",
  router
});
