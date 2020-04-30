<template>
    <div>
        <h3 class="text-center">All Regions</h3><br/>

        <h3 class="text-center">Add a new Region: </h3>
            <div class="btn-group" role="group">
                        <router-link :to="{name: 'addRegion'}" class="btn btn-primary">Add Region
                        </router-link>
            </div>
            <br>

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
            <tr v-for="region in regions" :key="region.id">
                <td>{{ region.id }}</td>
                <td>{{ region.name }}</td>
                <td>{{ region.created_at }}</td>
                <td>{{ region.updated_at }}</td>
                <td>
                    <div class="btn-group" role="group">
                        <router-link :to="{name: 'editRegion', params: { id: region.id }}" class="btn btn-primary">Edit
                        </router-link>
                        <button class="btn btn-danger" @click="deleteRegion(region.id)">Delete</button>
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
        name: 'Regions',
        data() {
            return {
                regions: [],
                numberofRegions: 0,
            }
        },
        created() {
                axios
                .get('http://pfmtlaravel.test/api/regions')
                .then(response => {
                    this.regions = response.data;
                });
        },
        methods: {
            deleteRegion(id) {
                axios
                    .delete(`http://pfmtlaravel.test/api/regions/${id}`)
                    .then(response => {
                        let i = this.regions.map(item => item.id).indexOf(id); // find index of your object
                        this.regions.splice(i, 1)
                    })
                   .catch(error => {
                       console.log(error)
                    })
            }
        }
    }
</script>