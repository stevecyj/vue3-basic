<script setup lang="ts">
import MyProfile from "./components/MyProfile.vue"

const count = ref<string | number>(0)
const headLine = ref<null | HTMLElement>(null)

interface IUser {
  name: string
  age: number
}
const user: IUser = reactive({
  name: "Vite",
  age: 8,
})

const buttonStatus = computed(() => {
  return {
    disabled: user.age < 10,
    text: user.age < 10 ? "未滿10歲不可參加" : "可以參與",
  }
})

watch(
  count,
  (newVal, oldVal) => {
    console.log("count changed", newVal, oldVal)
    document.title = `count is ${newVal}`
    console.log("the dom ", document.getElementById("user")?.innerHTML)
  },
  { flush: "post" }
  // { immediate: true }
)

watch(
  () => user.age,
  (newVal, oldVal) => {
    console.log("user.age changed", newVal, oldVal)
  }
)

watch(user, (newVal, oldVal) => {
  console.log("user changed", newVal, oldVal)
})

watch([count, () => user.age], ([count, age], [oldCount, oldAge]) => {
  console.log("count and user.age changed", count, age, oldCount, oldAge)
})

const increase = () => {
  if (typeof count.value === "number") {
    count.value++
  }
  user.age++
}

const onChange = (hidden: boolean) => {
  document.title = hidden ? "hidden age" : "show age"
}

// life cycle
console.log("in setup: ", headLine.value)
onMounted(() => {
  console.log("mounted: ", headLine.value?.innerHTML)
})

onUpdated(() => {
  console.log("updated: ", document.getElementById("user")?.innerHTML)
})
</script>

<template>
  <div>
    <h1>{{ count }}</h1>
    <h1 id="user" ref="headLine">{{ user.age }}</h1>
    <button type="button" @click="increase">increase</button>
    <button type="button" :disabled="buttonStatus.disabled">
      {{ buttonStatus.text }}
    </button>
    <a href="https://vitejs.dev" target="_blank">
      <img src="/vite.svg" class="logo" alt="Vite logo" />
    </a>
    <a href="https://vuejs.org/" target="_blank">
      <img src="./assets/vue.svg" class="logo vue" alt="Vue logo" />
    </a>
    <MyProfile
      :name="user.name"
      :age="user.age"
      :user="user"
      @change="onChange"
    />
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
