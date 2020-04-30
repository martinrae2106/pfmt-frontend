<template>
    <div>
        <h3 class="text-center">Add Country</h3>
        <div class="row">
            <div class="col-md-6">
                <form @submit.prevent="addCountry">
                    <div class="form-group">
                        <label>Name</label>
                        <input type="text" class="form-control" v-model="country.name">
                    </div>
                    <button type="submit" class="btn btn-primary">Add Country</button>
                </form>
            </div>
        </div>
    </div>
</template>

<script>

import axios from 'axios';

    export default {
        name: 'AddCountry',
        data() {
            return {
                country: {}
            }
        },
        methods: {
            addCountry() {
                    axios
                    .post('http://pfmtlaravel.test/api/country/', this.country)
                    .then(response => (
                        this.$router.push({name: 'countries'})
                        // console.log(response.data)
                    ))
                    .catch(error => console.log(error))
                    .finally(() => this.loading = false)
            }
        }
    }
</script>