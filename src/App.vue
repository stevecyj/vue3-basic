<script setup lang="ts">
const count = ref<string | number>(0)

interface IUser {
  name: string
  age: number
}
const user: IUser = reactive({
  name: "Vite",
  age: 18,
})
const increase = () => {
  if (typeof count.value === "number") {
    count.value++
  }
  user.age++
}
</script>

<template>
  <div>
    <h1>{{ count }}</h1>
    <h1>{{ user.age }}</h1>
    <button type="button" @click="increase">increase</button>
    <a href="https://vitejs.dev" target="_blank">
      <img src="/vite.svg" class="logo" alt="Vite logo" />
    </a>
    <a href="https://vuejs.org/" target="_blank">
      <img src="./assets/vue.svg" class="logo vue" alt="Vue logo" />
    </a>
  </div>
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
