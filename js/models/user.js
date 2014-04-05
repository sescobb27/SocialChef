SocialChef.User = Ember.Object.extend({
  // ==========================================================================
  // ATTRIBUTES
  // ==========================================================================
  name: "",
  lastName: "",
  userName: "",
  rate: 0.0,
  address: "",
  telephone_number: "",
  email: "",
  picture: "",
  products: [],
  createdAt: null,
  password: "",
  password_confirm: "",
  // ==========================================================================
  // END ATTRIBUTES
  // ==========================================================================

  init: function() {
    // Setup
  }
});