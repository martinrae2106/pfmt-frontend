<template>

    <form action="http://pfmtlaravel.test/api/checkout" method="POST" id="payment-form" @submit.prevent="pay()">
     

      <div class="form-group">
          <label for="amount">Donation Amount</label>
          <input type="number" class="form-control" id="amount" name="amount" v-model="amount">
      </div>

      <div class="form-group">
          <label for="name_on_card">Name on Card</label>
          <input type="text" class="form-control" id="name_on_card" name="name_on_card" v-model="name_on_card">
      </div>

       <div class="form-group">
          <label for="email">Email Address</label>
          <input type="email" class="form-control" id="email" name="email" v-model="email">
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
                  <label for="city">City</label>
                  <input type="text" class="form-control" id="city" name="city">
              </div>
          </div>

          <div class="col-md-3">
              <div class="form-group">
                  <label for="province">Province</label>
                  <input type="text" class="form-control" id="province" name="province">
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

          <div class="col-md-4">
              <div class="form-group">
                  <label for="phone">Phone</label>
                  <input type="text" class="form-control" id="phone" name="phone">
              </div>
          </div>

      </div>

      <div class="form-group">
          <label for="card-element">Credit Card</label>
          <card-element></card-element>
      </div>

      <!-- CSRF Field -->
      <input type="hidden" name="_token" :value="csrf">

      <div class="spacer"></div>

      <button type="submit" class="btn btn-success">Make Donation</button>
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
               this.$router.push({name: 'writemessage'})
            }
      }
    }
</script>

<style>
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

</style>