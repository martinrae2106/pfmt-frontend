<template>
    <div>
        <h3 class="text-center">Edit Donator</h3>
        <div class="row">
            <div class="col-md-6">
                <form @submit.prevent="updateDonator">
                    <div class="form-group">
                        <label>Full Name</label>
                        <input type="text" class="form-control" v-model="donator.fullName">
                    </div>
                    <div class="form-group">
                        <label>E-mail</label>
                        <input type="text" class="form-control" v-model="donator.emailAddress">
                    </div>
                    <div class="form-group">
                        <label>Postal Code</label>
                        <input type="text" class="form-control" v-model="donator.postalCode">
                    </div>
                    <div class="form-group">
                        <label>Billing Address Line One</label>
                        <input type="text" class="form-control" v-model="donator.billingAddress1">
                    </div>
                    <div class="form-group">
                        <label>Billing Address Line Two</label>
                        <input type="text" class="form-control" v-model="donator.billingAddress2">
                    </div>
                    <div class="form-group">
                        <label>City or Town</label>
                        <input type="text" class="form-control" v-model="donator.cityTown">
                    </div>
                    <div class="form-group">
                        <label>Region</label>
                        <input type="text" class="form-control" v-model="donator.region">
                    </div>
                    <div class="form-group">
                        <label>Email Consent</label>
                        <input type="text" class="form-control" v-model="donator.emailContactApproved">
                    </div>
                    <div class="form-group">
                        <label>Student's Name</label>
                        <input type="text" class="form-control" v-model="donator.childName">
                    </div>
                    <div class="form-group">
                        <label>Teacher's Name</label>
                        <input type="text" class="form-control" v-model="donator.teacherName">
                    </div>
                    <button type="submit" class="btn btn-primary">Update Donator</button>
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
                donator: {}
            }
        },
        created() {
                axios
                .get(`http://pfmtlaravel.test/api/donator/${this.$route.params.id}`)
                .then((response) => {
                    this.donator = response.data;
                }) ;
        },
         methods: {
            updateDonator(donator) {
                axios
                    .post(`http://pfmtlaravel.test/api/donators/${this.$route.params.id}`, this.donator)
                    .then((response) => {
                        this.$router.push({name: 'donators'})
                    })
                    .catch(error => {
                        console.log(error)
                    })
            },
        }
    }
</script>

