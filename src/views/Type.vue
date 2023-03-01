<template>
    <el-scrollbar>
        <div class="home">
            <div class="home_head">
                <el-row justify="space-between">
                    <el-col :span="10" style="padding-right: 20px">
                        <el-input :suffix-icon="Search" :model-value="selectType" placeholder="Enter Type to search"
                            clearable @input="change('type', $event)" @keyup.enter="searchHandle" />
                    </el-col>
                    <el-col :span="2" style="text-align: right">
                        <el-button type="primary" @click="showDialog()">ADD</el-button>
                    </el-col>
                </el-row>
            </div>
            <el-table :data="tableData" stripe border style="width: 100%">
                <el-table-column prop="type" label="Type" min-width="150" />
                <el-table-column prop="remark" label="Remark" min-width="180" />
            </el-table>
        </div>
    </el-scrollbar>
</template>
  
<script setup>
import { ref } from "vue";
const selectType = ref([]);
const tableData = ref([
    {
        type: "kv260",
        status: "True",
        remark: "备注",
    },
    {
        type: "vck190",
        status: "True",
        remark: "备注",
    },
    {
        type: "zcu104",
        status: "True",
        remark: "备注",
    }
]);
const sysdialogRef = ref(null)
const showDialog = data => {
    sysdialogRef.value.init(data)
};
const searchHandle = () => {
    console.log(selectType.value)
};
const change = (val, event) => {
    if (val === 'type') {
        selectType.value = event
    }
}

</script>
  
<style scoped>
.home .home_head {
    height: 50px;
    line-height: 50px;
    margin-bottom: 10px;
}
</style>
  