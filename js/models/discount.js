SocialChef.Discount = Ember.Object.extend({
  // ==========================================================================
  // ATTRIBUTES
  // ==========================================================================
  name:  DS.attr('string'),
  description:  DS.attr('string'),
  discountPercent: DS.attr('number', {defaultValue: 0.0}),
  startDdate: DS.attr('date'),
  endDate: DS.attr('date'),
  createdAt: DS.attr('date', {
    defaultValue: function() {
        return new Date();
    }
  }),
  picture:  DS.attr('string'),
  url:  DS.attr('string'),
  // ==========================================================================
  // END ATTRIBUTES
  // ==========================================================================

  init: function() {
    // Setup
  },

  method: function(value) {

  }
});
