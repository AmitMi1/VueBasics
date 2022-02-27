export default {
    template: `
        <div v-bind:class="boxStyle" title="Toggle dark mode" v-on:click="setDark" class="weather-box box">
            <h1>Hello Vue</h1>
            <img v-bind:src="imgSrc">
            <h4>{{formattedVal}}</h4>
        </div>

    `,
    data() {
        return {
            imgSrc: null,
            time: new Date(),
            currTime: Date.now(),
            darkMode: `
            background-color: #1b1b1b;
            color:white;
            `,
            isDark: false
        }
    },
    created() {
        var month = new Date().getMonth()
        var winter = [0, 1, 11]
        var summer = [5, 6, 7]
        var spring = [2, 3, 4]
        var fall = [8, 9, 10]
        if (winter.includes(month)) this.imgSrc = 'img/4.png'
        else if (summer.includes(month)) this.imgSrc = 'img/2.png'
        else if (spring.includes(month)) this.imgSrc = 'img/1.png'
        else if (fall.includes(month)) this.imgSrc = 'img/3.png'
        setInterval(() => {
            this.currTime += 60000
            this.time = new Date(this.currTime)
        }, 1000)

    },
    methods: {
        setDark() {
            this.isDark = !this.isDark
        }

    },
    computed: {
        boxStyle() {
            return { dark: this.isDark }
        },
        formattedVal() {
            return this.time.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
        }
    }
}