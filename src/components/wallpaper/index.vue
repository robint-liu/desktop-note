<template>
  <div class="wallpaper-wrap page-common" style="height: calc(100vh - 40px)">
    <a-layout class="my-layout">
      <a-layout-header class="my-header">
        <a-select
                :style="{
            width: '88%',
            transitionDuration: '1.5s'
          }"
                :value="imgIds"
                @change="onChange"
                mode="multiple"
                optionFilterProp="children"
                placeholder="请输入关键词"
                size="large"
        >
          <a-select-option :key="d.value" v-for="d in imgList">{{
            d.name
          }}</a-select-option>
        </a-select>
        <a-button
                :style="{
            width: '10%',
            marginLeft: '1%'
          }"
                @click="empty"
                size="large"
                type="primary"
        >清空
        </a-button
        >
      </a-layout-header>
      <a-layout-content :style="{ padding: '0 50px', marginTop: '64px' }">
        <ul class="ul-img">
          <li
                  :key="index"
                  class="li-img"
                  v-for="(item, index) in willShowImgList"
          >
            <div class="img-wrap">
              <img :alt="item.name" :src="item.path"/>
              <span class="name">{{ item.name }}</span>
            </div>
            <span class="p_operation">
              <a-button type="link" @click="handleImgClick"
              >设为桌面壁纸
              </a-button>
            </span>
          </li>
        </ul>
      </a-layout-content>
    </a-layout>
  </div>
</template>

<script>
  /* 使用本地上传图片进行设置壁纸屏保 */
  import "@common/style/common.less";
  
  const imgList = [
    {
      name: "跑车一",
      value: "1",
      path:
        "https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=2694282916,3678452271&fm=26&gp=0.jpg"
  },
  {
    name: "跑车二",
    value: "2",
    path:
      "https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=1221985702,3909409031&fm=26&gp=0.jpg"
  },
  {
    name: "跑车三",
    value: "3",
    path:
      "https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=4058084007,1725055178&fm=26&gp=0.jpg"
  },
  {
    name: "跑车四",
    value: "4",
    path:
      "https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=1873352631,1764697663&fm=26&gp=0.jpg"
  },
  {
    name: "跑车五",
    value: "5",
    path:
      "https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=3840455029,2199450987&fm=26&gp=0.jpg"
  },
  {
    name: "跑车六",
    value: "6",
    path:
      "https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=2467925464,2128337966&fm=26&gp=0.jpg"
  }
];

export default {
  name: "index.vue",
  data() {
    return {
      willShowImgList: imgList,
      imgIds: [],
      imgList
    };
  },
  methods: {
    empty() {
      Object.assign(this, {
        imgIds: [],
        willShowImgList: imgList
      });
    },
    handleImgClick(event) {
      event.stopPropagation();
      this.$confirm({
        title: "确定将该图片设定为桌面吗？",
        cancelText: "取消",
        okText: "确认",
        onOk: () => {
          // todo 暂未实现
          setTimeout(() => {
            this.$warning({
              title: "该版本暂不支持哦，请耐心等待。"
            });
          }, 700);
        }
      });
    },
    onChange(value) {
      // 更新willShowImgList
      const willShowImgList = imgList.filter(item =>
        value.includes(item.value)
      );
      Object.assign(this, {
        imgIds: value,
        willShowImgList
      });
    }
  }
};
</script>

<style lang="less" scoped>
.wallpaper-wrap {
  .my-layout {
    position: relative;
    background-color: transparent;
  
    .my-header {
      position: absolute;
      z-index: 1;
      width: 100%;
      padding: 0 50px;
      background-color: transparent;
    }
  }
  .ul-img {
    overflow: hidden;
    padding: 0;
    .li-img {
      float: left;
      list-style: none;
      margin: 10px;
      text-align: center;
  
      .img-wrap {
        position: relative;
    
        span {
          position: absolute;
          left: 6px;
          top: 6px;
          color: rgba(255, 255, 255, 0.6);
          padding: 3px 5px;
          background-color: rgba(250, 250, 250, 0.45);
          font-size: 12px;
        }
      }
      img {
        height: 200px;
        border: 0;
        vertical-align: middle;
      }
  
      span.p_operation {
        margin: 0 auto;
        line-height: 20px;
        button {
          font-size: 14px;
        }
      }
    }
  }
}
</style>
