//使用pinia进行数据持久化存储
// 通过pinia-persistedstate插件实现数据持久化
//第一次使用，暂时不太需要这个，用的不是很多这里
import { defineStore } from "pinia";

export const useFileStore = defineStore("file", {
  state: () => ({
    files: [], // 存储文件信息
  }),
  actions: {
    //给想要处理的数据添加对应的处理的方法
    setFiles(newFiles) {
      //初始化
      this.files = newFiles;
    },
    addFile(file) {
      //添加
      this.files.push(file);
    },
    clearFiles() {
      //清空
      this.files = [];
    },
  },
  persist: true, // 添加这个配置项启用持久化
});
