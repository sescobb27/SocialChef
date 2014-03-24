SocialChef.ApplicationController = Ember.ObjectController.extend({
    category: '',
    actions: {
        search: function (search_query) {
            this.transitionToRoute('search.results', search_query);
        },
        changeCategory: function(category) {
            console.log(category);
            // console.log('Category: ' + this.get('category'));
            this.set('category', category);
        }
    }
});