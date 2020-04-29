<template>
    <div>
        <h3 class="text-center">All Countries</h3><br/>

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
import { mapState } from 'vuex'

export default {
  name: 'Countries',
  data() {
      return {
      }
  },
  created() {
    this.$store.dispatch('retrieveCountries')
  },
  computed: {
      countries() {
          return this.$store.state.countries
      }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
</style>
