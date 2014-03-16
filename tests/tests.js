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
        SocialChef.reset();
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
        ok(find(".copyright"));
        var copyright = find(".copyright");
        notEqual( copyright, null, "No copyright on all views: " + copyright );
    };
    visit('/').then(assert);
    visit('/products').then(assert);
});

test('I should see a row with products', function() {
    SocialChef.reset();
    visit("/products").then( function () {
        ok(find(".products"));
        var row = find(".products");
        notEqual( row, null, "No row with products: "+row );
    });
});

search_products = function (query) {
    ok(find('.products-search'));
    ok(find('.productSeachForm'));
    fillIn('input#products-search', query);
    ok($('form#productSeachForm').submit(), "Product Search Form submission");
    return sinon.stub(window, "alert");
};

test('I should by able to search products by name', function () {
    SocialChef.reset();
    visit("/").then( function () {
        var stub = search_products("Plato 1");
        click('form#productSeachForm .submit').then(function () {
            equal(stub.callCount, 1, "callCount should be 1");
            equal(stub.getCall(0).args[0], "Plato 1: 9900", "Title should be Plato 1: 9900");
            window.alert.restore();
        });
    });
});

test('I should by able to search products by category', function () {
    SocialChef.reset();
    visit("/").then( function () {
        var stub = search_products("Carne");
        click('form#productSeachForm .submit').then(function () {
            equal(stub.callCount, 1, "callCount should be 1");
            equal(stub.getCall(0).args[0], "Plato 2: 249", "Title should be Plato 2: 249");
            window.alert.restore();
        });
    });
});

test('I should by able to search products by chef', function () {
    SocialChef.reset();
    visit("/").then( function () {
        var stub = search_products("Jacinto");
        click('form#productSeachForm .submit').then(function () {
            equal(stub.callCount, 1, "callCount should be 1");
            equal(stub.getCall(0).args[0], "Plato 3: 499", "Title should be Plato 3: 499");
            window.alert.restore();
        });
    });
});