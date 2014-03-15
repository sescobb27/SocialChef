SocialChef.Router.map(function() {
  this.resource(  'users', { path: '/chefs'} );
  this.resource(  'user', { path: 'users/:username'} );
  // this.route("about");
  // this.route("favorites", { path: "/favs" });
});

SocialChef.UsersRoute = Ember.Route.extend({
  model: function (params) {
    console.log(params);

  }
});
SocialChef.UserRoute = Ember.Route.extend({
  model: function (params) {
    console.log(params);
  }
});

SocialChef.IndexRoute = Ember.Route.extend({
  model: function() {
    return ['red', 'yellow', 'blue'];
  }
});
