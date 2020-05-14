<template>
   <div id="app" class="container-fluid">
     <div class="row">
      <div class="nav col-md-12">
          <div class="col-md-6 logo row">  
            <img src="../../assets/mmlogo.png" class="logo">
            <h5 class="logo-element">Present For My Teacher</h5>
          </div>
          <div class="col-md-6 row nav-element">
            <li  v-if="loggedIn"><router-link :to="{ name: 'home' }">Home</router-link></li>
            <li  v-if="loggedIn"><router-link :to="{ name: 'regions' }">Regions</router-link></li>
            <li  v-if="loggedIn"><router-link :to="{ name: 'schools' }">Schools</router-link></li>
            <li  v-if="loggedIn"><router-link :to="{ name: 'donators' }">Donators</router-link></li>
            <li  v-if="loggedIn"><router-link :to="{ name: 'donations' }">Donations</router-link></li>
            <li  v-if="loggedIn"><router-link :to="{ name: 'countries' }">Countries</router-link></li>
            <!--li v-if="!loggedIn"><router-link :to="{ name: 'login' }">Login</router-link></li>
            <li v-if="!loggedIn"><router-link :to="{ name: 'register' }">Register</router-link></li-->
            <li v-if="loggedIn"><router-link :to="{ name: 'logout' }">Logout</router-link></li>
            <!--li v-if="!loggedIn"><router-link :to="{ name: 'login' }">Login</router-link></li-->
          </div>
      </div>
    </div>
        <router-view></router-view>
        <br>
        <pagefooter></pagefooter>
   </div>
        
</template>

<script>
import axios from 'axios'

export default {
    computed: {
      loggedIn() {
        return this.$store.getters.loggedIn
      }
    }
}
</script>

<style lang="scss">
  @import url("https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.5.2/animate.min.css");
  /*@import url('cxlt-vue2-toastr/dist/css/cxlt-vue2-toastr.css');*/
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }


  body, html {
    height: 100%;
    min-width: 300px;
    max-width: 2200px;
}


  #app {
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    height: 100vh;
  }
  .flex-center {
    display: flex;
    justify-content: center;
  }
  .nav {
    display: flex;
    width:100%;
    list-style: none;
    padding: 15px 0;
    margin: 0;
    justify-content: flex-end;
    background: #009DDC;
    margin-bottom: 0px;
    z-index: 99;
    border-bottom: thin solid #009DDC;
    -webkit-box-shadow: 0px 4px 5px 0px rgba(0,0,0,0.75);
    -moz-box-shadow: 0px 4px 5px 0px rgba(0,0,0,0.75);
    box-shadow: 0px 4px 5px 0px rgba(0,0,0,0.75);
  }
  .nav-element {
    align-content: center;
  }
  .nav a {
    color: white;
    padding: 0 25px;
    font-size: 14px;
    font-weight: 600;
    letter-spacing: .1rem;
    text-decoration: none;
    text-transform: uppercase;
  }

  .logo {
    align-content: center;
    height: 30px;
    margin-top:5px;
    margin-bottom:5px;
  }
  .logo-element {
    align-content: center;
    color: #F3a909;
    font-family: 'Gloria Hallelujah', sans-serif;
    padding-top:9px;
    padding-left: 15px;
  }
  // Auth Pages
  label {
    display: block;
    margin-bottom: 4px;
  }
  .login-heading {
    margin-bottom: 16px;
  }
  .form-control {
    margin-bottom: 24px;
  }
  .mb-more {
    margin-bottom: 42px;
  }
  .login-form {
    max-width: 500px;
    margin: auto;
  }
  .login-input {
    width: 100%;
    font-size: 16px;
    padding: 12px 16px;
    outline: 0;
    border-radius: 3px;
    border: 1px solid lightgrey;
  }
  .btn-submit {
    width: 100%;
    padding: 14px 12px;
    font-size: 18px;
    font-weight: bold;
    background: #60BD4F;
    color: white;
    border-radius: 3px;
    cursor: pointer;

    &:hover {
      background: darken(#60BD4F, 10%);
    }
    &:disabled {
      background: lighten(#60BD4F, 25%);
      cursor: not-allowed;
    }
  }
  .server-error {
    margin-bottom: 12px;
    font-size: 16px;
    padding: 10px 16px;
    color: #a94442;
    background: #F3DEDE;
    border-radius: 4px;
  }
  .success-message {
    background-color: #dff0d8;
    color: #3c763d;
    margin-bottom: 12px;
    font-size: 16px;
    padding: 10px 16px;
    border-radius: 4px;
  }
  .form-error {
    font-size: 16px;
    color: #a94442;
  }
  .input-error {
    border: 1px solid red;
  }
  .page-wrapper {
    animation-duration: 0.2s;
  }
  // CSS Spinner
  .lds-ring-container {
    position: absolute;
    right: 50%;
  }
  .lds-ring {
    display: inline-block;
    position: relative;
    width: 64px;
    height: 64px;
  }
  .lds-ring div {
    box-sizing: border-box;
    display: block;
    position: absolute;
    width: 25px;
    height: 25px;
    // margin: 6px;
    border: 3px solid #fff;
    border-radius: 50%;
    animation: lds-ring 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
    border-color: #fff transparent transparent transparent;
  }
  .lds-ring div:nth-child(1) {
    animation-delay: -0.45s;
  }
  .lds-ring div:nth-child(2) {
    animation-delay: -0.3s;
  }
  .lds-ring div:nth-child(3) {
    animation-delay: -0.15s;
  }
  @keyframes lds-ring {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
  /* Small devices (landscape phones, 544px and up) */
  @media (min-width: 10px) {  
    .logo-element {font-size:1.0rem;} /*1rem = 16px*/
  }
 
/* Medium devices (tablets, 768px and up) The navbar toggle appears at this breakpoint */
@media (min-width: 768px) {  
    .logo-element {font-size:1.4rem;}   
}




</style>