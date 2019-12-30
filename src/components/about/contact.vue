<template>
  <div class="contact-wrap page-common" style="height: calc(100vh - 40px)">
    <Banner />
    <br />
    <main>
      <h2>
        联系方式
      </h2>
      <a-divider></a-divider>
      <article>
        <a-card hoverable>
          <img
            alt="phone"
            class="card-img"
            src="@assets/contact/phone.png"
            slot="cover"
          />
          <a-card-meta>
            <template slot="title">
              <a-icon type="phone" />
            </template>
            <template slot="description"
              ><span class="meta-content">17600708628</span></template
            >
          </a-card-meta>
        </a-card>
        <a-card hoverable>
          <img
            alt="邮箱"
            class="card-img"
            src="@assets/contact/sina.png"
            slot="cover"
          />
          <a-card-meta>
            <template slot="title">
              <a-icon type="mail" />
            </template>
            <template slot="description"
              ><span class="meta-content">liuyang9301@sina.cn</span></template
            >
          </a-card-meta>
        </a-card>
        <a-card hoverable>
          <img
            alt="企业微信"
            class="card-img"
            src="@assets/contact/companyWeChat.jpg"
            slot="cover"
          />
          <a-card-meta>
            <template slot="title">
              <a-icon type="wechat" />
            </template>
            <template slot="description"
              ><span class="meta-content">比诺</span></template
            >
          </a-card-meta>
        </a-card>
        <a-card hoverable>
          <img
            alt="qq"
            class="card-img"
            src="@assets/contact/qq.jpg"
            slot="cover"
          />
          <a-card-meta>
            <template slot="title">
              <a-icon type="qq" />
            </template>
            <template slot="description"
              ><span class="meta-content">402283163</span></template
            >
          </a-card-meta>
        </a-card>
      </article>
    </main>
  </div>
</template>

<script>
import Banner from "@components/banner";
import "@common/style/common.less";

export default {
  name: "contact.vue",
  components: {
    Banner
  }
};
</script>

<style lang="less" scoped>
@import "../../common/style/variable";
.contact-wrap {
  padding: 0;
  main {
    padding: 20px;
    h2 {
      text-align: center;
    }
    article {
      display: flex;
      justify-content: space-around;
      .ant-card {
        width: 240px;
        .card-img {
          width: 238px;
          height: 298px;
        }
        .meta-content {
          color: #999;
        }
      }
    }
  }
}
</style>

<style>
.ant-card-body {
  border-top: 1px solid #e8e7e7;
}
</style>
