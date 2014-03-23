SocialChef.Product = DS.Model.extend({
  // ==========================================================================
  // ATTRIBUTES
  // ==========================================================================
  id: DS.attr('number'),
  name: DS.attr('string'),
  price: DS.attr('number'),
  category: DS.attr('string'),
  rate: DS.attr('number', {defaultValue: 0.0}),
  description: DS.attr('string'),
  delivery_time: DS.attr('date'),
  disponibility_time: DS.attr('date'),
  cheff: DS.belongsTo('user'),
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