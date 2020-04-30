<template>
    <div>
        <h3 class="text-center">All Countries</h3><br/>
        <h3 class="text-center">Add a new Country: </h3>
            <div class="btn-group" role="group">
                        <router-link :to="{name: 'addCountry'}" class="btn btn-primary">Add Country
                        </router-link>
            </div><br/>


        <table class="table table-bordered">
            <thead>
            <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Created At</th>
                <th>Updated At</th>
                <th>Actions</th>
            </tr>
            </thead>
            <tbody>
            <tr v-for="country in countries" :key="country.id">
                <td>{{ country.id }}</td>
                <td>{{ country.name }}</td>
                <td>{{ country.created_at }}</td>
                <td>{{ country.updated_at }}</td>
                <td>
                    <div class="btn-group" role="group">
                        <router-link :to="{name: 'editCountry', params: { id: country.id }}" class="btn btn-primary">Edit
                        </router-link>
                        <button class="btn btn-danger" @click="deleteCountry(country.id)">Delete</button>
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
        name: 'Countries',
        data() {
            return {
                countries: [],
                numberofCountries: 0,
            }
        },
        created() {
                axios
                .get('http://pfmtlaravel.test/api/countries')
                .then(response => {
                    this.countries = response.data;
                });
        },
        methods: {
            deleteCountry(id) {
                axios
                    .delete(`http://pfmtlaravel.test/api/countries/${id}`)
                    .then(response => {
                        let i = this.countries.map(item => item.id).indexOf(id); // find index of your object
                        this.regions.splice(i, 1)
                    })
                   .catch(error => {
                       console.log(error)
                    })
            }
        }
    }
</script>