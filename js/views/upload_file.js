SocialChef.UploadFile = Ember.TextField.extend({
    tagName: 'input',
    attributeBindings: ['name'],
    type: 'file',
    file: null,
    change: function (e) {
        var reader = new FileReader(),
        context = this;
        reader.onload = function (e) {
            var image = e.target.result;
            Ember.run(function() {
                context.set('file', image);
            });
        };
        return reader.readAsDataURL(e.target.files[0]);
    }
});