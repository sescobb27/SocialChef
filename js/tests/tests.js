Ember.Test.registerHelper("exists", function(app, selector, quantity) {
    if (quantity === undefined) { quantity = 1;}
    return wait()
        .find(selector)
        .then(function(el){
            equal(el.length, quantity, "Should be " + quantity + " of " + selector);
        });
});
// in order to see the app running inside the QUnit runner
SocialChef.rootElement = '#ember-testing';

// Common test setup
SocialChef.setupForTesting();
SocialChef.injectTestHelpers();

var server;

module("Ajax tests", {
    setup: function() {
        Ember.run(SocialChef, SocialChef.advanceReadiness);
        SocialChef.reset();
        server = sinon.fakeServer.create();
        server.autoRespond = true;
    },

    teardown: function() {
        SocialChef.reset();
        server.restore();
    }
});

var locations = [
        {name: "Poblado"},
        {name: "Laureles"},
        {name: "Envigado"},
        {name: "Caldas"},
        {name: "Sabaneta"},
        {name: "Colores"},
        {name: "Estadio"},
        {name: "Calazans"},
        {name: "Bello"},
        {name: "Boston"},
        {name: "Prado Centro"},
        {name: "Itagui"},
        {name: "Belen"},
        {name: "Guayabal"}
];

var categories = [
        {name: "Pasta"},
        {name: "Carne"},
        {name: "Pollo"},
        {name: "Ensalada"},
        {name: "Desayuno"},
        {name: "Almuerzo"},
        {name: "Postre"},
        {name: "Sopa"},
        {name: "Vegetariana"},
        {name: "Menu Infantil"},
        {name: "Comida Rapida"},
        {name: "Almuerzo para 2"},
        {name: "Desayuno para 2"},
        {name: "Comida para 2"},
        {name: "Ensalada de Frutas"},
        {name: "Gourmet"}
];

test('I should see locations and categories updated asynchronously', function () {
    // Responds to all requests to given URL
    // server.respondWith(url, response);
    server.respondWith("/categories", JSON.stringify(categories));
    server.respondWith("/locations", JSON.stringify(locations));
    visit("/")
      .then(function () {
          equal(server.requests.length, 2, "");
          equal(server.requests[0].url, "/categories");
          equal(server.requests[1].url, "/locations");
          equal($('.locations ul.list-group li').length, 14);
          equal($('.categories ul.list-group li').length, 16);
      });
});

test('I should see an error when submit an empty login', function() {
    server.respondWith("post", "/chefs/login");
    visit('/login')
    .fillIn("input#user_name","")
    .fillIn("input#user_password","")
    .click('#login_btn')
    .then(function() {
        exists('#error_msg');
        equal($('div#error_msg').text(), 'Nombre de Usuario o Contraseña Invalidos.');
    });
});

module("Integration tests", {
    setup: function() {
        // before each test, ensure the application is ready to run.
        Ember.run(SocialChef, SocialChef.advanceReadiness);
        SocialChef.reset();
    },

    teardown: function() {
        // reset the application state between each test
        SocialChef.reset();
    }
});

test('I should see a carousel in the index page',function() {
    visit("/").exists("#add-banner");
});

test('I should see the Copyright all the time', function() {
    visit('/').exists("#copyright");
    visit('/products').exists("#copyright");
});

test('I Should see Product Search Bar', function() {
    visit('/').exists("#products-search");
    visit('/').exists("#productSearchForm");
});
