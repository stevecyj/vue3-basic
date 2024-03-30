<script setup lang="ts">
import HelloWorld from "./HelloWorld.vue"

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

interface IEvents {
  (e: "change", hidden: boolean): void
}
const emit = defineEmits<IEvents>()

const toggleHidden = () => {
  isHidden.value = !isHidden.value
  emit("change", isHidden.value)
}
</script>

<template>
  <div class="profile-component">
    <HelloWorld msg="Hello from profile" />
    <h1>Name: {{ name }}</h1>
    <h1 v-if="!isHidden">Age: {{ age }}</h1>
    <h1 v-if="!isHidden">DoubleAge: {{ doubleAge }}</h1>
    <button type="button" @click="toggleHidden">
      {{ isHidden ? "顯示" : "隱藏" }}
    </button>
  </div>
</template>

<style lang="scss" scoped></style>
