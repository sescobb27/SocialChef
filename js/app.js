window.SocialChef = Ember.Application.create({
    LOG_TRANSITIONS: true
});

SocialChef.ApplicationAdapter = DS.RESTAdapter.extend({
    host: "http://localhost:8080/service"
});

SocialChef.Adapter = DS.Adapter.create({
    findAll: function(store, type) {
        var url = type.url;
        console.log(url);
        $.getJSON(url, function(data) {
            store.loadMany(type, data);
        });
    }
});

SocialChef.store = DS.Store.create({
    adapter: SocialChef.Adapter
});