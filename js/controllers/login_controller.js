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

            var self = this;
            Ember.run.later(self, function(){
                self.slowConnection();
            }, 5000);

            var promise = Ember.$.post("http://localhost:8080/login",
                self.getProperties("username", "password"));
            promise.success(function(){
                Ember.run(function(){
                    self.success();
                });
            });
            promise.fail(function(){
                Ember.run(function(){
                    self.failure();
                });
             });
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
        if (!this.get('loginFailed')) {
            this.set("isSlowConnection", true);
        }
    },

    reset: function() {
        clearTimeout(this.get("timeout"));
        this.setProperties({
            isProcessing: false,
            isSlowConnection: false
        });
    }
});
