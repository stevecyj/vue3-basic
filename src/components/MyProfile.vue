<script setup lang="ts">
const props = defineProps({
  name: {
    type: String,
    required: true,
  },
  age: {
    type: Number,
    required: true,
  },
})

const doubleAge = computed(() => props.age * 2)
</script>

<template>
  <div class="profile-component">
    <h1>Name: {{ name }}</h1>
    <h1>Age: {{ age }}</h1>
    <h1>DoubleAge: {{ doubleAge }}</h1>
  </div>
</template>

<style lang="scss" scoped></style>
