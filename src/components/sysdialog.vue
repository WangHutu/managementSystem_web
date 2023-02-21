<template>
  <el-dialog v-model="dialogFormVisibleUpdate" title="Shipping address">
<!--    <el-form :model="form">-->
<!--      <el-form-item label="Promotion name" :label-width="formLabelWidth">-->
<!--        <el-input v-model="form.name" autocomplete="off" />-->
<!--      </el-form-item>-->
<!--      <el-form-item label="Zones" :label-width="formLabelWidth">-->
<!--        <el-select v-model="form.region" placeholder="Please select a zone">-->
<!--          <el-option label="Zone No.1" value="shanghai" />-->
<!--          <el-option label="Zone No.2" value="beijing" />-->
<!--        </el-select>-->
<!--      </el-form-item>-->
<!--    </el-form>-->
<!--    <template #footer>-->
<!--      <span class="dialog-footer">-->
<!--        <el-button @click="dialogFormVisible = false">Cancel</el-button>-->
<!--        <el-button type="primary" @click="onClose"> Confirm </el-button>-->
<!--      </span>-->
<!--    </template>-->
  </el-dialog>
</template>

<script setup>
import {computed, reactive, toRef} from "vue";

const props = defineProps({
  dialogFormVisible: {
    type: Boolean,
    required: true,
    default: false,
  },
});
console.log(props.dialogFormVisible);

const formLabelWidth = "140px";
const emits = defineEmits(["update:dialogFormVisible"]);
const dialogFormVisibleUpdate = computed(() => props.dialogFormVisible)
console.log(dialogFormVisibleUpdate);

const onClose = () => {
};
</script>

<style scoped></style>
