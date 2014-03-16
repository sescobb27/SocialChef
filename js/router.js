SocialChef.Router.map(function() {
    this.resource( 'index', { path: '/' } );
    this.resource( 'users', { path: '/chefs'} );
    this.resource( 'user', { path: 'users/:username'} );
    this.resource( 'products', function () {
        this.resource( 'product', { path: ':name' } );
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
        title: 'Plato 1',
        price: 9900,
        category: 'Pasta',
        description: 'Descripcion del plato 1.',
        cheff:'Pablo',
        image: 'images/gourmet1.jpg'

    },
    {
        id: 2,
        title: 'Plato 2',
        price: 249,
        category: 'Carne',
        description: 'Descripcion del plato 2.',
        cheff:'Pedro',
        image: 'images/gourmet2.jpg'
    },
    {
        id: 3,
        title: 'Plato 3',
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
