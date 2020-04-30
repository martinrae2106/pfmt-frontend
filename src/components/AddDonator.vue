<template>
    <div>
        <h3 class="text-center">Add Donator</h3>
        <div class="row">
            <div class="col-md-6">
                <form @submit.prevent="addDonator">
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
                        <label>Consent to Email</label>
                        <input type="checkbox" class="form-control" v-model="donator.emailContactApproved">
                    </div>
                    <div class="form-group">
                        <label>Name of Student</label>
                        <input type="text" class="form-control" v-model="donator.childName">
                    </div>
                    <div class="form-group">
                        <label>Name of Teacher</label>
                        <input type="text" class="form-control" v-model="donator.teacherName">
                    </div>
                    <button type="submit" class="btn btn-primary">Add Donator</button>
                </form>
            </div>
        </div>
        <br>
    </div>
</template>

<script>

import axios from 'axios';

    export default {
        name: 'AddDonator',
        data() {
            return {
                donator: {}
            }
        },
        methods: {
            addDonator() {
                    axios
                    .post('http://pfmtlaravel.test/api/donator/', this.donator)
                    .then(response => (
                        this.$router.push({name: 'donators'})
                        // console.log(response.data)
                    ))
                    .catch(error => console.log(error))
                    .finally(() => this.loading = false)
            }
        }
    }
</script>