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
        key: "name",
        syntax: "unique"
      },
      {
        name: "签名",
        key: "signature",
        syntax: "unique"
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
        name: "[group+order+time]",
        syntax: "compound",
        related: ["group", "order", "time"]
      },
      {
        name: "[group+order+text+time]",
        syntax: "compound",
        related: ["group", "order", "time", "text"]
      },
      {
        name: "[group+order+text+time+id]",
        syntax: "compound",
        related: ["group", "order", "time", "text", "id"]
      },
      {
        name: "[group+order+text+time+status]",
        syntax: "compound",
        related: ["group", "order", "time", "text", "status"]
      }
    ]
  }
];
