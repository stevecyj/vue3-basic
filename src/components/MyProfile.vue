<script setup lang="ts">
interface IUser {
  name: string
  age: number
}
const props = defineProps({
  name: {
    type: String,
    required: true,
  },
  age: {
    type: Number,
    required: true,
  },
  user: {
    type: Object as PropType<IUser>,
    required: true,
  },
})

const doubleAge = computed(() => props.user.age * 2)
</script>

<template>
  <div class="profile-component">
    <h1>Name: {{ name }}</h1>
    <h1>Age: {{ age }}</h1>
    <h1>DoubleAge: {{ doubleAge }}</h1>
  </div>
</template>

<style lang="scss" scoped></style>
