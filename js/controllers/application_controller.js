SocialChef.ApplicationController = Ember.ObjectController.extend({
    actions: {
        search: function (search_query) {
            var product = products.findBy('title', search_query.query);
            if (product == null) {
                 product = products.findBy('category', search_query.query);
             }
             alert(product.title + ": " + product.price);
             return product;
        }
    }
});