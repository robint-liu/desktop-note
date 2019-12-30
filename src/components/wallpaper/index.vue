<template>
  <div class="wallpaper-wrap page-common" style="height: calc(100vh - 40px)">
    <a-layout class="my-layout">
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
        <ul class="ul-img">
          <li v-for="(item, index) in imgList" :key="index" class="li-img">
            <img :src="item.path" :alt="item.name" />
            <p class="p_operation">
              <a-button type="link" @click="handleImgClick"
                >设为桌面壁纸</a-button
              >
            </p>
          </li>
        </ul>
      </a-layout-content>
    </a-layout>
  </div>
</template>

<script>
/* 使用本地上传图片进行设置壁纸屏保 */
import jsonp from "jsonp";
import "@common/style/common.less";
const imgList = [
  {
    name: "图片一"
  },
  {
    name: "图片二"
  },
  {
    name: "图片三"
  },
  {
    name: "图片四"
  },
  {
    name: "图片五"
  },
  {
    name: "图片六"
  }
];

export default {
  name: "index.vue",
  data() {
    this.lastFetchId = 0;
    return {
      fetching: false,
      list: [],
      imgList
    };
  },
  methods: {
    handleImgClick(event) {
      event.stopPropagation();
      window.confirm("确定将该图片设定为桌面吗？");
    },
    onChange() {
      // 搜索已上传图片
      Object.assign(this, {
        list: [],
        fetching: false
      });
    },
    onSearch(value = "") {
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

<style lang="less" scoped>
.wallpaper-wrap {
  .my-layout {
    background-color: transparent;
  }
  .ul-img {
    overflow: hidden;
    padding: 0;
    .li-img {
      float: left;
      list-style: none;
      margin: 10px;
      text-align: center;
      img {
        border: 0;
        vertical-align: middle;
      }
      p {
        margin-bottom: 0;
        button {
          font-size: 16px;
        }
      }
    }
  }
}
</style>
