<template>
    <div>
        <h3 class="text-center">Add School</h3>
        <div class="row">
            <div class="col-md-6">
                <form @submit.prevent="addSchool">
                    <div class="form-group">
                        <label>Role Number</label>
                        <input type="text" class="form-control" v-model="school.roleNumber">
                    </div>
                    <div class="form-group">
                        <label>Name</label>
                        <input type="text" class="form-control" v-model="school.name">
                    </div>
                    <button type="submit" class="btn btn-primary">Add School</button>
                </form>
            </div>
        </div>
    </div>
</template>

<script>

import axios from 'axios';

    export default {
        name: 'AddSchool',
        data() {
            return {
                school: {}
            }
        },
        methods: {
            addSchool() {
                    let token = this.$store.getters.token
                    axios.defaults.headers.common['Authorization'] = 'Bearer ' + token
                    axios
                    .post('http://pfmtlaravel.test/api/school/', this.school)
                    .then(response => (
                        this.$router.push({name: 'schools'})
                        // console.log(response.data)
                    ))
                    .catch(error => console.log(error))
                    .finally(() => this.loading = false)
            }
        }
    }
</script>