SocialChef.Router.map(function() {
    this.route('about');
    this.route('login');
    this.route('register');
    this.resource( 'index', { path: '/' } );
    this.resource( 'users', { path: '/chefs'} );
    this.resource( 'user', { path: ':user_name'} );
    this.resource( 'products', function () {
        this.resource( 'product', { path: ':product_name' } );
    });
    this.resource('search', function(){
        this.route('results', {path: ':query'});
    });
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
    model: function(params) {
        console.log(params);
  }
});

SocialChef.SearchRoute = Ember.Route.extend({
    model: function(params) {
        console.log(params);
    }
});

SocialChef.SearchResultsRoute = Ember.Route.extend({
  // activate: function() {},
  // deactivate: function() {},
  // setupController: function(controller, model) {},
  // renderTemplate: function() {},
  // beforeModel: function() {},
  // afterModel: function() {},

  setupController: function(controller, model) {
      var context = this;
      console.log('Query: '+ model.query);
      Ember.$.getJSON("http://localhost:8080/service/products/findby", {search_value: model.query})
          .then(function(products) {
                  controller.set('model', products);
          });
  }
});


SocialChef.SearchController = Ember.ArrayController.extend({
    query: '',
    category: ''
});

SocialChef.SearchResultsController = Ember.ArrayController.extend({
    query: '',
    category: ''
});


SocialChef.ProductsRoute = Ember.Route.extend({
    setupController: function(productsController) {
        console.log("Fetching Products");
        Ember.$.getJSON("http://localhost:8080/service/products").then(function(products) {
                productsController.set('model', products);
        });
    }
});

SocialChef.ProductRoute = Ember.Route.extend({
    model: function (params) {
        console.log("On Product Route: " + params);
        // return this.store.find('product', params.id);
    }
});
