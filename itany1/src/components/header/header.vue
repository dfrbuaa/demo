<template>
  <div class="header">
    {{seller.name}}
    <img
      src="https://fuss10.elemecdn.com/0/51/66f76d37f15c96a41379a695b0acejpeg.jpeg"
      @click="showDetail"
    />
    <!-- 弹出层 -->
    <Detail></Detail>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import Detail from "../detail/Detail.vue";
export default {
  created() {
    this.$store.dispatch("getSeller");
  },

  computed: mapGetters(["seller"]),
  components: {
    Detail
  },
  methods: {
    showDetail() {
      this.$store.dispatch("showDetail");
    }
  }
};
</script>

<style  scoped>
.header {
  height: 134px;
  background-color: rgba(7, 17, 27, 0.1);
  font-size: 14px;
}
img {
  width: 60px;
  height: 60px;
}
</style>