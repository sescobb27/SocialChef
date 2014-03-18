SocialChef.LoginController = Ember.ObjectController.extend({
    // ==========================================================================
    // PROPERTIES
    // ==========================================================================
    username: null,
    password: null,
    // ==========================================================================
    // END PROPERTIES
    // ==========================================================================

    actions: {
        login: function () {
            var username = this.get("username");
            var password = this.get("password");
            // SEND USERNAME AND PASSWORD TO THE SERVER, THERE TAKE THE DATE FROM THE USER
            // AND COMPUTE THE SHA1 FOR AUTHENTICATE THE USER
        }
    }
});
