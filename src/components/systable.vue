
<script setup>
import { Check, CloseBold } from '@element-plus/icons-vue'
defineProps({
    tableData: {
        type: Array,
        required: true,
        default: []
    }
})
// const emit = defineEmits(['update:tableData'])
// const handle = val => {
//   emit('update:tableData', false)
// };
</script>

<template>
    <el-table :data="tableData" stripe border style="width: 100%">
        <el-table-column prop="type" label="Type" width="120" />
        <el-table-column prop="ip" label="Ip" min-width="180" />
        <el-table-column prop="status" label="Status" width="100px" align="center">
            <template #default="scope">
                <el-tag round effect="dark" :type="scope.row.status === 'Ture' ? 'success' : 'danger'" disable-transitions>
                    {{ scope.row.status === 'Ture' ? 'vacant' : 'occupy' }}
                </el-tag>
            </template>
        </el-table-column>
        <el-table-column prop="user" label="User" width="160px">
            <template #default="scope">
                {{ scope.row.user ? scope.row.user : '-' }}
            </template>
        </el-table-column>
        <el-table-column prop="remark" label="Remark" min-width="180"/>
        <el-table-column label="operate " width="150px" align="center">
            <template #default="scope">
                <!-- <el-button :type="scope.row.status === 'Ture' ? 'success' : 'info'"
                    :icon="scope.row.status === 'Ture' ? Check : CloseBold" circle
                    :disabled="scope.row.status !== 'Ture'" /> -->
                <el-link type="primary" :underline="false" :disabled="scope.row.status !== 'Ture'">占用</el-link>
                <el-link type="primary" :underline="false">编辑</el-link>
                <el-link type="primary" :underline="false" :disabled="scope.row.status !== 'Ture'">删除</el-link>
            </template>
        </el-table-column>
    </el-table>
</template>