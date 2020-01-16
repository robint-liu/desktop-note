import { group } from "@common/constant";
export default [
  {
    title: "分组",
    dataIndex: "group",
    align: "center",
    customRender: text => (group.find(item => item.value == text) || {}).label,
    filters: [
      { value: "0", text: "默认" },
      { value: "1", text: "工作" },
      { value: "2", text: "生活" },
      { value: "3", text: "学习" },
      { value: "4", text: "其他" }
    ]
  },
  {
    title: "优先级",
    dataIndex: "order",
    align: "center",
    defaultSortOrder: "descend",
    sorter: (a, b) => a.order - b.order
  },
  {
    title: "时间",
    dataIndex: "time",
    align: "center",
    defaultSortOrder: "descend",
    sorter: (a, b) => a.time - b.time
  },
  {
    title: "正文",
    dataIndex: "text",
    align: "center"
  },
  {
    title: "状态",
    dataIndex: "status",
    align: "center",
    customRender: text => (group.find(item => item.value == text) || {}).label,
    filters: [
      { value: "0", text: "已取消" },
      { value: "1", text: "进行中" },
      { value: "2", text: "已实现" }
    ]
  },
  {
    title: "操作",
    dataIndex: "operation",
    align: "center",
    scopedSlots: { customRender: "operation" }
  }
];
