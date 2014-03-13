SocialChef = Ember.Application.create({
  LOG_TRANSITIONS: true
});

SocialChef.IndexRoute = Ember.Route.extend({
  model: function() {
    return ['red', 'yellow', 'blue'];
  }
});
