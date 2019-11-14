<template>
  <div class="introduction-wrap">
    <Banner />
    <br />
    <main>
      <h2>
        关于桌面记
      </h2>
      <a-divider></a-divider>
      <article>
        <p>
          桌面记是一款简易款桌面办公应用，汇集待办事项、我的备忘、我的壁纸等功能于一身，体积小，安装方便，立志成为一款专业版桌面应用。
        </p>
        <div>
          <p>
            <b>首页</b><br /><span
              >提供快捷浏览待办事项和我的备忘，支持快速新增待办事项和备忘录，同时提供应用改善入口，欢迎对桌面记应用进行吐槽和建议。</span
            >
          </p>
          <a-divider type="vertical" />
          <p>
            <b>待办事项</b><br /><span
              >提供基于时间、地点、人物、状态、MarkDown语法等的待办事项，支持增删改查。</span
            >
          </p>
          <a-divider type="vertical" />
          <p>
            <b>我的备忘</b><br /><span
              >提供基于MarkDown语法、图片、音频、视频等的备忘录，支持增删改查。</span
            >
          </p>
          <a-divider type="vertical" />
          <p>
            <b>我的壁纸</b><br /><span
              >提供在线搜索、下载、更换本地桌面壁纸。</span
            >
          </p>
        </div>
      </article>
    </main>
  </div>
</template>

<script>
import Banner from "@components/banner";
export default {
  name: "introduction.vue",
  components: {
    Banner
  }
};
</script>

<style lang="less" scoped>
@import "../../common/style/variable";
.introduction-wrap{
  main {
    padding: 20px;
    h2 {
      text-align: center;
    }
    article {
      display: flex;
      flex-direction: column;
      align-items: center;
      p {
        width: 1000px;
        font-size: 16px;
        margin: 40px 0 40px 0;
      }
      div {
        display: flex;
        .ant-divider-vertical {
          height: 55px;
          top: 25px;
          width: 3px;
          background-color: @base_color;
        }
        p {
          width: 300px;
          margin: 0 10px 0 10px;
          b {
            display: inline-block;
            width: 100%;
            text-align: center;
            margin-bottom: 8px;
          }
          span {
            display: inline-block;
            text-indent: 28px;
            font-size: 14px;
          }
        }
      }
    }
  }
}
</style>
