<template>
  <div class="wrapper" :class="{ closeBar: opened }">
    <m-header></m-header>
    <transition
      enter-active-class="animated bounceInRight"
      leave-active-class="animated bounceOutRight"
    >
      <notificat-bar v-show="msgIsShow"></notificat-bar>
    </transition>
    <div class="wrapper_con">
      <side-bar></side-bar>
      <page-main></page-main>
    </div>
  </div>
</template>

<script>
import SideBar from "./components/sideBar";
import MHeader from "./components/header";
import NotificatBar from "@/components/NotificatBar";
import PageMain from "./components/PageMain";
import { mapGetters } from "vuex";
export default {
  name: "layout",
  mounted() {},
  computed: {
    ...mapGetters(["opened", "msgIsShow"])
  },
  components: {
    SideBar,
    MHeader,
    NotificatBar,
    PageMain
  }
};
</script>
