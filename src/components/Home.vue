<template>
<div>
<div class="hero-image">
  <div class="hero-text">
    <h1 class="banner">GIVE A SPECIAL GIFT</h1>
    <h2 class="yellow">to your teacher this year</h2>
    <button class="btn btn-primary btn-lg">BUY A PRESENT FOR MY TEACHER</button>
  </div>
</div>
<div class="row home-spacer">
  <div class="col-md-6">
    <div class="col-md-12">
    <h2 class="heading">It costs just 18.30 to feed a child for an entire school year</h2>
    </div>
    <div class="row col-md-12">
    <h4 class="heading col-md-6">Thank your teacher</h4>
    <h4 class="subheading col-md-6"> + feed a child</h4>
    </div>
  </div>
  <div class="col-md-6 narrative">
    <p>Mary's Meals provides life-changing meals to some of the world's poorest children in places of education
      every day. Show your teacher how amazing they are by making a donation in their name and spread the gift of
      hope to more classrooms around the world.
    </p>
  </div>
</div>
<div class="col-md-12 row home-spacer">
  <div class="col-md-6 buy-gift-image">
  </div>
  <div class="col-md-6 buy-gift-box">
    <div class="gift-text">
      <h1 class="heading">I want to buy a gift for:</h1>
            
                <form @submit.prevent="addTeacher">
                    <div class="form-group">
                        <label>Enter your teachers name</label>
                        <input type="text" class="form-control" placeholder="e.g Mrs.Brown" v-model="teacherName">
                    </div>
                    <button type="submit" class="btn btn-warning btn-lg">Continue</button>
                </form>
            
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
        teacherName: ''
      }
  }, 
  methods: {
            addTeacher() {
                  this.$store.dispatch('addTeacher', this.teacherName)
                  this.$router.push({name: 'selectregion'})
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

.buy-gift-image {
  /* Use "linear-gradient" to add a darken background effect to the image (photographer.jpg). This will make the text easier to read */
  background-image: linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)), url('../assets/buyagiftfor.png');
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
 background: #009DDC;
 border: solid thick white;
}

.btn {
  font-family: 'Staatliches', sans-serif;
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
