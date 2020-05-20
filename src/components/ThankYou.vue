<template>
<div class="col-md-12">
<div class="row spacer">
  <div class="col-md-6 box-image-thanks">
  </div>
  <div class="col-md-6 buy-gift-box-thanks">
    
    <div class="gift-text-thanks">
        <h1 class="heading-thanks">Thank You!</h1>
          <p>Your gift is going to help feed children all around the world!</p>

        <h1 class="heading-thanks">Share your gift:</h1>
          <p>Download and print your gift certificate to give to your teacher.</p>

        <button class="btn btn-warning btn-lg" style="margin-top: 10px; margin-bottom: 20px;"><svg width="25" height="25" class="bi" viewBox="0 0 20 20" ><path fill-rule="evenodd" d="M2.5 10a.5.5 0 01.5.5V14a1 1 0 001 1h12a1 1 0 001-1v-3.5a.5.5 0 011 0V14a2 2 0 01-2 2H4a2 2 0 01-2-2v-3.5a.5.5 0 01.5-.5z" clip-rule="evenodd"/>
        <path fill-rule="evenodd" d="M7 9.5a.5.5 0 01.707 0L10 11.793 12.293 9.5a.5.5 0 01.707.707l-2.646 2.647a.5.5 0 01-.708 0L7 10.207A.5.5 0 017 9.5z" clip-rule="evenodd"/>
        <path fill-rule="evenodd" d="M10 3a.5.5 0 01.5.5v8a.5.5 0 01-1 0v-8A.5.5 0 0110 3z" clip-rule="evenodd"/>
        </svg><span class="b-txt">download</span></button>


          
          
          <p> Spread your message of hope and tell your classmates where they can buy the perfect gift for your teacher! </p>
          
          <div class="row col-md-12">
          
          <ShareNetwork
          network="facebook"
          url="https://www.marysmeals.ie/"
          title="Thank your teacher by donating to Marys Meals"
          description="You can make a donation and thank your teacher at PresentForMyTeacher"
          quote="I have just donated to Mary's Meals and thanked my teacher!"
          hashtags="MarysMealsPresentForMyTeacher"
          >
          <div class="facebook"></div>
          </ShareNetwork>
     

    

          <ShareNetwork
          network="pinterest"
          url="https://www.marysmeals.ie/"
          title="Thank your teacher by donating to Marys Meals"
          description="You can make a donation and thank your teacher at PresentForMyTeacher"
          quote="I have just donated to Mary's Meals and thanked my teacher!"
          hashtags="MarysMealsPresentForMyTeacher"
          >
          <div class="pinterest"></div>
          </ShareNetwork>
  


         
          <ShareNetwork
          network="twitter"
          url="https://www.marysmeals.ie/"
          title="Thank your teacher by donating to Marys Meals"
          description="You can make a donation and thank your teacher at PresentForMyTeacher"
          quote="I have just donated to Mary's Meals and thanked my teacher!"
          hashtags="MarysMealsPresentForMyTeacher"
          >
          <div class="twitter"></div>
          </ShareNetwork>
          


     
          <ShareNetwork
          network="whatsapp"
          url="https://www.marysmeals.ie/"
          title="Thank your teacher by donating to Marys Meals"
          description="You can make a donation and thank your teacher at PresentForMyTeacher"
          quote="I have just donated to Mary's Meals and thanked my teacher!"
          hashtags="MarysMealsPresentForMyTeacher"
          >
          <div class="whatsapp"></div>
          </ShareNetwork>
    
          <ShareNetwork
          network="email"
          url="https://www.marysmeals.ie/"
          title="Thank your teacher by donating to Marys Meals"
          description="You can make a donation and thank your teacher at PresentForMyTeacher"
          quote="I have just donated to Mary's Meals and thanked my teacher!"
          hashtags="MarysMealsPresentForMyTeacher"
          >
          <div class="email"></div>
          </ShareNetwork>
          
          </div>
        <br>
        <h1 class="heading-thanks">Did You Know?</h1>
          <p>School attendance increases <b>by 20%</b> in schools where Mary's Meals provides food. This means more children are helped by amazing teachers 
          just like yours!</p>
        <br>
        <br>


            
    </div>
  </div>
         <!-- string value -->

  </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'ThankYou',
  data() {
      return {
        pupilName: '',
        text: '',
        teacherName: 'Teacher',
        donationAmount: '',
        includeDonationAmount: 'not_accepted',
      }
  }, 
  created() {
            this.teacherName = this.$store.getters.teacherName
            this.donationAmount = this.$store.getters.donationAmount
  },
  methods: {
            addMessage() {
                  this.$store.dispatch('addMessage', this.text)
                  this.$store.dispatch('addPupilName', this.pupilName)
                  this.$store.dispatch('addIncludeDonationAmount', this.includeDonationAmount)
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

.facebook {
    background-image: linear-gradient(rgba(0, 0, 0, 0.0), rgba(0, 0, 0, 0.0)), url('../assets/facebook.png');
    height: 50px;
    width: 50px;
    background-repeat: no-repeat;
    background-size: cover;
    cursor: pointer;
}

.facebook:hover {
    background-image: linear-gradient(rgba(0, 0, 1, 0.0), rgba(0, 0, 1, 0.0)), url('../assets/facebook.png');
    height: 50px;
    width: 50px;
    background-repeat: no-repeat;
    background-size: cover;
  }

  
.email {
    background-image: linear-gradient(rgba(0, 0, 0, 0.0), rgba(0, 0, 0, 0.0)), url('../assets/email.png');
    height: 50px;
    width: 75px;
    background-repeat: no-repeat;
    background-size: cover;
    cursor: pointer;
}

.email:hover {
    background-image: linear-gradient(rgba(0, 0, 1, 0.0), rgba(0, 0, 1, 0.0)), url('../assets/email.png');
    height: 50px;
    width: 75px;
    background-repeat: no-repeat;
    background-size: cover;
  }

  .pinterest {
    background-image: linear-gradient(rgba(0, 0, 0, 0.0), rgba(0, 0, 0, 0.0)), url('../assets/pinterest.png');
    height: 50px;
    width: 50px;
    background-repeat: no-repeat;
    background-size: cover;
    cursor: pointer;
}

.pinterest:hover {
    background-image: linear-gradient(rgba(0, 0, 1, 0.0), rgba(0, 0, 1, 0.0)), url('../assets/pinterest.png');
    height: 50px;
    width: 50px;
    background-repeat: no-repeat;
    background-size: cover;
  }

.twitter {
    background-image: linear-gradient(rgba(0, 0, 0, 0.0), rgba(0, 0, 0, 0.0)), url('../assets/twitter.png');
    height: 50px;
    width: 50px;
    background-repeat: no-repeat;
    background-size: cover;
    cursor: pointer;
}

.twitter:hover {
    background-image: linear-gradient(rgba(0, 0, 1, 0.0), rgba(0, 0, 1, 0.0)), url('../assets/twitter.png');
    height: 50px;
    width: 50px;
    background-repeat: no-repeat;
    background-size: cover;
  }

.whatsapp {
    background-image: linear-gradient(rgba(0, 0, 0, 0.0), rgba(0, 0, 0, 0.0)), url('../assets/whatsapp.png');
    height: 50px;
    width: 50px;
    background-repeat: no-repeat;
    background-size: cover;
    cursor: pointer;
}

.whatsapp:hover {
    background-image: linear-gradient(rgba(0, 0, 1, 0.0), rgba(0, 0, 1, 0.0)), url('../assets/whatsapp.png');
    height: 50px;
    width: 50px;
    background-repeat: no-repeat;
    background-size: cover;
}


.box-image-thanks {
  /* Use "linear-gradient" to add a darken background effect to the image (photographer.jpg). This will make the text easier to read */
  background-image: linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)), url('../assets/thankyou.png');
  /* Set a specific height */
  margin-top:5px;
  width: 100%;
  min-height: 300px;
  /* Position and center the image to scale nicely on all screens */
  background-position: center;
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

.buy-gift-box-thanks {
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

.gift-text-thanks {
  margin-top:6vh;
  margin-left: 2vh;
  margin-right: 2vh;
  color: white;
}


.heading-thanks {
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

 svg.bi {
	position: relative;
	left: -5px;
	top: -1px;
	display: inline-block;
	vertical-align: middle;
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
