<script setup>
import { useStore } from '@/store/index.js'

const store = useStore()

const addCount = () => {
  store.addCount()
}
</script>

<template>
  <div>{{ store.count }}</div>
  <el-button
    type="primary"
    @click="addCount"
  >
    add
  </el-button>
</template>

<style scoped>

</style>
