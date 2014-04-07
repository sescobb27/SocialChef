SocialChef.RegisterController = Ember.ObjectController.extend({
    // ==========================================================================
    // PROPERTIES
    // ==========================================================================
    name: '',
    last_name: '',
    username: '',
    password: '',
    confirm_password: '',
    invalidPass: false,
    isProcessing: false,
    // ==========================================================================
    // END PROPERTIES
    // ==========================================================================

    actions: {
        validate: function () {
            this.set('isProcessing', true);
            var name = $.trim(this.get("name"));
            var last_name = $.trim(this.get("last_name"));
            var username = $.trim(this.get("username"));
            var pass = $.trim(this.get('password'));
            var confirm = $.trim(this.get('password_confirm'));
            if (!this.empty(pass) && !this.empty(confirm)) {
                if (pass === confirm) {
                    this.set('invalidPass', false);
                } else {
                    this.set('invalidPass', true);
                }
            } else {
                this.set('invalidPass', true);
                this.set('isProcessing', false);
                return false;
            }
            if (!this.empty(name) &&
                    !this.empty(last_name) &&
                    !this.empty(username)) {
                this.send('register');
            }
        },

        register: function() {

        }
    },
    empty: function(obj) {
        return obj === "" || obj;
    }
});
