SocialChef.User = DS.Model.extend({
  // ==========================================================================
  // ATTRIBUTES
  // ==========================================================================
  name: DS.attr('string'),
  lastName: DS.attr('string'),
  userName: DS.attr('string'),
  rate: DS.attr('number', {defaultValue: 0.0}),
  address: DS.attr('string'),
  telephone_number: DS.attr('string'),
  email: DS.attr('string'),
  picture: DS.attr('string'),
  products: DS.hasMany('product', {embedded: 'load'}),
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