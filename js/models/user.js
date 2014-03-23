SocialChef.User = DS.Model.extend({
  // ==========================================================================
  // ATTRIBUTES
  // ==========================================================================
  id: DS.attr('number'),
  name: DS.attr('string'),
  user_name: DS.attr('string'),
  rate: DS.attr('number', {defaultValue: 0.0}),
  address: DS.attr('string'),
  telephone_number: DS.attr('string'),
  email: DS.attr('string'),
  picture: DS.attr('string'),
  products: DS.hasMany('product'),
  createdAt: DS.attr('date', {
    defaultValue: function() {
        return new Date();
    }
  }),
  // ==========================================================================
  // END ATTRIBUTES
  // ==========================================================================

  init: function() {
    // Setup
  },

  method: function(value) {

  }
});