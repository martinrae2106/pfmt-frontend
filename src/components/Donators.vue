<template>
    <div>
        <h3 class="text-center">All Donators</h3><br/>

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
import { mapState } from 'vuex'

export default {
  name: 'Donators',
  data() {
      return {
      }
  },
  created() {
    this.$store.dispatch('retrieveDonators')
  },
  computed: {
      donators() {
          return this.$store.state.donators
      }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
</style>
