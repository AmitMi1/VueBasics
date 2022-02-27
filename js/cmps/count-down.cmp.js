export default {
    props: ['time'],
    template: `
            <div title="Toggle dark mode" v-bind:class="boxStyle" v-on:click="setDark" class="box countdown">
                <div>
                <h1>COUNTDOWN</h1>
                </div>
                <div>
               <h1>{{formattedMin}}:<span v-bind:class="setColor">{{formattedSec}}</span></h1>
               </div>
            </div>

    `,
    data() {
        return {
            currTime: Date.now(),
            m: null,
            s: null,
            isDark: false
        }
    },
    created() {
        this.s = parseInt((this.time - this.currTime) / 1000)
        this.appInterval1 = setInterval(() => {
            this.s--
            if (this.s === 0 && this.m === 0) this.ring()
        }, 1000)
        this.m = Math.floor(this.s / 60)
        this.appInterval2 = setInterval(() => {
            this.m = Math.floor(this.s / 60)
        }, 1000)
    },
    methods: {
        ring() {
            clearInterval(this.appInterval1)
            clearInterval(this.appInterval2)
            var audio = new Audio('sound/ring.wav')
            audio.play()
            this.$emit('due', `Times's up`)
        },
        setDark() {
            this.isDark = !this.isDark
        }

    },
    computed: {
        setColor() {
            return { red: this.s < 11 }
        },
        formattedMin() {
            if (this.m < 10)
                return `0${this.m}`
            return this.m
        },
        formattedSec() {
            if (this.s % 60 < 10)
                return `0${this.s % 60}`
            return this.s % 60
        },
        boxStyle() {
            return { dark: this.isDark }
        }
    }
}