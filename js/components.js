SocialChef.ProductsSearchComponent = Ember.Component.extend({
  tagName: '',
  classNames: [],
  actions: {
      search: function () {
          this.sendAction('search',{
              query: this.get("search_query")
          });
      },
      setCategory: function(param) {
          // console.log(param);
          this.sendAction('changeCategory',param);
      }
  }
});
