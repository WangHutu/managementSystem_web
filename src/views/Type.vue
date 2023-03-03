<template>
    <el-scrollbar>
        <div class="home">
            <div class="home_head">
                <el-row justify="space-between">
                    <el-col :span="10" style="padding-right: 20px">
                        <el-input :suffix-icon="Search" :model-value="selectType.typeName" placeholder="Enter Type to search"
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
import { ref, onMounted } from "vue";
import { getType } from "api/board"
const selectType = ref({
    typeName: ''
});
const tableData = ref([]);
const sysdialogRef = ref(null)
const showDialog = data => {
    sysdialogRef.value.init(data)
};
const searchHandle = () => {
    getTypeList(selectType.value)
};
const change = (val, event) => {
    if (val === 'type') {
        selectType.value.typeName = event
    }
}

const getTypeList = (data) => {
    console.log(data, 'data')
    getType(data).then(res => {
        if (res.code == '200') {
            if (res.data) {
                tableData.value = res.data
            }
        }
    })
}

onMounted(() => {
    getTypeList(selectType.value)
})


</script>
  
<style scoped>
.home .home_head {
    height: 50px;
    line-height: 50px;
    margin-bottom: 10px;
}
</style>
  