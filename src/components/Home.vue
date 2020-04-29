<template>
    <div>
        <h3 class="text-center">All Regions</h3><br/>

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
                    <!--div class="btn-group" role="group">
                        <router-link :to="{name: 'editRegion', params: { id: region.id }}" class="btn btn-primary">Edit
                        </router-link>
                        <button class="btn btn-danger" @click="deleteRegion(region.id)">Delete</button>
                    </div-->
                </td>
            </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'Home',
  data() {
      return {
      }
  },
  created() {
    this.$store.dispatch('retrieveRegions')
  },
  computed: {
      regions() {
          return this.$store.state.regions
      }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
</style>
