import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

import App from "./App.vue";
import Spin from "./components/spin/Spin.vue";
import Button from "./components/button/Button.vue";
import Card from "./components/card/Card.vue";
import Badge from "./components/badge/Badge.vue";
import Tabs from "./components/tabs/Tabs.vue";
import Prompt from "./components/prompt/Prompt.vue";
import Title from "./components/title/Title.vue";
import Skeleton from "./components/skeleton/Skeleton.vue";
import Search from "./components/search/Search.vue";
import Alert from "./components/alert/Alert.vue";
import Dialog from "./components/dialog/Dialog.vue";
import Toast from "./components/toast/Toast.vue";
import ImagePicker from "./components/imagePicker/ImagePicker.vue";
import Picker from "./components/picker/Picker.vue";
import Input from "./components/input/Input.vue";
import Password from "./components/password/Password.vue";
import Switch from "./components/switch/Switch.vue";
import ListView from "./components/listview/ListView.vue";

const router = new VueRouter({
  routes: [
    {
      path: "/",
      name: "app",
      component: App,
    },
    {
      path: "/spin",
      name: "spin",
      component: Spin,
    },
    {
      path: "/button",
      name: "button",
      component: Button,
    },
    {
      path: "/card",
      name: "card",
      component: Card,
    },
    {
      path: "/badge",
      name: "badge",
      component: Badge,
    },
    {
      path: "/tabs",
      name: "tabs",
      component: Tabs,
    },
    {
      path: "/prompt",
      name: "prompt",
      component: Prompt,
    },
    {
      path: "/title",
      name: "title",
      component: Title,
    },
    {
      path: "/skeleton",
      name: "skeleton",
      component: Skeleton,
    },
    {
      path: "/search",
      name: "search",
      component: Search,
    },
    {
      path: "/alert",
      name: "alert",
      component: Alert,
    },
    {
      path: "/dialog",
      name: "dialog",
      component: Dialog,
    },
    {
      path: "/toast",
      name: "toast",
      component: Toast,
    },
    {
      path: "/imagePicker",
      name: "imagePicker",
      component: ImagePicker,
    },
    {
      path: "/picker",
      name: "picker",
      component: Picker,
    },
    {
      path: "/input",
      name: "input",
      component: Input,
    },
    {
      path: "/password",
      name: "password",
      component: Password,
    },
    {
      path: "/switch",
      name: "switch",
      component: Switch,
    },
    {
      path: "/listview",
      name: "listview",
      component: ListView,
    }
  ]
})

export default router;
