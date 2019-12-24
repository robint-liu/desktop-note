<template>
  <div class="wallpaper-wrap">
    <a-layout id="components-layout-demo-fixed">
      <a-layout-header
        :style="{
          position: 'fixed',
          zIndex: 1,
          width: '100%',
          padding: '0 50px',
          backgroundColor: 'transparent'
        }"
      >
        <a-select
          mode="multiple"
          labelInValue
          placeholder="input search text"
          style="width: 100%"
          :filterOption="false"
          @search="onSearch"
          @change="onChange"
          :notFoundContent="fetching ? undefined : null"
          size="large"
          :style="{
            width: '90%'
          }"
        >
          <a-spin v-if="fetching" slot="notFoundContent" size="small" />
          <a-select-option v-for="d in list" :key="d.value">{{
            d.text
          }}</a-select-option>
        </a-select>
      </a-layout-header>
      <a-layout-content :style="{ padding: '0 50px', marginTop: '64px' }">
      </a-layout-content>
    </a-layout>
  </div>
</template>

<script>
/* 使用本地上传图片进行设置壁纸屏保 */
import jsonp from "jsonp";
export default {
  name: "index.vue",
  data() {
    this.lastFetchId = 0;
    return {
      fetching: false,
      list: []
    };
  },
  methods: {
    onChange(value) {
      console.log("value", value);
      // 搜索已上传图片
      Object.assign(this, {
        list: [],
        fetching: false
      });
    },
    async onSearch(value) {
      this.lastFetchId += 1;
      const fetchId = this.lastFetchId;
      this.list = [];
      this.fetching = true;
      jsonp(
        `https://www.baidu.com/sugrec?ie=utf-8&prod=open_image&wd=${value}`,
        { name: "callback" },
        (err, data) => {
          if (err) {
            window.alert(err.Error);
            return;
          }
          if (fetchId !== this.lastFetchId) return;
          if (data.g) {
            const Gdata = data.g;
            this.list = Gdata.map((item, index) => ({
              text: item.q,
              value: index
            }));
            this.fetching = false;
          }
        }
      );
    }
  }
};
</script>

<style lang="less" scoped></style>
