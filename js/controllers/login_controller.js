SocialChef.LoginController = Ember.ObjectController.extend({
    // ==========================================================================
    // PROPERTIES
    // ==========================================================================
    username: '',
    password: '',
    loginFailed: false,
    isProcessing: false,
    isSlowConnection: false,
    timeout: null,
    // ==========================================================================
    // END PROPERTIES
    // ==========================================================================
    actions : {
        login: function() {
            this.setProperties({
                loginFailed: false,
                isProcessing: true
            });

            this.set("timeout",
                setTimeout(this.slowConnection.bind(this), 5000));

            var request = $.post("http://localhost:8080/service/login",
                this.getProperties("username", "password"));
            request.then(this.success.bind(this), this.failure.bind(this));
        }
    },

    success: function() {
        this.reset();
        this.transitionToRoute('index');
    },

    failure: function() {
        this.reset();
        this.set("loginFailed", true);
    },

    slowConnection: function() {
        this.set("isSlowConnection", true);
    },

    reset: function() {
        clearTimeout(this.get("timeout"));
        this.setProperties({
            isProcessing: false,
            isSlowConnection: false
        });
    }
});
