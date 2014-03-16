SocialChef.Router.map(function() {
  this.resource(  'users', { path: '/chefs'} );
  this.resource(  'user', { path: 'users/:username'} );
  this.resource( 'products', function () {
      this.resource( 'product', { path: ':name' } );
  });
  this.resource( "about" );
  this.resource( "services" );
  this.resource( "contact" );
  this.resource( "sign_up" );



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
    model: function(params) {
        console.log(params);
  }
});

var products = [
    {
        id: 1,
        title: 'Plato 1',
        price: 9900,
        description: 'Descripcion del plato 1.',
        image: 'images/gourmet1.jpg'

    },
    {
        id: 2,
        title: 'Plato 2',
        price: 249,
        description: 'Descripcion del plato 2.',
    image: 'images/gourmet2.jpg'
    },
    {
        id: 3,
        title: 'Plato 3',
        price: 499,
        description: 'Descripcion del plato 3.',
        image: 'images/gourmet3.jpg'

    }
];

SocialChef.ProductsRoute = Ember.Route.extend({
    model: function() {
        return products;
    }
});

SocialChef.ProductRoute = Ember.Route.extend({
    model: function (params) {
        return products.findBy('name', params.name);
    }
});