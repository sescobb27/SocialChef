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
