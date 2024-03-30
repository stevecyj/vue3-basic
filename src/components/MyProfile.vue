<script setup lang="ts">
interface IUser {
  name: string
  age: number
}

const props = withDefaults(
  defineProps<{ name: string; age: number; user?: IUser }>(),
  { name: "Vite", age: 8, user: () => ({ name: "Vite", age: 8 }) }
)

const isHidden = ref(false)

const doubleAge = computed(() => props.user.age * 2)

const toggleHidden = () => {
  isHidden.value = !isHidden.value
  emit("change", isHidden.value)
}

const emit = defineEmits(["change"])
</script>

<template>
  <div class="profile-component">
    <h1>Name: {{ name }}</h1>
    <h1 v-if="!isHidden">Age: {{ age }}</h1>
    <h1 v-if="!isHidden">DoubleAge: {{ doubleAge }}</h1>
    <button type="button" @click="toggleHidden">
      {{ isHidden ? "顯示" : "隱藏" }}
    </button>
  </div>
</template>

<style lang="scss" scoped></style>
