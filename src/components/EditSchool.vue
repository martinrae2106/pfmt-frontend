<template>
    <div>
        <h3 class="text-center">Edit School</h3>
        <div class="row">
            <div class="col-md-6">
                <form @submit.prevent="updateSchool">
                    <div class="form-group">
                        <label>Role Number</label>
                        <input type="text" class="form-control" v-model="school.roleNumber">
                    </div>
                    <div class="form-group">
                        <label>Name</label>
                        <input type="text" class="form-control" v-model="school.name">
                    </div>
                    <button type="submit" class="btn btn-primary">Update School</button>
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
                school: {}
            }
        },
        created() {
                axios
                .get(`http://pfmtlaravel.test/api/school/${this.$route.params.id}`)
                .then((response) => {
                    this.school = response.data;
                }) ;
        },
        methods: {
            updateSchool(school) {
                axios
                    .patch(`http://pfmtlaravel.test/api/schools/${this.$route.params.id}`, {
                        roleNumber: this.school.name,
                        name: this.school.name,
                    })
                    .then((response) => {
                        this.$router.push({name: 'schools'})
                    })
                    .catch(error => {
                        console.log(error)
                    })
            },
        }
    }
</script>