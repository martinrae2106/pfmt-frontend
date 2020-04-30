<template>
    <div>
        <h3 class="text-center">All Donators</h3><br/>

        <h3 class="text-center">Add a new Donator: </h3>
            <div class="btn-group" role="group">
                        <router-link :to="{name: 'addDonator'}" class="btn btn-primary">Add Donator
                        </router-link>
        </div>


        <table class="table table-bordered">
            <thead>
            <tr>
                <th>ID</th>
                <th>Full Name</th>
                <th>Email</th>
                <th>Postal Code</th>
                <th>Billing Address Line One</th>
                <th>Billing Address Line Two</th>
                <th>City or Town</th>
                <th>Region</th>
                <th>Email Consent</th>
                <th>Name of Student</th>
                <th>Name of Teacher</th> 
                <th>Created At</th>
                <th>Updated At</th>
                <th>Actions</th>
            </tr>
            </thead>
            <tbody>
            <tr v-for="donator in donators" :key="donator.id">
                <td>{{ donator.id }}</td>
                <td>{{ donator.fullName }}</td>
                <td>{{ donator.emailAddress }}</td>
                <td>{{ donator.postalCode }}</td>
                <td>{{ donator.billingAddress1 }}</td>
                <td>{{ donator.billingAddress2 }}</td>
                <td>{{ donator.cityTown }}</td>
                <td>{{ donator.region }}</td>
                <td>{{ donator.emailContactApproved }}</td>
                <td>{{ donator.childName }}</td>
                <td>{{ donator.teacherName }}</td>
                 <td>{{ donator.created_at }}</td>
                <td>{{ donator.updated_at }}</td>
                <td>
                    <div class="btn-group" role="group">
                        <router-link :to="{name: 'editDonator', params: { id: donator.id }}" class="btn btn-primary">Edit
                        </router-link>
                        <button class="btn btn-danger" @click="deleteDonator(donator.id)">Delete</button>
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
        name: 'Donators',
        data() {
            return {
                donators: [],
                numberofDonators: 0,
            }
        },
        created() {
                axios
                .get('http://pfmtlaravel.test/api/donators')
                .then(response => {
                    this.donators = response.data;
                });
        },
        methods: {
            deleteDonator(id) {
                axios
                    .delete(`http://pfmtlaravel.test/api/donators/${id}`)
                    .then(response => {
                        let i = this.donators.map(item => item.id).indexOf(id); // find index of your object
                        this.donators.splice(i, 1)
                    })
                   .catch(error => {
                       console.log(error)
                    })
            }
        }
    }
</script>