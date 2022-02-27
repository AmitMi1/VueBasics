export default {
    template: `
    <div class="user-container">
        <div v-if="isUserShown" v-for="(user, idx) in users">
            <img class="profile" v-bind:src="user.img" alt="" v-on:click="showShows(user)">
            <h4>{{user.name}}</h4>
            <button class="btn btn-danger" v-on:click="deleteUser(idx)"><i class="fa-solid fa-ban"></i></button>
        </div>
    </div>
    <user-shows v-if="!isUserShown" v-bind:user="currUser"></user-shows>
    <div class="back">
        <input type="text" placeholder="Username" v-if="isUserShown" v-model="userName">
        <button class="btn btn-primary" v-on:click="isUserShown=!isUserShown" v-if="!isUserShown"><i class="fa-solid fa-angles-left"></i></button>
        <button class="btn btn-success" v-on:click="addUser" v-if="isUserShown"><i class="fa-solid fa-plus"></i></button>
    </div>
    `,
    data() {
        return {
            users: [
                {
                    name: 'Puki',
                    img: 'img/u1.png',
                    shows: [
                        'Dexter',
                        'Breaking Bad'
                    ]
                },
                {
                    name: 'Muki',
                    img: 'img/u2.png',
                    shows: [
                        'Prison Break',
                        'The Good Doctor'
                    ]
                },
                {
                    name: 'Luki',
                    img: 'img/u3.png',
                    shows: [
                        'Lost',
                        'The Blacklist'
                    ]
                },
            ],
            isUserShown: true,
            currUser: null,
            userName: '',
            userPos: 3,
        }
    },
    created() {

    },
    methods: {
        showShows(user) {
            console.log('user ', user)
            this.isUserShown = false
            this.currUser = user
        },
        deleteUser(userIdx) {
            this.users.splice(userIdx, 1)
        },
        addUser() {
            if (!this.userName.trim()) return
            this.userPos++
            if (this.userPos > 8) this.userPos = 1
            const user = {
                name: this.userName,
                img: `img/u${this.userPos}.png`,
                shows: [
                    'Lost',
                    'The Blacklist'
                ]
            }
            this.users.push(user)
            this.userName = ''
        }

    },
    computed: {

    }
}