<template>
<div class="col-md-12 row home-spacer">
  <div class="col-md-6 box-image-region">
  </div>
  <div class="col-md-6 buy-gift-box-region">
    <div class="gift-text-region">
      <h2 class="heading-region">What School do you attend?</h2>
        <div class="row">
            <div class="col-md-12">
                <form @submit.prevent="addSchool">
                    <div class="form-group">
                        <label class="dropdown">Please select your school</label>
                        <b-form-select required class="dropdown" v-model="selected" :options="schools" value-field="id" 
                        text-field="name" placeholder="School" oninvalid="this.setCustomValidity('Select your school')"
                        oninput="setCustomValidity('')"></b-form-select>
                    </div>
                    <button type="submit" class="btn btn-warning btn-lg">Continue</button>
                </form>
            </div>
        </div>
         <!-- string value -->

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
        schools: [],
        selected: null,
      }
  }, 
  created() {
                let id = this.$store.getters.region
                axios
                .get('http://pfmtlaravel.test/api/schools/' +id)
                .then(response => {
                    this.schools = response.data;
                });
  },
  methods: {
            addSchool() {
                  this.$store.dispatch('addSchool', this.selected)
                  console.log(this.selected)
                   this.$router.push({name: 'selectdonation'})
            },
    },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>



body, html {
    height: 100%;
}

.home-spacer {
  margin:20px;
}

.box-image-region {
  /* Use "linear-gradient" to add a darken background effect to the image (photographer.jpg). This will make the text easier to read */
  background-image: linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)), url('../assets/school.png');
  /* Set a specific height */
  width: 100%;
  /* Position and center the image to scale nicely on all screens */
  background-position: left;
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;
  border: solid thin white;
}

.buy-gift-box-region {
 height:500px;
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
  .box-image-region {height:45vh;}
  .buy-gift-box-region  {height:45vh;} 
}
 
/* Medium devices (tablets, 768px and up) The navbar toggle appears at this breakpoint */
@media (min-width: 768px) {  
  .banner {font-size:3rem;} /*1rem = 16px*/
  .yellow {font-size:1.5rem;}   
  .box-image-region {height:45vh;}
  .buy-gift-box-region  {height:45vh;} 
}
 
/* Large devices (desktops, 992px and up) */
@media (min-width: 992px) { 
  .banner {font-size:4rem;} /*1rem = 16px*/
  .yellow {font-size:2rem;}
  .box-image-region {height:45hvh;}
  .buy-gift-box-region  {height:45vh;} 
}
 
/* Extra large devices (large desktops, 1200px and up) */
@media (min-width: 1200px) {  
  .banner {font-size:5rem;} /*1rem = 16px*/ 
  .yellow {font-size:2.5rem;}
  .box-image-region {height:50vh;}
  .buy-gift-box-region  {height:50vh;}    
}
</style>
