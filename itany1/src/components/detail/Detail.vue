<template>
  <transition
    enter-active-class="animated slideInRight"
    leave-active-class="animated slideOutRight"
  >
    <div class="detail" v-show="detailShow">
      详情页
      <br />
      <br />
      <h2>{{ seller.name }}</h2>
      <br />
      <h2>{{ seller.bulletin }}</h2>
      <button @click="hideDetail" class="close">关闭</button>
      <br />
      <ul>
        <li v-for="item in seller.supports">
          {{ item.description }}
        </li>
      </ul>
    </div>
  </transition>
</template>

<script>
import { mapGetters } from "vuex";
import "animate.css/animate.css";

export default {
  computed: {
    ...mapGetters(["detailShow", "seller"])
  },
  methods: {
    hideDetail() {
      this.$store.dispatch("hideDetail");
    }
  }
};
</script>

<style lang="less" scoped>
.detail {
  position: fixed;
  top: 0px;
  left: 0px;
  z-index: 666; //优先级
  width: 100%;
  height: 100%;
  overflow: auto; //内容溢出自动出像滚动条
  background-color: rgba(7, 17, 27, 0.5);
  color: #fff;
  .close {
    position: absolute;
    bottom: 50px;
    left: 40%;
  }
}
</style>
