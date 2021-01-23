import { createApp } from 'vue'
import App from './App.vue'
import './theme.css'
import Sidebar from './Sidebar'
import Resume from './Resume'
import Comments from './Comments'

const app = createApp(App)

app.component('sidebar', Sidebar)
app.component('resume', Resume)
app.component('comments', Comments)

app.mount('#app')
