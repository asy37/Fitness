<template>
    <menuTemplate />
    <humanbody />
</template>



<script setup>
import menuTemplate from '../components/template/menuTemplate.vue'
import humanbody from'../components/body/humanbody.vue'
import { ref } from 'vue'
const dropdown = ref(true)
</script>
