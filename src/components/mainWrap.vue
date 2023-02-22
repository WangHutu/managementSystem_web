<script setup>
import { ref } from "vue";
import { Search } from "@element-plus/icons-vue";
import systable from "./systable.vue";
import sysdialog from "./sysdialog.vue";
const selectType = ref([]);
const selectStatus = ref([]);
const searchIp = ref([]);
const dialogFormVisible = ref(false);
const tableData = ref([
  {
    type: "kv260",
    ip: "10.176.179.103",
    user: "runfengw",
    status: "Ture",
    remark: "备注",
  },
  {
    type: "kv260",
    ip: "10.176.179.103",
    user: "runfengw",
    status: "Ture",
    remark: "备注",
  },
  {
    type: "kv260",
    ip: "10.176.179.103",
    user: "",
    status: "Ture",
    remark: "备注",
  },
  {
    type: "kv260",
    ip: "10.176.179.103",
    user: "runfengw",
    status: "False",
    remark: "备注",
  },
  {
    type: "kv260",
    ip: "10.176.179.103",
    user: "runfengw",
    status: "Ture",
    remark: "备注",
  },
  {
    type: "kv260",
    ip: "10.176.179.103",
    user: "runfengw",
    status: "Ture",
    remark: "备注",
  },
  {
    type: "kv260",
    ip: "10.176.179.103",
    user: "",
    status: "Ture",
    remark: "备注",
  },
  {
    type: "kv260",
    ip: "10.176.179.103",
    user: "runfengw",
    status: "False",
    remark: "备注",
  },
  {
    type: "kv260",
    ip: "10.176.179.103",
    user: "runfengw",
    status: "Ture",
    remark: "备注",
  },
  {
    type: "kv260",
    ip: "10.176.179.103",
    user: "runfengw",
    status: "Ture",
    remark: "备注",
  },
  {
    type: "kv260",
    ip: "10.176.179.103",
    user: "",
    status: "Ture",
    remark: "备注",
  },
  {
    type: "kv260",
    ip: "10.176.179.103",
    user: "runfengw",
    status: "False",
    remark: "备注",
  },
  {
    type: "kv260",
    ip: "10.176.179.103",
    user: "runfengw",
    status: "Ture",
    remark: "备注",
  },
  {
    type: "kv260",
    ip: "10.176.179.103",
    user: "runfengw",
    status: "Ture",
    remark: "备注",
  },
  {
    type: "kv260",
    ip: "10.176.179.103",
    user: "",
    status: "Ture",
    remark: "备注",
  },
  {
    type: "kv260",
    ip: "10.176.179.103",
    user: "runfengw",
    status: "False",
    remark: "备注",
  },
  {
    type: "kv260",
    ip: "10.176.179.103",
    user: "runfengw",
    status: "Ture",
    remark: "备注",
  },
  {
    type: "kv260",
    ip: "10.176.179.103",
    user: "runfengw",
    status: "Ture",
    remark: "备注",
  },
  {
    type: "kv260",
    ip: "10.176.179.103",
    user: "",
    status: "Ture",
    remark: "备注",
  },
  {
    type: "kv260",
    ip: "10.176.179.103",
    user: "runfengw",
    status: "False",
    remark: "备注",
  },
  {
    type: "kv260",
    ip: "10.176.179.103",
    user: "runfengw",
    status: "Ture",
    remark: "备注",
  },
  {
    type: "kv260",
    ip: "10.176.179.103",
    user: "runfengw",
    status: "Ture",
    remark: "备注",
  },
  {
    type: "kv260",
    ip: "10.176.179.103",
    user: "",
    status: "Ture",
    remark: "备注",
  },
  {
    type: "kv260",
    ip: "10.176.179.103",
    user: "runfengw",
    status: "False",
    remark: "备注",
  },
  {
    type: "kv260",
    ip: "10.176.179.103",
    user: "runfengw",
    status: "Ture",
    remark: "备注",
  },
  {
    type: "kv260",
    ip: "10.176.179.103",
    user: "runfengw",
    status: "Ture",
    remark: "备注",
  },
  {
    type: "kv260",
    ip: "10.176.179.103",
    user: "",
    status: "Ture",
    remark: "备注",
  },
  {
    type: "kv260",
    ip: "10.176.179.103",
    user: "runfengw",
    status: "False",
    remark: "备注",
  },
  {
    type: "kv260",
    ip: "10.176.179.103",
    user: "runfengw",
    status: "Ture",
    remark: "备注",
  },
  {
    type: "kv260",
    ip: "10.176.179.103",
    user: "runfengw",
    status: "Ture",
    remark: "备注",
  },
  {
    type: "kv260",
    ip: "10.176.179.103",
    user: "",
    status: "Ture",
    remark: "备注",
  },
  {
    type: "kv260",
    ip: "10.176.179.103",
    user: "runfengw",
    status: "False",
    remark: "备注",
  },
  {
    type: "kv260",
    ip: "10.176.179.103",
    user: "runfengw",
    status: "Ture",
    remark: "备注",
  },
  {
    type: "kv260",
    ip: "10.176.179.103",
    user: "runfengw",
    status: "Ture",
    remark: "备注",
  },
  {
    type: "kv260",
    ip: "10.176.179.103",
    user: "",
    status: "Ture",
    remark: "备注",
  },
  {
    type: "kv260",
    ip: "10.176.179.103",
    user: "runfengw",
    status: "False",
    remark: "备注",
  },
]);
const types = [
  {
    value: "kv260",
    label: "kv260",
  },
  {
    value: "vck190",
    label: "vck190",
  },
  {
    value: "vek280",
    label: "vek280",
  },
  {
    value: "zcu104",
    label: "zcu104",
  },
  {
    value: "zcu102",
    label: "zcu102",
  },
];
const status = [
  {
    value: "vacant",
    label: "vacant",
  },
  {
    value: "occupy",
    label: "occupy",
  },
];
const searchhandle = (val) => {
  console.log(val);
};
const showDialog = () => {
  dialogFormVisible.value = true;
  // tableData.value=[{
  //   type: "kv260",
  //   ip: "10.176.179.103",
  //   user: "runfengw",
  //   status: "Ture",
  //   remark: "备注",
  // },]
};
</script>

<template>
  <el-scrollbar>
    <div class="main">
      <div class="main_head">
        <el-row>
          <el-col :span="12" style="padding-right: 20px">
            <el-select v-model="selectType" filterable multiple placeholder="Select Type" style="width: 100%">
              <el-option v-for="item in types" :key="item.value" :label="item.label" :value="item.value" />
            </el-select>
          </el-col>
          <el-col :span="5" style="padding-right: 20px"><el-select v-model="selectStatus" clearable
              placeholder="Select Status" style="width: 100%">
              <el-option v-for="item in status" :key="item.value" :label="item.label" :value="item.value" />
            </el-select></el-col>
          <el-col :span="5" style="padding-right: 10px"><el-input v-model="searchIp" :suffix-icon="Search"
              placeholder="Enter ip to search" clearable @input="searchhandle" /></el-col>
          <el-col :span="2" style="text-align: right">
            <el-button type="primary" @click="showDialog">ADD</el-button>
          </el-col>
        </el-row>
      </div>
      <systable v-model:tableData="tableData"></systable>
      <sysdialog v-model:dialog-form-visible="dialogFormVisible" v-model:types="types"></sysdialog>
    </div>
  </el-scrollbar>
</template>

<style scoped>
.main {
  /* height: 2000px; */
  min-width: 1024px;
  width: calc(100vw - 300px);
  margin: 70px auto 55px;
}

.main .main_head {
  height: 50px;
  line-height: 50px;
  margin-bottom: 10px;
}
</style>
