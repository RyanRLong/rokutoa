<script>
export default {
    methods: {
        post: function (url) {
            console.log(url)
            this.$http.post(url)
                .then((response) => console.log(response))
                .catch((error) => console.log(error))
        },
        get: function (url) {
            console.log(url)
            this.$http.get(url)
                .then((response) => console.log(response))
                .catch((error) => console.log(error))
        }
    }
}
</script>
