<template>
    <div>
        <h3 class="text-center">Edit Donation</h3>
        <div class="row">
            <div class="col-md-6">
                <form @submit.prevent="updateDonation">
                    <div class="form-group">
                        <label>Donation Amount</label>
                        <input type="text" class="form-control" v-model="donation.donationValue">
                    </div>
                    <div class="form-group">
                        <label>Stripe Token</label>
                        <input type="text" class="form-control" v-model="donation.stripeToken">
                    </div>
                    <div class="form-group">
                        <label>Transaction Status</label>
                        <input type="text" class="form-control" v-model="donation.transactionStatus">
                    </div>
                    <button type="submit" class="btn btn-primary">Update Donation</button>
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
                donation: {}
            }
        },
        created() {
                axios
                .get(`http://pfmtlaravel.test/api/donation/${this.$route.params.id}`)
                .then((response) => {
                    this.donation = response.data;
                }) ;
        },
        methods: {
            updateDonation(donation) {
                axios
                    .post(`http://pfmtlaravel.test/api/donations/${this.$route.params.id}`, this.donation)
                    .then((response) => {
                        this.$router.push({name: 'donations'})
                    })
                    .catch(error => {
                        console.log(error)
                    })
            },
        }
    }
</script>