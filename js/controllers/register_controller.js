SocialChef.RegisterController = Ember.ObjectController.extend({
    // ==========================================================================
    // PROPERTIES
    // ==========================================================================
    name: null,
    last_name: null,
    username: null,
    password: null,
    confirm_password: null,
    // ==========================================================================
    // END PROPERTIES
    // ==========================================================================

    actions: {
        register: function () {
                var name = this.get("name");
                var last_name = this.get("last_name");
                var username = this.get("username");
                var password = this.get("password");
                var confirm_password = this.get("confirm_password");
                if ( password != confirm_password ) {
                    return false;
                } else {
                    // SHA 1 and DATE
                    // SEND SHA1 and DATA over password
                }
        }
    }
});
