<template>
    <div>
        <h3 class="text-center">All Donations</h3><br/>

        <h3 class="text-center">Add a new Donation: </h3>
            <div class="btn-group" role="group">
                        <router-link :to="{name: 'addDonation'}" class="btn btn-primary">Add Donation
                        </router-link>
            </div><br/>


        <table class="table table-bordered">
            <thead>
            <tr>
                <th>ID</th>
                <th>Donation Value in Euros</th>
                <th>Stripe Token</th>
                <th>Transaction Status</th>
                <th>Created At</th>
                <th>Updated At</th>
                <th>Actions</th>
            </tr>
            </thead>
            <tbody>
            <tr v-for="donation in donations" :key="donation.id">
                <td>{{ donation.id }}</td>
                <td>{{ donation.donationValue }}</td>
                <td>{{ donation.stripeToken }}</td>
                <td>{{ donation.transactionStatus }}</td>
                <td>{{ donation.created_at }}</td>
                <td>{{ donation.updated_at }}</td>
                <td>{{ token }}</td>
                <td>
                    <div class="btn-group" role="group">
                        <router-link :to="{name: 'editDonation', params: { id: donation.id }}" class="btn btn-primary">Edit
                        </router-link>
                        <button class="btn btn-danger" @click="deleteDonation(donation.id)">Delete</button>
                    </div>
                </td>
            </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
    import axios from 'axios';
    //import {mapGetters} from "vuex";

   //const API_URL = 'http://pfmtlaravel.test/api/';

   //token = token()

    export default {
        name: 'Donations',
        data() {
            return {
                donations: [],
                numberofDonations: 0,
            }
        },
        computed: {
            token(){
                console.log("Im in token")
                let token = this.$store.getters.token
                console.log(token)
            }
        },
        created() {
                let token = this.$store.getters.token
                axios.defaults.headers.common['Authorization'] = 'Bearer ' + token
                axios
                .get('http://pfmtlaravel.test/api/donations')
                .then(response => {
                    this.donations = response.data;
                });
        },
        methods: {
            deleteDonation(id) {
                axios
                    .delete(`http://pfmtlaravel.test/api/donations/${id}`)
                    .then(response => {
                        let i = this.donations.map(item => item.id).indexOf(id); // find index of your object
                        this.donations.splice(i, 1)
                    })
                   .catch(error => {
                       console.log(error)
                    })
            }
        }
    }
</script>