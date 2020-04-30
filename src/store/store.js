import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)
axios.defaults.baseURL = 'http://pfmtlaravel.test/api'

export const store = new Vuex.Store({
    state: {
        schoool: '',
        pupilName: 'Charlie',
        teacherName: 'Mrs. Brown',
        regions: [],
        schools: [],
        donators: [],
        donations: [],
        countries: [],
        region: '',
    }, 
    getters: {
        getSchool(state) {
            return state.school //now in the component you say return this.$store.getters.remaining
        },
        getPupilName(state){
            return state.pupilName
        },
        getTeacherName(state){
            return state.teacherName
        },
    },
    mutations: {
       retrieveRegions(state, regions) {
           state.regions = regions
       }, 
       retrieveSchools(state, schools) {
            state.schools = schools
        },
        retrieveDonators(state, donators) {
            state.donators = donators
        },
        retrieveDonations(state, donations) {
            state.donations = donations
        },  
        retrieveCountries(state, countries) {
            state.countries = countries
        },
        retrieveRegion(state, region) {
            state.region = region
        },
        updateRegion(state, region) {
            const index = state.regions.findIndex(item => item.id == region.id)
            state.regions.splice(index, 1, {
              'id': region.id,
              'name': region.name,
            })
        },

    },
    actions: {
        retrieveRegions(context) {
            axios.get('/regions')
            .then(response => {
                context.commit('retrieveRegions', response.data)
            })
            .catch(error => {
                console.log(error)
            })
        },
        retrieveSchools(context) {
            axios.get('/schools')
            .then(response => {
                context.commit('retrieveSchools', response.data)
            })
            .catch(error => {
                console.log(error)
            })
        },
        retrieveDonators(context) {
            axios.get('/donators')
            .then(response => {
                context.commit('retrieveDonators', response.data)
            })
            .catch(error => {
                console.log(error)
            })
        },
        retrieveDonations(context) {
            axios.get('/donations')
            .then(response => {
                context.commit('retrieveDonations', response.data)
            })
            .catch(error => {
                console.log(error)
            })
        },
        retrieveCountries(context) {
            axios.get('/countries')
            .then(response => {
                context.commit('retrieveCountries', response.data)
            })
            .catch(error => {
                console.log(error)
            })
        },
        updateRegion(context, region) {
            axios.patch('/regions/' + region.id, {
              region: region.name,
            })
              .then(response => {
                context.commit('updateRegion', response.data)
              })
              .catch(error => {
                console.log(error)
              })
        },
        retrieveRegion(context, id) {
            axios.get('/region/' +id)
            .then(response => {
                context.commit('retrieveRegion', response.data)
            })
            .catch(errpr => {
                console.log(error)
            })
        }
    }
})