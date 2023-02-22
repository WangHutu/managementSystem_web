<template>
  <el-dialog :model-value="dialogFormVisible" title="Shipping address" :show-close="false" width="600px">
    <el-form :model="form">
      <el-form-item label="Type: " :label-width="formLabelWidth">
        <el-select v-model="form.type" placeholder="Please select a type">
          <el-option v-for="item in types" :label="item.label" :value="item.value" />
        </el-select>
      </el-form-item>
      <el-form-item label="Ip: " :label-width="formLabelWidth" >
        <el-input v-model="form.ip" autocomplete="off" placeholder="Please input"/>
      </el-form-item>
      <el-form-item label="" :label-width="formLabelWidth">
        <el-switch v-model="form.status" class="mb-2" style="--el-switch-on-color: #13ce66"
          active-text="vacant" inactive-text="occupy" />
      </el-form-item>
      <el-form-item label="Remark: ">
      <el-input v-model="form.remark" type="textarea" placeholder="Please input"/>
    </el-form-item>

    </el-form>
    <template #footer>
      <span class="dialog-footer">
        <el-button @click="onCloseHandle">Cancel</el-button>
        <el-button type="primary" @click="onCloseHandle"> Confirm </el-button>
      </span>
    </template>
  </el-dialog>
</template>

<script setup>
import { ref } from "vue";
const formLabelWidth = "60px";
const props = defineProps({
  dialogFormVisible: {
    type: Boolean,
    required: true,
    default: false,
  },
  types: {
    type: Array,
    required: true,
    default: [],
  },
});
const emit = defineEmits(['update:dialogFormVisible'])
const form = ref({})
const onCloseHandle = val => {
  emit('update:dialogFormVisible', false)
};
</script>

<style scoped>
.el-button--text {
  margin-right: 15px;
}

.el-select {
  width: 100%;
}

.el-input {
  width: 100%;
}

.dialog-footer button:first-child {
  margin-right: 10px;
}
</style>
