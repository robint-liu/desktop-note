import { todoList } from '@common/constant';

export default [
  {
    title: "分组",
    dataIndex: "group",
    align: "center",
    customRender: (text) => (todoList.group.find(item => item.value == text) || {}).label
  },
  {
    title: "优先级", //排序
    dataIndex: "order",
    align: "center"
  },
  {
    title: "时间", //排序
    dataIndex: "time",
    align: "center"
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
    customRender: (text) => (todoList.status.find(item => item.value == text) || {}).label
  },
  {
    title: "操作",
    dataIndex: "operation",
    align: "center"
  }
];
