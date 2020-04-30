<template>
    <div>
        <h3 class="text-center">Edit Country</h3>
        <div class="row">
            <div class="col-md-6">
                <form @submit.prevent="updateCountry">
                    <div class="form-group">
                        <label>Name</label>
                        <input type="text" class="form-control" v-model="country.name">
                    </div>
                    <button type="submit" class="btn btn-primary">Update Country</button>
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
                country: {}
            }
        },
        created() {
                axios
                .get(`http://pfmtlaravel.test/api/country/${this.$route.params.id}`)
                .then((response) => {
                    this.country = response.data;
                }) ;
        },
        methods: {
            updateCountry(country) {
                axios
                    .post(`http://pfmtlaravel.test/api/countries/${this.$route.params.id}`, this.country)
                    .then((response) => {
                        this.$router.push({name: 'countries'})
                    })
                    .catch(error => {
                        console.log(error)
                    })
            },
        }
    }
</script>