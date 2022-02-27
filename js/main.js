import weatherTimerCmp from "./cmps/weather-timer.cmp.js"
import countDownCmp from "./cmps/count-down.cmp.js"
import whoWatchCmp from "./cmps/who-watch.cmp.js"
import userShowsCmp from "./cmps/user-shows.cmp.js"

const options = {
    template: `
        <weather-timer></weather-timer>
        <hr>
        <count-down v-on:due="timeUp" v-bind:time="Date.now() + 1000 * 5"></count-down>
        <who-watch></who-watch>
`,
    data() {
        return {

        }
    },
    created() {
        console.log('Hello');
    },
    methods: {
        timeUp(msg) {
            console.log(msg)
        }
    },
    computed: {

    }
}

const app = Vue.createApp(options)
app.component('weather-timer', weatherTimerCmp)
app.component('count-down', countDownCmp)
app.component('who-watch', whoWatchCmp)
app.component('user-shows', userShowsCmp)

app.mount('#app')