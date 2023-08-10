<template lang="pug">
.logReg
    .logL
        comBanner
    .logR
        .logbox
            li(v-for="(it,inx) in logs", :class="{'act': actInx==inx}", @click="checkInx(inx)") {{it}}
        el-form(ref="ruleFormRef" :model="ruleForm" :rules="rules" label-width="75px" :size='formSize' @submit.native.prevent)
            el-form-item(label='用户名' prop='username')
                el-input(v-model="ruleForm.username" placeholder="请输入用户名" clearable)
            el-form-item(label='密码' prop='password')
                el-input(v-model="ruleForm.password" placeholder="请输入密码" clearable)
            el-form-item
                el-button(type='primary' size='large' :loading="loading" @click.native.prevent="onSubmit") {{actInx==0?'登录':'注册'}}
</template>

<script setup lang="ts">
import comBanner from '@com/comBanner.vue';
import { useRouter } from 'vue-router';
import { onMounted, reactive, ref } from 'vue'
const router = useRouter()
const RouterName = ref(router.currentRoute.value.name)
const logs: any = ref(['登录', '注册'])
const actInx: any = ref(0)
const checkInx = (i:any) => {
    actInx.value = i
}
const formSize = ref('large')
const loading = ref(false)
const ruleFormRef = ref()
const ruleForm = reactive({
    username: null,
    password: null
})

const rules = ref ({
    username: [{ required: true, message: '请输入用户名', trigger: 'blur' }],
    password: [{ required: true, message: '请输入密码', trigger: 'blur' }]
})
onMounted(() =>{
    window.addEventListener('keydown', keyDown)
})
const onSubmit = () =>{
    ruleFormRef.value.validate((valid: any) =>{
        if (!valid){
            return false
        }
        console.info(1234)
        // loading.value = true
    });
};
const keyDown = (e:any) =>{
    if (e.keyCode == 13){
        onSubmit()
    }
}
</script>
