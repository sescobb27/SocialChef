SocialChef.Product = DS.Model.extend({
  // ==========================================================================
  // ATTRIBUTES
  // ==========================================================================
  name: DS.attr('string'),
  price: DS.attr('number'),
  category: DS.attr('string'),
  location: DS.attr('string'),
  rate: DS.attr('number', {defaultValue: 0.0}),
  description: DS.attr('string'),
  deliveryTime: DS.attr('date'),
  disponibilityTime: DS.attr('date'),
  chef: DS.belongsTo('user', {embedded: 'load'}),
  image: DS.attr('string'),
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