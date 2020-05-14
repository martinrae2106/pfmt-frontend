import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)
axios.defaults.baseURL = 'http://pfmtlaravel.test/api'

export const store = new Vuex.Store({
    state: {
        token: localStorage.getItem('access_token') || null, //The same logiv for local storage to be implemented on name
        schoool: '',                                         //and teacherName so that a page refresh does not wipe this
        pupilName: '',                                //as set in RetrieveToken
        teacherName: 'Mrs. Brown',
        region: '',
        message: '',
        donationAmount: '18.30',
        //regions: [],
    }, 
    getters: {
        loggedIn(state){
            return state.token !== null
        },
        token(state){
            return state.token
        },
        region(state){
            return  state.region
        },
        donationAmount(state){
           return state.donationAmount
        }
    },
    mutations: {
     retrieveToken(state, token){
         state.token = token
     },
     destroyToken(state){
         state.token = null
     },
     addTeacher(state, teacherName){
        state.teacherName = teacherName
        console.log("the state's teacher name is " + state.teacherName)
     },
     addRegion(state, region){
      state.region = region
      console.log("the state's region id is " + state.region)
     },
     addSchool(state, school){
      state.school = school
      console.log("the state's school id is " + state.school)
     },
     updateDonation(state, donationAmount){
       state.donationAmount = donationAmount
       console.log("the state's donation amount is " + state.donationAmount)
     },
     addMessage(state, message){
      state.message = message
      console.log("the state's message is " + state.message)
     },
     addPupilName(state, pupilName){
       state.pupilName = pupilName
       console.log("the pupil's name is " +state.pupilName)
     }
    },
    actions: {
        register(context, data) {
            return new Promise((resolve, reject) => {
                axios.post('/register', {
                    name: data.name,
                    email: data.email,
                    password: data.password,
                })
                .then(response => {
                    resolve(response)
                  })
                  .catch(error => {
                   reject(error)
                  })
                })
        },
        destroyToken(context){

            axios.defaults.headers.common['Authorization'] = 'Bearer ' + context.state.token

            if(context.getters.loggedIn){
                return new Promise((resolve, reject) => {
                    axios.post('/logout')
                      .then(response => {
                        localStorage.removeItem('access_token')
                        context.commit('destroyToken')
                        resolve(response)
                        // console.log(response);
                        // context.commit('addTodo', response.data)
                      })
                      .catch(error => {
                        localStorage.removeItem('access_token')
                        context.commit('destroyToken')
                        reject(error)
                      })
                    })
            }
        },
        retrieveToken(context, credentials) {

            return new Promise((resolve, reject) => {
              axios.post('/login', {
                username: credentials.username,
                password: credentials.password,
              })
                .then(response => {
                  const token = response.data.access_token
      
                  localStorage.setItem('access_token', token)
                  context.commit('retrieveToken', token)
                  resolve(response)
                  // console.log(response);
                  // context.commit('addTodo', response.data)
                })
                .catch(error => {
                  console.log(error)
                  reject(error)
                })
              })
        },
        addTeacher(context, teacherName)
        {
              context.commit('addTeacher', teacherName)
        },
        addRegion(context, region)
        {
              context.commit('addRegion', region)
        },
        addSchool(context, school)
        {
              context.commit('addSchool', school)
        },
        updateDonation(context, donationAmount)
        {
              context.commit('updateDonation', donationAmount)
        },
        addMessage(context, message)
        {
              context.commit('addMessage', message)
        },
        addPupilName(context, pupilName)
        {
              context.commit('addPupilName', pupilName)
        },
        
    },    
})