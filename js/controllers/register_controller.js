SocialChef.RegisterController = Ember.ObjectController.extend({
    // ==========================================================================
    // PROPERTIES
    // ==========================================================================
    name: '',
    last_name: '',
    username: '',
    password: '',
    confirm_password: '',
    // ==========================================================================
    // END PROPERTIES
    // ==========================================================================

    actions: {
        register: function () {
            var name = this.get("name");
            var last_name = this.get("last_name");
            var username = this.get("username");
            var pass = $.trim(this.get('password'));
            var confirm = $.trim(this.get('password_confirm'));
            var validPass = "la contraseña y la confirmación de la contraseña ";
            if (!pass.empty() && !confirm.empty()) {
                if (pass === confirm) {
                    validPass += "concuerdan";
                } else {
                    validPass += "no concuerdan";
                }
            } else {
                validPass += "no pueden estar vacias";
                return false;
            }
        }
    }
});
