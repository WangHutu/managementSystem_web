<template>
    <div class="login_wrap">
        <div class="form_wrap">
            <p class="form_head">
                Login
            </p>
            <el-form ref="ruleFormRef" status-icon :rules="rules" label-width="70px" class="ruleForm loginForm">
                <el-form-item label="User">
                    <el-input v-model="ruleForm.pass" type="password" autocomplete="off" />
                </el-form-item>
                <el-form-item label="Password">
                    <el-input v-model="ruleForm.pass" type="password" autocomplete="off" />
                </el-form-item>
                <el-form-item>
                    <el-button type="primary" @click="submitForm(ruleFormRef)">Submit</el-button>
                </el-form-item>
            </el-form>

            <el-form ref="ruleFormRef" status-icon :rules="rules" label-width="70px" class="ruleForm RegisterForm">
                <el-form-item label="User">
                    <el-input v-model="ruleForm.pass" type="password" autocomplete="off" />
                </el-form-item>
                <el-form-item label="Password">
                    <el-input v-model="ruleForm.pass" type="password" autocomplete="off" />
                </el-form-item>
                <el-form-item label="Agin">
                    <el-input v-model="ruleForm.pass" type="password" autocomplete="off" />
                </el-form-item>
                <el-form-item class="qwe">
                    <el-button type="primary" @click="submitForm(ruleFormRef)">Submit</el-button>
                </el-form-item>
            </el-form>

            <div class="form_footer">
                <el-link type="primary" >login</el-link>
                <el-link type="primary" >register</el-link>
            </div>
        </div>
    </div>
</template>

<script setup>
import { reactive, ref } from 'vue'

const ruleFormRef = ref()

const checkAge = (rule, value, callback) => {
    if (!value) {
        return callback(new Error('Please input the age'))
    }
    setTimeout(() => {
        if (!Number.isInteger(value)) {
            callback(new Error('Please input digits'))
        } else {
            if (value < 18) {
                callback(new Error('Age must be greater than 18'))
            } else {
                callback()
            }
        }
    }, 1000)
}

const validatePass = (rule, value, callback) => {
    if (value === '') {
        callback(new Error('Please input the password'))
    } else {
        if (ruleForm.checkPass !== '') {
            if (!ruleFormRef.value) return
            ruleFormRef.value.validateField('checkPass', () => null)
        }
        callback()
    }
}
const validatePass2 = (rule, value, callback) => {
    if (value === '') {
        callback(new Error('Please input the password again'))
    } else if (value !== ruleForm.pass) {
        callback(new Error("Two inputs don't match!"))
    } else {
        callback()
    }
}

const ruleForm = reactive({
    pass: '',
    checkPass: '',
    age: '',
})

const rules = reactive({
    pass: [{ validator: validatePass, trigger: 'blur' }],
    checkPass: [{ validator: validatePass2, trigger: 'blur' }],
    age: [{ validator: checkAge, trigger: 'blur' }],
})

const submitForm = (formEl) => {
    if (!formEl) return
    formEl.validate((valid) => {
        if (valid) {
            console.log('submit!')
        } else {
            console.log('error submit!')
            return false
        }
    })
}

const resetForm = (formEl) => {
    if (!formEl) return
    formEl.resetFields()
}

</script>

<style scoped>
.login_wrap {
    background: #f6f6f6;
    position: relative;
    width: 100vw;
    height: 100vh;
}

.form_wrap {
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.5);
    border-radius: 7px;
    background: #fff;
    display: inline-block;
    width: 600px;
    position: absolute;
    left: 50%;
    top: 50%;
    padding-bottom: 10px;
    transform: translate(-50%, -80%);
}

.form_head {
    width: 100%;
    height: 55px;
    line-height: 55px;
    padding: 0 25px;
    margin-bottom: 20px;
    border-bottom: 1px solid #e5e5e5;
}

.ruleForm {
    margin: 0 25px;
}

.form_footer {
    width: 100%;
    text-align: center;
}
</style>