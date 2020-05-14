<template>
<div>
<div class="col-md-12 row home-spacer">
  <div class="col-md-6 box-image">
  </div>
  <div class="col-md-6 buy-gift-box">
    <div class="gift-text">
        <div class="row">
            <h1 class="heading">Add Your Message:</h1>
            <div class="col-md-12">
                       <p>Dear             ,</p>                         
                        
                       <p>Thank you for being an amazing teacher and making this a special year.</p>

                       <p>As a gift for your inspirational work, I have made a donation to Mary's Meals in your name! This will provide
                          children with school meals and spread hope in classrooms around the world.
                       </p>


                        <div class="col-md-8">
                        <p>{{ text }}</p>
                        </div>

                        <p>Kind regards,</p>

                        <div class="col-md-8">
                        <p>{{ pupilName }}</p>
                        </div>

                    <form @submit.prevent="addMessage">
                        <div>
                            <b-form-textarea
                            id="textarea"
                            v-model="text"
                            placeholder="Enter your personalised message......"
                            rows="3"
                            max-rows="3"
                            :state="text.length >= 10"
                            ></b-form-textarea>
                        </div>

                            <b-form-input id="pupilName" v-model="pupilName" placeholder="Enter your name (Optional)"></b-form-input>
                        

                       
                        
                    <button type="submit" class="btn btn-warning btn-lg">Continue</button>
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
import axios from 'axios';

export default {
  name: 'WriteMessage',
  data() {
      return {
        pupilName: '',
        text: ''
      }
  }, 
  methods: {
            addMessage() {
                  this.$store.dispatch('addMessage', this.text)
                  this.$store.dispatch('addPupilName', this.pupilName)
                  this.$router.push({name: 'thankyou'})
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
  height: 550px;
  width: 100%;
  margin-bottom: 20px;


  /* Position and center the image to scale nicely on all screens */
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;
}

.home-spacer {
  margin:20px;
}

.box-image {
  /* Use "linear-gradient" to add a darken background effect to the image (photographer.jpg). This will make the text easier to read */
  background-image: linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)), url('../assets/message.png');
  /* Set a specific height */
  height: 500px;
  width: 100%;
  /* Position and center the image to scale nicely on all screens */
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;
  border: solid thick white;
}

.buy-gift-box {
 height:500px;
 width: 100%;
 background: #009DDC;
 border: solid thick white;
}

.btn {
  font-family: 'Staatliches', sans-serif;
}

.dropdown {
  margin-left: 70px;
}


.narrative {
  font-size: 20px;
  align-content: center;
  padding-right: 40px;
}
/* Place text in the middle of the image */
.hero-text {
  text-align: center;
  position: absolute;
  top: 60%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: white;
}

.gift-text {
  text-align: center;
  position: absolute;
  top: 30%;
  left: 30%;
  transform: translate(-50%, -50%);
  color: white;
}

.banner {
    font-family: 'Staatliches', sans-serif;
    margin-bottom: 0px;
    text-align: center;

}

.heading {
    font-family: 'Staatliches', sans-serif;
    margin-bottom: 10px;
    padding-left: 60px;
    text-align: left;

}

.subheading {
    color: #F3a909;
    font-family: 'Gloria Hallelujah', sans-serif;
    text-align: left;
}


.yellow {
    color: #F3a909;
    font-family: 'Gloria Hallelujah', sans-serif;
    margin-top: 0px;
    margin-bottom: 20px;
}

.btn-primary {
     font-family: 'Staatliches', sans-serif;
}

/* Small devices (landscape phones, 544px and up) */
@media (min-width: 244px) {  
  .banner {font-size:2.5rem;} /*1rem = 16px*/
  .yellow {font-size:1.2rem;} /*1rem = 16px*/
}
 
/* Medium devices (tablets, 768px and up) The navbar toggle appears at this breakpoint */
@media (min-width: 768px) {  
  .banner {font-size:3rem;} /*1rem = 16px*/
  .yellow {font-size:1.5rem;}   
}
 
/* Large devices (desktops, 992px and up) */
@media (min-width: 992px) { 
  .banner {font-size:4rem;} /*1rem = 16px*/
  .yellow {font-size:2rem;}
}
 
/* Extra large devices (large desktops, 1200px and up) */
@media (min-width: 1200px) {  
  .banner {font-size:5rem;} /*1rem = 16px*/ 
  .yellow {font-size:2.5rem;}   
}

</style>
