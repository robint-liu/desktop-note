export default [
  {
    name: "用户信息",
    key: "userInfo",
    indexList: [
      {
        name: "ID",
        key: "id",
        syntax: "auto-incremented"
      },
      {
        name: "姓名",
        key: "name"
      },
      {
        name: "账户",
        key: "account",
        syntax: "unique"
      },
      {
        name: "密码",
        key: "password"
      },
      {
        name: "签名",
        key: "signature"
      }
    ]
  },
  {
    name: "待办事项",
    key: "todoList",
    indexList: [
      {
        name: "ID",
        key: "id",
        syntax: "auto-incremented"
      },
      {
        name: "分组",
        key: "group"
      },
      {
        name: "优先级",
        key: "order"
      },
      {
        name: "时间",
        key: "time"
      },
      {
        name: "正文",
        key: "text"
      },
      {
        name: "状态",
        key: "status"
      },
      {
        name: "重复",
        key: "repeat"
      }
    ]
  },
  {
    name: "我的备忘",
    key: "memoList",
    indexList: [
      {
        name: "ID",
        key: "id",
        syntax: "auto-incremented"
      },
      {
        name: "分组",
        key: "group"
      },
      {
        name: "时间",
        key: "time"
      },
      {
        name: "正文",
        key: "text"
      }
    ]
  }
];
