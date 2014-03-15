
SocialChef.Router.map(function() {
    this.route('productos');


});
SocialChef.IndexRoute = Ember.Route.extend({
    model: function() {
        return ['red', 'yellow', 'blue'];
    }});


