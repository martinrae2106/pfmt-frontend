<template>
    <div>
        <h3 class="text-center">Add Donation</h3>
        <div class="row">
            <div class="col-md-6">
                <form @submit.prevent="addDonation">
                    <div class="form-group">
                        <label>Donation Amount in Euros</label>
                        <input type="number" class="form-control" v-model="donation.donationValue">
                    </div>
                    <div class="form-group">
                        <label>Stripe Token</label>
                        <input type="text" class="form-control" v-model="donation.stripeToken">
                    </div>
                    <div class="form-group">
                        <label>Transaction Status</label>
                        <input type="number" class="form-control" v-model="donation.transactionStatus">
                    </div>
                    
                    <button type="submit" class="btn btn-primary">Add Donation</button>
                </form>
            </div>
        </div>
    </div>
</template>

<script>

import axios from 'axios';

    export default {
        name: 'AddDonation',
        data() {
            return {
                donation: {}
            }
        },
        methods: {
            addDonation() {
                    axios
                    .post('http://pfmtlaravel.test/api/donation/', this.donation)
                    .then(response => (
                        this.$router.push({name: 'donations'})
                        // console.log(response.data)
                    ))
                    .catch(error => console.log(error))
                    .finally(() => this.loading = false)
            }
        }
    }
</script>