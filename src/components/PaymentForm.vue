
<template>

    


    <form action="http://pfmtlaravel.test/api/checkout" method="POST" id="payment-form" @submit.prevent="pay()">

    

    <div class="form-group">
      <div class="input-group mb-2" style="width: 200px;">
           <div class="input-group-prepend">
                <span class="input-group-text" style="background-color:#009ddc">€</span>
            </div>
          <b-form-input :state="validationamount" type="text" class="form-control" id="amount" name="amount" v-model="amount" @keypress="isNumber($event)"></b-form-input>
           <b-form-invalid-feedback :state="validationamount">
            </b-form-invalid-feedback>
            <b-form-valid-feedback :state="validationamount">
            </b-form-valid-feedback>    
      </div>
    </div>
          
      <div class="row">
        
        <div class="col-md-12">     
        <div class="form-group" style="margin-top:30px; margin-bottom:20px;">
            <b-form-checkbox size="lg" oninvalid="this.setCustomValidity('Please check this box')" oninput="setCustomValidity('')"
            required
            id="checkbox-1"
            v-model="cardholder"
            name="checkbox-1"
            value="accepted"
            unchecked-value="not_accepted" class=""
            :state="validationcardholder">
            I confirm that I am the card holder and am 13 years or older
            </b-form-checkbox>
             <b-form-invalid-feedback :state="validationcardholder">
            </b-form-invalid-feedback>
            <b-form-valid-feedback :state="validationcardholder">
            </b-form-valid-feedback>
        </div>   
        </div>

      <div class="col-md-6">
      <div class="form-group">
          <label for="name_on_card">Name on Card</label>
          <b-form-input :state="validationname" required  oninvalid="this.setCustomValidity('Add name on card')" oninput="setCustomValidity('')"
          type="text" class="form-control" id="name_on_card" name="name_on_card" v-model="name_on_card"></b-form-input>
             <b-form-invalid-feedback :state="validationname">
            </b-form-invalid-feedback>
            <b-form-valid-feedback :state="validationname">
            </b-form-valid-feedback>    
      </div>
      </div>

      <div class="col-md-6">
       <div class="form-group">
          <label for="email">Email Address</label>
          <b-form-input :state="validationemail" required oninvalid="this.setCustomValidity('Add valid email address')" oninput="setCustomValidity('')" 
          type="email" class="form-control" id="email" name="email" v-model="email"></b-form-input>
           <b-form-invalid-feedback :state="validationemail">
            </b-form-invalid-feedback>
            <b-form-valid-feedback :state="validationemail">
            </b-form-valid-feedback>
      </div>
      </div>
      </div>

      <div class="row">
          <div class="col-md-6">
              <div class="form-group">
                  <label for="address">Address</label>
                  <b-form-input :state="validationaddress" required oninvalid="this.setCustomValidity('Add first line of your address')" oninput="setCustomValidity('')"
                  type="text" class="form-control" id="address" name="address" v-model="address"></b-form-input>
           <b-form-invalid-feedback :state="validationaddress">
            </b-form-invalid-feedback>
            <b-form-valid-feedback :state="validationaddress">
            </b-form-valid-feedback>
              </div>
          </div>

          <div class="col-md-3">
              <div class="form-group">
                  <label for="city">City / Town</label>
                  <b-form-input :state="validationcity" required oninvalid="this.setCustomValidity('Add your town or city')" oninput="setCustomValidity('')"
                  type="text" class="form-control" id="city" name="city" v-model="city"></b-form-input>
           <b-form-invalid-feedback :state="validationcity">
            </b-form-invalid-feedback>
            <b-form-valid-feedback :state="validationcity">
            </b-form-valid-feedback>
              </div>
          </div>
          </div>
    
         <div class="row">
          <div class="col-md-6">
              <div class="form-group">
                  <label for="postalcode">Eire Code</label>
                 <b-form-input :state="validationcode" required oninvalid="this.setCustomValidity('Add Eire Code')" oninput="setCustomValidity('')"
                   type="text" class="form-control" id="postalcode" name="postalcode" v-model="postalcode"></b-form-input>
           <b-form-invalid-feedback :state="validationcode">
            </b-form-invalid-feedback>
            <b-form-valid-feedback :state="validationcode">
            </b-form-valid-feedback>
              </div>
          </div>
         
  
        

        <div class="col-md-6">
              <div class="form-group">
                  <label for="country">Country</label>
                  <b-form-input :state="validationcountry" required oninvalid="this.setCustomValidity('Add your country')" oninput="setCustomValidity('')"
                   type="text" class="form-control" id="country" name="country" v-model="country"></b-form-input>
           <b-form-invalid-feedback :state="validationcountry">
            </b-form-invalid-feedback>
            <b-form-valid-feedback :state="validationcountry">
            </b-form-valid-feedback>
              </div>
          </div>
        </div>
     
      <div class="form-group">
          <label for="card-element">Card Details</label>
          <card-element></card-element>
      </div>

       <div class="col-md-12"> 
           <h3 class="keep-in-touch">Keep In Touch:</h3>    
        <div class="form-group" style="margin-top:10px; margin-bottom:20px;">
            <b-form-checkbox size="lg"
            id="checkbox-2"
            v-model="emailconsent"
            name="checkbox-2"
            value="accepted"
            unchecked-value="not_accepted" class="">
            I would like to hear the latest news via email about Present For My Teacher, including fundraising progress and future campaigns.
            </b-form-checkbox>
        </div>   
        </div>  

    


      <!-- CSRF Field -->
      <input type="hidden" name="_token" :value="csrf">

      <div class="spacer"></div>
      <br>
      
   <!--div v-if="serverError" class="server-error">{{ serverError }}</div>
    <div v-if="successMessage" class="success-message">{{ successMessage }}</div-->

      <b-button type="submit" variant="info lg" :disabled="loading">
         <b-spinner small type="grow" v-if="loading"></b-spinner>
            Make Donation
       </b-button> 
  </form>
</template>

<script>
    import { createToken, Card } from 'vue-stripe-elements-plus'
    export default {
        data () {
            return {
              csrf: document.head.querySelector('meta[name="csrf-token"]').content,
              name_on_card: '',
              amount: '',
              email: '',
              address: '',
              city: '',
              postalcode: '',
              cardholder: 'not_accepted',
              country: '',
              serverError: '',
              successMessage: '',
              loading: false,
            }
        },
        created() {
            this.amount = this.$store.getters.donationAmount
            console.log('Donation amount is ' + this.amount)
        },
        computed: {
            validationemail() {
                return this.email.length > 4
            },
            validationamount() {
                return this.amount.length > 0 && this.amount != 0
            },
            validationname() {
                return this.name_on_card.length > 1
            },
             validationaddress() {
                return this.address.length > 1
            },
             validationcity() {
                return this.city.length > 1
            }, 
            validationcode() {
                return this.postalcode.length > 1
            },
            validationcountry() {
                return this.country.length > 1
            },
            validationcardholder() {
                return this.cardholder == 'accepted'
            },


       
            
        
        },
        methods: {
            pay () {
              this.loading = true  
              // createToken returns a Promise which resolves in a result object with
              // either a token or an error key.
              // See https://stripe.com/docs/api#tokens for the token object.
              // See https://stripe.com/docs/api#errors for the error object.
              // More general https://stripe.com/docs/stripe.js#stripe-create-token.
              var options = {
                name: this.name_on_card,
              }
                createToken(options).then(result => {
                //var form = document.getElementById('payment-form');
                var hiddenInput = document.createElement('input');
                hiddenInput.setAttribute('type', 'hidden');
                hiddenInput.setAttribute('name', 'stripeToken');
                hiddenInput.setAttribute('value', result.token.id);
                this.$el.appendChild(hiddenInput);
                // Submit the form
                this.$el.submit()
                
                //this.successMessage = 'Your donation was processed successfully!'
                
              })
             
              //this.$router.push({name: 'writemessage'})
            },
            isNumber: function(evt) {
                    evt = (evt) ? evt : window.event;
                    var charCode = (evt.which) ? evt.which : evt.keyCode;
                    if ((charCode > 31 && (charCode < 48 || charCode > 57)) && charCode !== 46) {
                        evt.preventDefault();   
                    } else {
                        return true;
                    }
                }
      }
    }
</script>

<style>
.form-group {
    color: white;
    margin-top: 5px;
    margin-bottom: 5px;
}

.spacer {
    margin-top: 10px;
}

.btn-donation {
    margin-top: 20px;
    background-color: #009ddc;
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

.keep-in-touch {
    font-family: 'Staatliches', sans-serif;
    color: white;
    margin-top: 30px;
}


</style>