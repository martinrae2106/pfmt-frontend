<template>
<div>
   <div class="row">
      <div class="hero-image">
        <div class="hero-text">
         <h1 class="banner col-md-12">GIVE A SPECIAL GIFT</h1>
         <h2 class="yellow">to your teacher this year</h2>
         <button class="btn btn-primary btn">BUY A PRESENT FOR MY TEACHER</button>
        </div>
      </div>
  </div>
  <hr>
  <div class="row">
    <div class="col-md-6">
      <h4 class="heading">It costs just €18.30 to feed a child for an entire school year</h4>
      <div class="row col-md-12">
        <div class="col-md-4 heading">
            Thank your teacher
        </div>
        <div class="col-md-4 subheading">
           + feed a child
        </div>
      </div>
    </div>
    <div class="col-md-6">
       <p class="text-justify">Mary's Meals provides life-changing meals to some of the world's poorest children in places of education
      every day. Show your teacher how amazing they are by making a donation in their name and spread the gift of
      hope to more classrooms around the world.
      </p>
    </div>
  </div>
  <hr>



<div class="row">
  <div class="col-md-6 buy-gift-image">
  </div>
  <div class="col-md-6 buy-gift-box">
    <div class="gift-text">
      <h3 class="heading">I want to buy a gift for:</h3>
            
                <div>
                  <b-form @submit.prevent="addTeacher">
                    <b-form-group
                      id="teacherName"
                      label="Enter your Teacher's Name: "
                      label-for="teacherName">

                    <b-form-input :state="validation"
                      id="input-teacherName"
                      v-model="teacherName"
                      type="text"
                      required
                      placeholder="e.g Mrs Brown"
                      oninvalid="this.setCustomValidity('Oops, add teacher')"
                      oninput="setCustomValidity('')">
                      </b-form-input>
                      <b-form-invalid-feedback :state="validation">
                      </b-form-invalid-feedback>
                      <b-form-valid-feedback :state="validation">
                      </b-form-valid-feedback>

                      </b-form-group>
                        <b-button type="submit" variant="warning" :disabled="loading">
                          <b-spinner small type="grow" v-if="loading"></b-spinner>
                          Continue
                        </b-button>              
                  </b-form>
                  </div>
  </div>
  </div>
</div>
</div>
</template>

<script>

export default {
  name: 'Home',
  data() {
      return {
        teacherName: '',
        loading: false,
        serverError: '',
      }
  }, 
  computed: {
      validation() {
        return this.teacherName.length > 0 && this.teacherName.length < 30
      }
  },
  methods: {
            addTeacher() {
                  this.loading = true
                  this.$store.dispatch('addTeacher', this.teacherName)
                  .then(response => {
                    this.loading = false
                    this.$router.push({name: 'selectregion'})
                  })
                  .catch(error => {
                    this.loading = false
                    this.serverError = error.response.data
                  })
            }
  }
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
  background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('../assets/Hero.png');
  /* Set a specific height */
  margin-top: 1px;
  width: 100%;
  margin-top: 1px;
  margin-bottom: 20px;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;
}

/* Place text in the middle of the image */
.hero-text {
  text-align: center;
  position: absolute;
  top: 65%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: white;
}

.banner {
    font-family: 'Staatliches', sans-serif;
    width: 90vh;
    margin-bottom:-10px;
}

.yellow {
    color: #F3a909;
    font-family: 'Gloria Hallelujah', sans-serif;
    margin-top: 0px;
    padding-top:0px;
    margin-bottom:10px;
}

.heading {
    font-family: 'Staatliches', sans-serif;
    margin-bottom: 10px;
    padding-left: 0px;
    text-align: left;

}

.subheading {
    color: #F3a909;
    font-family: 'Gloria Hallelujah', sans-serif;
    text-align: left;
     padding-left: 0px;
     margin-bottom: 10px;
}

.buy-gift-image {
  /* Use "linear-gradient" to add a darken background effect to the image (photographer.jpg). This will make the text easier to read */
  background-image: linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)), url('../assets/buyagiftfor.png');
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

.buy-gift-box {
 background: #009DDC;
 border: solid thin white;
 min-height: 400px;
 width: 100%;
}

.btn {
  font-family: 'Staatliches', sans-serif;
  align-content: center;
}

.gift-text {
  margin-top:6vh;
  margin-left: 2vh;
  margin-right: 2vh;
  color: white;
}

/* Small devices (landscape phones, 544px and up) */
@media (min-width: 10px) {  
  .banner {font-size:2.0rem;} /*1rem = 16px*/
  .yellow {font-size:1.0rem;} /*1rem = 16px*/
  .hero-image {height:40vh;}
  .buy-gift-image {height:auto;}
  .buy-gift-box {height:100%;} 
}
 
/* Medium devices (tablets, 768px and up) The navbar toggle appears at this breakpoint */
@media (min-width: 768px) {  
  .banner {font-size:3rem;} /*1rem = 16px*/
  .yellow {font-size:1.5rem;}   
  .hero-image {height:48vh;}
  .buy-gift-image {height:auto;}
  .buy-gift-box {height:100%;} 
}
 
/* Large devices (desktops, 992px and up) */
@media (min-width: 992px) { 
  .banner {font-size:4rem;} /*1rem = 16px*/
  .yellow {font-size:2rem;}
  .hero-image {height:55vh;}
  .buy-gift-image {height:auto;}
  .buy-gift-box {height:100%;} 
}
 
/* Extra large devices (large desktops, 1200px and up) */
@media (min-width: 1200px) {  
  .banner {font-size:4rem;} /*1rem = 16px*/ 
  .yellow {font-size:2rem;}   
  .hero-image {height:60vh;}
  .buy-gift-image {height:auto;}
  .buy-gift-box {height:100%;} 
}

</style>
