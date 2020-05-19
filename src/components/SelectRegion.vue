<template>
<div class="col-md-12">
<div class="row spacer"> 
  <div class="col-md-6 box-image-region">
  </div>
  <div class="col-md-6 buy-gift-box-region">
    <div class="gift-text-region">
      <h2 class="heading-region">I go to school in:</h2>
        <div class="row">
            <div class="col-md-12">
                <form @submit.prevent="addRegion">
                    <div class="form-group">
                        <label class="dropdown">What region is your school in?</label>
                        <b-form-select required class="dropdown" v-model="selected" :options="regions" value-field="id" text-field="name" 
                        oninvalid="this.setCustomValidity('Select your region')"
                        oninput="setCustomValidity('')" placeholder="region"></b-form-select>
                    </div>
                      <b-button type="submit" variant="warning" :disabled="loading">
                          <b-spinner small type="grow" v-if="loading"></b-spinner>
                          Continue
                      </b-button>
                </form>
            </div>
        </div>
         <!-- string value -->

  </div>
  </div>
</div>
</div>
</template>

<script>
import { ModelSelect } from 'vue-search-select'
import axios from 'axios';

export default {
  name: 'SelectRegion',
  data() {
      return {
        teacherName: '',
        regions: [],
        selected: null,
        loading: false,
      }
  }, 
  created() {
                axios
                .get('http://pfmtlaravel.test/api/regions')
                .then(response => {
                    this.regions = response.data;
                });
  },
  methods: {
            addRegion() {
                  this.loading = true
                  this.$store.dispatch('addRegion', this.selected)
                  .then(response => {
                    this.loading = false
                    this.$router.push({name: 'selectschool'})
                  })
                  .catch(error => {
                    this.loading = false
                    this.serverError = error.response.data
                  })
            },
    },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>


body, html {
    height: 100%;
}

/* The hero image */
.hero-image {
  /* Use "linear-gradient" to add a darken background effect to the image (photographer.jpg). This will make the text easier to read */
  background-image: linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url('../assets/Hero.png');
  /* Set a specific height */
  margin-top: 1px;
  width: 100%;
  min-height: 300px;
  margin-bottom: 20px;


  /* Position and center the image to scale nicely on all screens */
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;
}

.spacer {
  margin-top:10px;
}

.box-image-region {
  /* Use "linear-gradient" to add a darken background effect to the image (photographer.jpg). This will make the text easier to read */
  background-image: linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)), url('../assets/school.png');
  /* Set a specific height */
  width: 100%;
  min-height: 300px;
  /* Position and center the image to scale nicely on all screens */
  background-position: left;
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;
  border: solid thin white;
}

.buy-gift-box-region {
 min-height: 400px;
 width: 100%;
 background: #009DDC;
 border: solid thin white;
}

.btn {
  font-family: 'Staatliches', sans-serif;
}


.gift-text-region {
  margin-top:6vh;
  margin-left: 2vh;
  margin-right: 2vh;
  color: white;
}

.heading-region {
    font-family: 'Staatliches', sans-serif;
    margin-bottom: 10px;
    text-align: left;
}

/* Small devices (landscape phones, 544px and up) */
@media (min-width: 244px) {  
  .banner {font-size:2.5rem;} /*1rem = 16px*/
  .yellow {font-size:1.2rem;} /*1rem = 16px*/
  .box-image-region {height:auto;}
  .buy-gift-box-region  {height:100%;} 
}
 
/* Medium devices (tablets, 768px and up) The navbar toggle appears at this breakpoint */
@media (min-width: 768px) {  
  .banner {font-size:3rem;} /*1rem = 16px*/
  .yellow {font-size:1.5rem;}   
  .box-image-region {height:auto;}
  .buy-gift-box-region  {height:100%;} 
}
 
/* Large devices (desktops, 992px and up) */
@media (min-width: 992px) { 
  .banner {font-size:4rem;} /*1rem = 16px*/
  .yellow {font-size:2rem;}
  .box-image-region {height:auto;}
  .buy-gift-box-region  {height:100%;} 
}
 
/* Extra large devices (large desktops, 1200px and up) */
@media (min-width: 1200px) {  
  .banner {font-size:5rem;} /*1rem = 16px*/ 
  .yellow {font-size:2.5rem;}
  .box-image-region {height:auto;}
  .buy-gift-box-region  {height:100%;}    
}

</style>
