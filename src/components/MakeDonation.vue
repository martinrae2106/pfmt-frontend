<template>
<div>
    <div class="col-md-12 row home-spacer">
        <div class="col-md-6 box-image">
        </div>
        <div class="col-md-6 buy-gift-box">
            <payment-form></payment-form>
        </div>
    </div>
</div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'MakeDonation',
  data() {
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
