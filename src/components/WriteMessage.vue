<template>
<div class="col-md-12">
<div class="row spacer">
  <div class="col-md-6 box-image-message">
  </div>
  <div class="col-md-6 buy-gift-box-message">
    
    <div class="gift-text-message">
        <h1 class="heading-message">Add Your Message:</h1>    
            <div class="row">
            <div class="col-md-12 chalk" style="font-size: 17px;">
                       <div class="paper">
                       <p>Dear {{teacherName}},</p>                         
                        
                       <p>Thank you for being an amazing teacher and making this a special year.</p>

                       <p>As a gift for your inspirational work, I have made a donation to Mary's Meals in your name! This will provide
                          children with school meals and spread hope in classrooms around the world.
                       </p>

                        <p>{{ text }}</p>
                       

                        <p>Kind regards,</p>

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
        text: '',
        teacherName: 'Teacher'
      }
  }, 
  created() {
            this.teacherName = this.$store.getters.teacherName
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

spacer {
  margin-top:10px;
}

.box-image-message {
  /* Use "linear-gradient" to add a darken background effect to the image (photographer.jpg). This will make the text easier to read */
  background-image: linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)), url('../assets/message.png');
  /* Set a specific height */
  margin-top:5px;
  width: 100%;
  min-height: 300px;
  /* Position and center the image to scale nicely on all screens */
  background-position: right;
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;
  border: solid thin white;
}

.paper {
   background-image: linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0)), url('../assets/paper1.jpg');
   border: solid thin white;
   margin-top: 10px;
   margin-bottom:10px;
   padding: 20px;


  /* Position and center the image to scale nicely on all screens */
  background-position: right;
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;
}

.buy-gift-box-message {
 margin-top:5px; 
 min-height: 400px;
 width: 100%;
 background: #009DDC;
 border: solid thin white;
}

.btn {
  font-family: 'Staatliches', sans-serif;
  margin-bottom: 20px
}

.gift-text-message {
  margin-top:6vh;
  margin-left: 2vh;
  margin-right: 2vh;
  color: white;
}


.heading-message {
    font-family: 'Staatliches', sans-serif;
    margin-bottom: 10px;
    text-align: left;

}

.chalk {
    color: white;
    font-family: 'Gloria Hallelujah', sans-serif;
    margin-top: 0px;
    padding-top:0px;

}

.btn-primary {
     font-family: 'Staatliches', sans-serif;
}

/* Small devices (landscape phones, 544px and up) */
@media (min-width: 244px) {  
  .banner {font-size:2.5rem;} /*1rem = 16px*/
  .yellow {font-size:1.2rem;} /*1rem = 16px*/
   .box-image-message {height:auto;}
  .buy-gift-box-message  {height:100%;} 
}
 
/* Medium devices (tablets, 768px and up) The navbar toggle appears at this breakpoint */
@media (min-width: 768px) {  
  .banner {font-size:3rem;} /*1rem = 16px*/
  .yellow {font-size:1.5rem;}   
  .box-image-message {height:auto;}
  .buy-gift-box-message  {height:100%;} 
}
 
/* Large devices (desktops, 992px and up) */
@media (min-width: 992px) { 
  .banner {font-size:4rem;} /*1rem = 16px*/
  .yellow {font-size:2rem;}
  .box-image-message {height:auto;}
  .buy-gift-box-message  {height:100%;} 
}
 
/* Extra large devices (large desktops, 1200px and up) */
@media (min-width: 1200px) {  
  .banner {font-size:5rem;} /*1rem = 16px*/ 
  .yellow {font-size:2.5rem;}   
  .box-image-message {height:auto;}
  .buy-gift-box-message  {height:100%;} 
}

</style>
