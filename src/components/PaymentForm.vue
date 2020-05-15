<template>

    <form action="http://pfmtlaravel.test/api/checkout" method="POST" id="payment-form" @submit.prevent="pay()">
     <br>

      <div class="input-group mb-2" style="max-width: 150px; min-width:150px;">
        
        <div class="input-group-prepend">
        <span class="input-group-text" style="background-color:#009ddc">€</span>
        </div>
        <input type="number" class="form-control" aria-label="Amount in Euros" v-model="amount" id="amount" name="amount">
        </div>

    <hr>


     <div class="form-group">
          <label for="amount">Donation Amount</label>
          <input type="number" class="form-control" id="amount" name="amount" v-model="amount">
      </div>

      <div class="form-group">
          <label for="card-element">Card Details</label>
          <card-element></card-element>
      </div>
      <div class="row">
      <div class="col-md-6">
      <div class="form-group">
          <label for="name_on_card">Name on Card</label>
          <input type="text" class="form-control" id="name_on_card" name="name_on_card" v-model="name_on_card">
      </div>
      </div>
      <div class="col-md-6">
       <div class="form-group">
          <label for="email">Email Address</label>
          <input type="email" class="form-control" id="email" name="email" v-model="email">
      </div>
      </div>
      </div>

      <div class="row">
          <div class="col-md-6">
              <div class="form-group">
                  <label for="address">Address</label>
                  <input type="text" class="form-control" id="address" name="address">
              </div>
          </div>

          <div class="col-md-3">
              <div class="form-group">
                  <label for="city">City / Town</label>
                  <input type="text" class="form-control" id="city" name="city">
              </div>
          </div>

      </div>

      <div class="row">
          <div class="col-md-4">
              <div class="form-group">
                  <label for="postalcode">Postal Code</label>
                  <input type="text" class="form-control" id="postalcode" name="postalcode">
              </div>
          </div>

          <div class="col-md-4">
              <div class="form-group">
                  <label for="country">Country</label>
                  <input type="text" class="form-control" id="country" name="country">
              </div>
          </div>

      </div>

  

      <!-- CSRF Field -->
      <input type="hidden" name="_token" :value="csrf">

     

      <button type="submit" class="btn btn-info btn-donation">Make Donation</button>
  </form>

</template>

<script>
    import { createToken, Card } from 'vue-stripe-elements-plus'
    export default {
        name: 'payment-form',
        data () {
            return {
              csrf: document.head.querySelector('meta[name="csrf-token"]').content,
              name_on_card: '',
              amount: '',
              email: '',
            }
        },
        created() {
            this.amount = this.$store.getters.donationAmount
            console.log('Donation amount is ' + this.donationAmount)

        },
        methods: {
            pay () {
              // createToken returns a Promise which resolves in a result object with
              // either a token or an error key.
              // See https://stripe.com/docs/api#tokens for the token object.
              // See https://stripe.com/docs/api#errors for the error object.
              // More general https://stripe.com/docs/stripe.js#stripe-create-token.
              var options = {
                name: this.name_on_card,
              }
              createToken(options).then(result => {
                // var form = document.getElementById('payment-form');
                var hiddenInput = document.createElement('input');
                hiddenInput.setAttribute('type', 'hidden');
                hiddenInput.setAttribute('name', 'stripeToken');
                hiddenInput.setAttribute('value', result.token.id);
                this.$el.appendChild(hiddenInput);
                // Submit the form
                this.$el.submit();
              })
               this.$store.dispatch('updateDonation', amount)
               this.$router.push({name: 'writemessage'})
            }
      }
    }
</script>

<style>

.form-group {
    color: white;
    margin-top: 10px;
    margin-bottom: 10px;
}

.spacer {
    margin-top: 10px;
}

.btn-donation {
    margin-top: 20px;
    background-color: #009ddc;
}


</style>