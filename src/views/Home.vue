<script setup>
import { useStore } from '@/store/index.js'

const store = useStore()

const addCount = () => {
  store.addCount()
}
</script>

<template>
  <div>{{ store.count }}</div>
  <button @click="addCount">
    add
  </button>
</template>

<style scoped>

</style>
