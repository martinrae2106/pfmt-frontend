<template>
    <div>
        <card class='stripe-card'
        :class='{ complete }'
        stripe='pk_test_HfGRvLjRVRBk9ARXNPWKJeXG003T3piElZ'
        :options='stripeOptions'
        @change='change($event)'/>
        <div id="card-errors" role="alert" v-text="errorMessage"></div>

    </div>
</template>

<script>
import { Card, createToken } from 'vue-stripe-elements-plus'

export default {
  components: { Card },
  data() {
      return {
          complete: false, 
          errorMessage: '',
          stripeOptions: {

              //see https://stripe.com/docs/stripe.js#element-options for details
              style: {
                  base: {
                      color: '#32325d',
                      lineHeight: '18px',
                      fontFamily: '"Raleway", Helvetica, sans-serif',
                      fontSmoothing: 'antialiased',
                      fontSize: '16px',
                      '::placeholder':{
                          color: '#aab7c4'
                      }
                  },
                  invalid: {
                      color: '#fa755a',
                      iconColor: '#fa755a'
                  }
              },
              hidePostalCode: true
          }
      }
   },
   methods: {
      pay(){
          createToken().then(data => console.log(data.token))
      },
      change(event) {
         // if (event.error) {
                //   this.errorMessage = event.error.message;
                // } else {
                //   this.errorMessage = ''
                // }
        this.errorMessage = event.error ? event.error.message : ''
      }
}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>

.StripeElement {
    background-color: white;
    padding: 10px 12px;
    border-radius: 4px;
    border: 1px solid transparent;
    box-shadow: 0 1px 3px 0 #e6ebf1;
    -webkit-transition: box-shadow 150ms ease;
    transition: box-shadow 150ms ease;
}

.StripeElement--focus {
    box-shadow: - 1px 3px 0 #cfd7df;
}

.StripeElement--invalid {
    border-color: #fa755a;
}

.StripeElement--webkit-autofill {
    background-color: #fefde5 !important;;
}




body, html {
    height: 100%;
}

.home-spacer {
  margin:20px;
}

.donate-button {
  padding: 20px;
  background-color: #009DDC;
  border: solid thin white;

}

.box-image {
  /* Use "linear-gradient" to add a darken background effect to the image (photographer.jpg). This will make the text easier to read */
  background-image: linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)), url('../assets/donation.png');
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
 padding: 50px;
}

.btn {
  font-family: 'Staatliches', sans-serif;
}


.gift-text {
  color: white;
}



.heading {
    font-family: 'Staatliches', sans-serif;
    margin-top: 20px;
}

.subheading {
    color: #F3a909;
    font-family: 'Gloria Hallelujah', sans-serif;
    text-align: left;
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