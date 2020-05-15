<template>
<div class="col-md-12">
<div class="row spacer">

  <div class="col-md-6 box-image-donation">
  </div>

  <div class="col-md-6 buy-gift-box-donation">
    <div class="gift-text-donation">
      <h2 class="heading-donation"> I want to donate:</h2>
        <div>
                            <b-button-group class="mx-1">
                                   <b-button v-on:click="updateDonation('5.00')" class="donate-button" id="1">€5</b-button>
                                   <b-button v-on:click="updateDonation('10.00')" class="donate-button" id="2">€10</b-button>
                                   <b-button v-on:click="updateDonation('18.30')" class="donate-button" id="3" autofocus="true">€18.30</b-button>
                            </b-button-group>

                            <div class="spacer"></div>

                            <h6 class="heading-donation">Your kind donation of €{{ donationAmount }} will feed a child for: 
                              <span v-if="years > 0">
                                <span v-if="years > 1">    
                                     {{ years }} school years
                                </span>
                                <span v-if="years == 1"> 
                                     {{ years }} entire school year
                                </span>  
                              </span>  
                               <span v-if="months > 0">
                                 <span v-if="years > 0">, plus</span>
                                <span v-if="months > 1">    
                                     {{ months }} months
                                </span>
                                <span v-if="months == 1"> 
                                     {{ months }} month
                                </span>  
                              </span> 
                                 <span v-if="days > 0">
                                <span v-if="days > 1">    
                                    , {{ days }} days
                                </span>
                                <span v-if="days == 1"> 
                                    , {{ days }} days
                                </span>  
                              </span> 
                                  <span v-if="hours > 0">
                                <span v-if="hours > 1">    
                                    , {{ hours }} hours
                                </span>
                                <span v-if="hours == 1"> 
                                    , {{ hours }} hour
                                </span>  
                              </span> 
                              <span v-if="minutes > 0">
                                <span v-if="minutes > 1">    
                                     and {{ minutes }} minutes
                                </span>
                                <span v-if="minutes == 1"> 
                                     and {{ minutes }} minutes
                                </span>  
                              </span> 

                            </h6>
                            <div class="spacer"></div>
        </div>

                            <form @submit.prevent="updateDonationSubmit(donationAmount)">
                               <div class="form-group">
                                     <div class="row">
                                       <div class="col-sm-12 col-md-4" style="max-width: 200px; min-width:200px;">
                                        <p>I want to donate:</p> 
                                       </div>

                                       <div class="input-group mb-2 col-sm-12 col-md-4" style="max-width: 200px; min-width:150px;">
                                          <div class="input-group-prepend">
                                          <span class="input-group-text" style="background-color:#F3a909">€</span>
                                          </div>
                                          <input type="number" class="form-control" aria-label="Amount in Euros" v-model="donationAmount">
                                        </div> 




                                     </div>
                               </div>
                                      <button type="submit" class="btn btn-warning btn-lg">Continue</button>
                              </form>
        </div>
         <!-- string value -->

  </div>
  </div>
</div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'SelectDonation',
  data() {
      return {
        donationAmount: 0,
      }
  }, 
  computed: {
    years() {
                  let tempYears = this.donationAmount / 18.30
                  let wholeYears = Math.floor(tempYears)
          return  wholeYears
    },
    months() {
                  let tempYears = this.donationAmount / 18.30
                  let wholeYears = Math.floor(tempYears)
                  let monthsTemp = (tempYears - wholeYears) * 12
                  let wholeMonths = Math.floor(monthsTemp)
          return  wholeMonths
    },
    days() {
                  let tempYears = this.donationAmount / 18.30
                  let wholeYears = Math.floor(tempYears)
                  let monthsTemp = (tempYears - wholeYears) * 12
                  let wholeMonths = Math.floor(monthsTemp)
                  let daysTemp = (monthsTemp - wholeMonths) * 30
                  let wholeDays = Math.floor(daysTemp)
          return  wholeDays
    },
    hours() {
                  let tempYears = this.donationAmount / 18.30
                  let wholeYears = Math.floor(tempYears)
                  let monthsTemp = (tempYears - wholeYears) * 12
                  let wholeMonths = Math.floor(monthsTemp)
                  let daysTemp = (monthsTemp - wholeMonths) * 30
                  let wholeDays = Math.floor(daysTemp)
                  let hoursTemp = (daysTemp - wholeDays) * 24
                  let wholeHours = Math.floor(hoursTemp)
           return wholeHours       
    },
    minutes() {
                  let tempYears = this.donationAmount / 18.30
                  let wholeYears = Math.floor(tempYears)
                  let monthsTemp = (tempYears - wholeYears) * 12
                  let wholeMonths = Math.floor(monthsTemp)
                  let daysTemp = (monthsTemp - wholeMonths) * 30
                  let wholeDays = Math.floor(daysTemp)
                  let hoursTemp = (daysTemp - wholeDays) * 24
                  let wholeHours = Math.floor(hoursTemp)
                  let minsTemp = (hoursTemp - wholeHours) * 60
                  let minsWhole = Math.floor(minsTemp)
         return minsWhole
    } 
  },
  created() {
            this.donationAmount = this.$store.getters.donationAmount
            console.log('Donation amount is ' + this.donationAmount)

  },
 
  methods: {
            updateDonation(amount) {
                  this.$store.dispatch('updateDonation', amount)
                  
                  this.donationAmount = this.$store.getters.donationAmount
                  //this.$router.push({name: 'makedonation'})
            },
            updateDonationSubmit(amount) {
                  this.$store.dispatch('updateDonation', amount)
                  
                  this.donationAmount = this.$store.getters.donationAmount
                  this.$router.push({name: 'makedonation'})
            },
    },

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>


body, html {
    height: 100%;
    width: 100%;
}

.spacer {
  margin-top: 10px;
  margin-bottom: 10px;
}

.donate-button {
  padding: 20px;
  background-color: #009DDC;
  border: solid thin white;
}

.donate-button:focus {
  background-color: #F3a909;
  border: solid thin white;
}


.box-image-donation {
  /* Use "linear-gradient" to add a darken background effect to the image (photographer.jpg). This will make the text easier to read */
  background-image: linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)), url('../assets/donation.png');
  /* Set a specific height */
  min-height: 300px;
  height: auto;
  width: 100%;
  /* Position and center the image to scale nicely on all screens */
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;
  border: solid thin white;
}

.buy-gift-box-donation {
 height:100%;
 width: 100%;
 background: #009DDC;
 border: solid thin white;
 padding: 70px;
}

.btn {
  font-family: 'Staatliches', sans-serif;
}

.gift-text-donation {
  color: white;
}

.heading-donation {
    font-family: 'Staatliches', sans-serif;
    margin-bottom: 10px;
    text-align: left;
    color:white;
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
