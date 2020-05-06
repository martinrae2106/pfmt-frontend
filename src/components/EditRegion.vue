<template>
    <div>
        <h3 class="text-center">Edit Region</h3>
        <div class="row">
            <div class="col-md-6">
                <form @submit.prevent="updateRegion">
                    <div class="form-group">
                        <label>Name</label>
                        <input type="text" class="form-control" v-model="region.name">
                    </div>
                    <button type="submit" class="btn btn-primary">Update Region</button>
                </form>
            </div>
        </div>
    </div>
</template>

<script>
    import axios from 'axios';

    export default {
        data() {
            return {
                region: {}
            }
        },
        created() {
                let token = this.$store.getters.token
                axios.defaults.headers.common['Authorization'] = 'Bearer ' + token
                axios
                .get(`http://pfmtlaravel.test/api/region/${this.$route.params.id}`)
                .then((response) => {
                    this.region = response.data;
                }) ;
        },
        methods: {
            updateRegion(region) {
                axios
                    .patch(`http://pfmtlaravel.test/api/regions/${this.$route.params.id}`, {
                        name: this.region.name,
                    })
                    .then((response) => {
                        this.$router.push({name: 'regions'})
                    })
                    .catch(error => {
                        console.log(error)
                    })
            },
        }
    }
</script>