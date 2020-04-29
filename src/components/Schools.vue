<template>
    <div>
        <h3 class="text-center">All Schools</h3><br/>

        <table class="table table-bordered">
            <thead>
            <tr>
                <th>ID</th>
                <th>Role Number</th>
                <th>Name</th>
                <th>Created At</th>
                <th>Updated At</th>
                <th>Actions</th>
            </tr>
            </thead>
            <tbody>
            <tr v-for="school in schools" :key="school.id">
                <td>{{ school.id }}</td>
                <td>{{ school.roleNumber }}</td>
                <td>{{ school.name }}</td>
                <td>{{ school.created_at }}</td>
                <td>{{ school.updated_at }}</td>
                <td>
                    <div class="btn-group" role="group">
                        <router-link :to="{name: 'editSchool', params: { id: school.id }}" class="btn btn-primary">Edit
                        </router-link>
                        <button class="btn btn-danger" @click="deleteSchool(school.id)">Delete</button>
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
  name: 'Schools',
  data() {
      return {
      }
  },
  created() {
    this.$store.dispatch('retrieveSchools')
  },
  computed: {
      schools() {
          return this.$store.state.schools
      }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
</style>
