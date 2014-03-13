SocialChef = Ember.Application.create();

SocialChef.Router.map(function() {
  // put your routes here
});

SocialChef.IndexRoute = Ember.Route.extend({
  model: function() {
    return ['red', 'yellow', 'blue'];
  }
});
