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

var products = [
    {
        id: 1,
        name: 'Plato 1',
        price: 9900,
        category: 'Pasta',
        description: 'Descripcion del plato 1.',
        cheff:'Pablo',
        image: 'images/gourmet1.jpg'

    },
    {
        id: 2,
        name: 'Plato 2',
        price: 249,
        category: 'Carne',
        description: 'Descripcion del plato 2.',
        cheff:'Pedro',
        image: 'images/gourmet2.jpg'
    },
    {
        id: 3,
        name: 'Plato 3',
        price: 499,
        category: 'Postre',
        description: 'Descripcion del plato 3.',
        cheff:'Jacinto',
        image: 'images/gourmet3.jpg'

    }
];

SocialChef.SearchRoute = Ember.Route.extend({

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
      Ember.$.getJSON("http://localhost:8080/service/products/findby?key=category&search_value=carne")
          .then(function(products) {
                  controller.set('content', products);
          });
  }
});


SocialChef.SearchController = Ember.ArrayController.extend({
    query: ''
});

SocialChef.SearchResultsController = Ember.ArrayController.extend({
    query: ''
});


SocialChef.ProductsRoute = Ember.Route.extend({
    setupController: function(productsController) {
        console.log("Fetching Products");
        Ember.$.getJSON("http://localhost:8080/service/products").then(function(products) {
                productsController.set('content', products)
        });
    }
});

SocialChef.ProductRoute = Ember.Route.extend({
    model: function (params) {
        console.log("On Product Route: " + params);
        // return this.store.find('product', params.id);
    }
});
