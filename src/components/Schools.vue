<template>
    <div>
        <h3 class="text-center">All Schools</h3><br/>

        <h3 class="text-center">Add a new School: </h3>
            <div class="btn-group" role="group">
                        <router-link :to="{name: 'addSchool'}" class="btn btn-primary">Add School
                        </router-link>
            </div><br/>


        <table class="table table-bordered">
            <thead>
            <tr>
                <th>ID</th>
                <th>Role Number</th>
                <th>Name</th>
                <th>Created At</th>
                <th>Updated At</th>
                <th>Actions</th>
            </tr>
            </thead>
            <tbody>
            <tr v-for="school in schools" :key="school.id">
                <td>{{ school.id }}</td>
                <td>{{ school.roleNumber }}</td>
                <td>{{ school.name }}</td>
                <td>{{ school.created_at }}</td>
                <td>{{ school.updated_at }}</td>
                <td>
                    <div class="btn-group" role="group">
                        <router-link :to="{name: 'editSchool', params: { id: school.id }}" class="btn btn-primary">Edit
                        </router-link>
                        <button class="btn btn-danger" @click="deleteSchool(school.id)">Delete</button>
                    </div>
                </td>
            </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
    import axios from 'axios';

   //const API_URL = 'http://pfmtlaravel.test/api/';

    export default {
        name: 'Schools',
        data() {
            return {
                schools: [],
                numberofSchools: 0,
            }
        },
        created() {
                let token = this.$store.getters.token
                axios.defaults.headers.common['Authorization'] = 'Bearer ' + token
                axios
                .get('http://pfmtlaravel.test/api/schools')
                .then(response => {
                    this.schools = response.data;
                });
        },
        methods: {
            deleteSchool(id) {
                axios
                    .delete(`http://pfmtlaravel.test/api/schools/${id}`)
                    .then(response => {
                        let i = this.schools.map(item => item.id).indexOf(id); // find index of your object
                        this.schools.splice(i, 1)
                    })
                   .catch(error => {
                       console.log(error)
                    })
            }
        }
    }
</script>