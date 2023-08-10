<template lang="pug">
h1 {{RouterName}}
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router';
import { ref } from 'vue'
const router = useRouter()
const RouterName = ref(router.currentRoute.value.path)

</script>
