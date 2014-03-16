// in order to see the app running inside the QUnit runner
SocialChef.rootElement = '#ember-testing';

// Common test setup
SocialChef.setupForTesting();
SocialChef.injectTestHelpers();

// common QUnit module declaration
module("Integration tests", {
  setup: function() {
    // before each test, ensure the application is ready to run.
    Ember.run(SocialChef, SocialChef.advanceReadiness);
  },

  teardown: function() {
    // reset the application state between each test
    SocialChef.reset();
  }
});

// QUnit test case
test("I should see  SocialChef as appname", function() {
    SocialChef.reset();
    visit("/").then( function () {
        ok(find(".appname"));
        var brand = document.getElementById("appname");
        equal(brand.text, "SocialChef", "Error no SocialChef as appname: " + brand.text);
    });
});

test('I should see a carousel in the index page',function() {
    SocialChef.reset();
    visit("/").then( function () {
        ok(find(".add-banner"));
        var carousel = find(".add-banner");
        notEqual( carousel, null, "No carousel in index page: " + carousel );
    });
});

test('I should see the Copyright all the time', function() {
    SocialChef.reset();
    assert = function () {
        var copyright = find(".copyright");
        notEqual( copyright, null, "No copyright on all views: " + copyright );
    };
    visit('/').then(assert);
    visit('/products').then(assert);
});

test('I should see a row with products', function() {
    SocialChef.reset();
    visit("/products").then( function () {
        var row = find(".products");
        notEqual( row, null, "No row with products: "+row );
    });
});
