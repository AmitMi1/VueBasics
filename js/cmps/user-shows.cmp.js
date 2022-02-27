export default {
    props: ['user'],
    template: `
    <ul>
        <h2>Favorite shows</h2>
        <li v-for="show in shows">
            <div>{{show}}</div>
        </li>
    </ul>
    `,
    data() {
        return {
            shows: this.user.shows,
        }
    },
    created() {

    },
    methods: {


    },
    computed: {

    }
}