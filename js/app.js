SocialChef = Ember.Application.create({
<<<<<<< HEAD
    LOG_TRANSITIONS: true

});


SocialChef.Router.map(function() {
    this.resource('products');
         this.resource('product', { path: '/products/:id' });
});


SocialChef.IndexRoute = Ember.Route.extend({
  model: function() {
    return ['red', 'yellow', 'blue'];
  }
});


    SocialChef.ProductsRoute = Ember.Route.extend({
    model: function() {
        return SocialChef.products;
    }
});

SocialChef.products = [
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


=======
  LOG_TRANSITIONS: true
});
>>>>>>> d4d4ed6642232ce21c7b9430e8f5e21a0ec87075
