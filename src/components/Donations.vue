<template>
    <div>
        <h3 class="text-center">All Donations</h3><br/>

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
import { mapState } from 'vuex'

export default {
  name: 'Donations',
  data() {
      return {
      }
  },
  created() {
    this.$store.dispatch('retrieveDonations')
  },
  computed: {
      donations() {
          return this.$store.state.donations
      }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
</style>