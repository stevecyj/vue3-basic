import { createApp } from "vue"
import "./style.css"
import App from "./App.vue"
import { userKey } from "./keys"

const app = createApp(App)
app.config.globalProperties.msg = "Hello from global properties"
app.provide(userKey, { name: "John Doe" })

app.mount("#app")
