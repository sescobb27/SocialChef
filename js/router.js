SocialChef.Router.map(function() {
    this.route('about');
    this.route('login');
    this.route('logout');
    this.route('register');
    this.resource( 'index', { path: '/' } );
    this.resource( 'chefs', { path: '/chefs'} );
    this.resource( 'users', function() {
        this.resource( 'user', { path: '/account/:username' } );
        this.resource( 'user_products', function() {
            this.route( 'add' );
            this.route( 'edit' );
            this.route( 'delete' );
        } );
    });
    this.resource( 'products', function () {
        this.resource( 'product', { path: ':product_name' } );
    });
    this.resource('search', function(){
        this.route('results', {path: ':query'});
    });
    this.resource('purchase', {path: '/purchase/:product'});
});

SocialChef.UsersRoute = Ember.Route.extend({
    model: function (params) {
        console.log(params);
    }
});

SocialChef.PurchaseRoute = Ember.Route.extend({
  // activate: function() {},
  // deactivate: function() {},
  setupController: function(controller, model) {},
  // renderTemplate: function() {},
  // beforeModel: function() {},
  // afterModel: function() {},
  // model: function() {}
});


SocialChef.UserRoute = Ember.Route.extend({
    // activate: function() {},
    // deactivate: function() {},
    // setupController: function(controller, model) {},
    // renderTemplate: function() {},
    // beforeModel: function() {},
    // afterModel: function() {},
    setupController: function(controller, model) {
    }
});

SocialChef.ChefsRoute = Ember.Route.extend({
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
      Ember.$.getJSON("/products/findby", {search_value: model.query})
          .then(function(products) {
                  controller.set('model', products);
                  controller.set('title', model.query);
          });
  }
});

SocialChef.ProductsRoute = Ember.Route.extend({
    setupController: function(productsController) {
        console.log("Fetching Products");
        Ember.$.getJSON("/products").then(function(products) {
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

SocialChef.UserProductsAddRoute = Em.Route.extend({
  // activate: function() {},
  // deactivate: function() {},
  setupController: function(controller, model) {
      if (controller.get('categories').length === 0){
          controller.getCategories();
      }
      if (controller.get('locations').length === 0){
          controller.getLocations();
      }
  },
  // renderTemplate: function() {},
  // beforeModel: function() {},
  // afterModel: function() {},

  model: function() {
      return ;
  }
});

SocialChef.UserProductsEditRoute = Em.Route.extend({
  // activate: function() {},
  // deactivate: function() {},
  // setupController: function(controller, model) {},
  // renderTemplate: function() {},
  // beforeModel: function() {},
  // afterModel: function() {},

  model: function() {
      return ;
  }
});

SocialChef.UserProductsDeleteRoute = Em.Route.extend({
  // activate: function() {},
  // deactivate: function() {},
  // setupController: function(controller, model) {},
  // renderTemplate: function() {},
  // beforeModel: function() {},
  // afterModel: function() {},

  model: function() {
      return ;
  }
});

SocialChef.UserProductsIndexRoute = Em.Route.extend({
  // activate: function() {},
  // deactivate: function() {},
  setupController: function(controller, model) {
      Ember.$.getJSON("/chefs/listproducts").then(function(products) {
              controller.set('model', products);
      });
  },
  // renderTemplate: function() {},
  // beforeModel: function() {},
  // afterModel: function() {},

  model: function() {
      return ;
  }
});

SocialChef.LogoutRoute = Ember.Route.extend({
  // activate: function() {},
  // deactivate: function() {},
  setupController: function(controller, model) {
      // Send Logout Action
      // TO-DO
      var promise = Ember.$.ajax({
          type: 'POST',
          url: "/chefs/logout"
      });
      promise.success(function(){
          Ember.run(function(){
              var app_controller =
                  SocialChef.__container__.lookup("controller:application");
                  app_controller.set('user_username', '');
          });
      });
      promise.fail(function(response){
          Ember.run(function(){
              self.failure(response);
          });
      });
      this.transitionToRoute("index");
  },
  // renderTemplate: function() {},
  // beforeModel: function() {},
  // afterModel: function() {},

  model: function() {
      return ;
  }
});

SocialChef.RegisterRoute = Ember.Route.extend({
  // activate: function() {},
  // deactivate: function() {},
  // setupController: function(controller, model) {},
  // renderTemplate: function() {},
  // beforeModel: function() {},
  // afterModel: function() {},

  model: function() {
      return ;
  }
});

