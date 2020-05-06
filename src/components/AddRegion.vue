<template>
    <div>
        <h3 class="text-center">Add Region</h3>
        <div class="row">
            <div class="col-md-6">
                <form @submit.prevent="addRegion">
                    <div class="form-group">
                        <label>Name</label>
                        <input type="text" class="form-control" v-model="region.name">
                    </div>
                    
                    <button type="submit" class="btn btn-primary">Add Region</button>
                </form>
            </div>
        </div>
        <br>
    </div>
</template>

<script>

import axios from 'axios';

    export default {
        name: 'AddRegion',
        data() {
            return {
                region: {}
            }
        },
        methods: {
            addRegion() {
                    let token = this.$store.getters.token
                    axios.defaults.headers.common['Authorization'] = 'Bearer ' + token
                    axios
                    .post('http://pfmtlaravel.test/api/region/', this.region)
                    .then(response => (
                        this.$router.push({name: 'regions'})
                        // console.log(response.data)
                    ))
                    .catch(error => console.log(error))
                    .finally(() => this.loading = false)
            }
        }
    }
</script>