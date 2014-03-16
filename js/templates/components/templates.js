Ember.TEMPLATES["add-banner"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  


  data.buffer.push("<div class=\"col-md-12\" id=\"add-banner\">\n  <div class=\"row carousel-holder\">\n    <div class=\"col-md-12\">\n      <div id=\"carousel-example-generic\" class=\"carousel slide\" data-ride=\"carousel\">\n        <ol class=\"carousel-indicators\">\n          <li data-target=\"#carousel-example-generic\" data-slide-to=\"0\" class=\"active\"></li>\n          <li data-target=\"#carousel-example-generic\" data-slide-to=\"1\"></li>\n          <li data-target=\"#carousel-example-generic\" data-slide-to=\"2\"></li>\n        </ol>\n        <div class=\"carousel-inner\">\n          <div class=\"item active\">\n            <img class=\"slide-image\" src=\"images/gourmet1.jpg\">\n          </div>\n          <div class=\"item\">\n            <img class=\"slide-image\" src=\"images/gourmet2.jpg\">\n          </div>\n          <div class=\"item\">\n            <img class=\"slide-image\" src=\"images/gourmet3.jpg\">\n          </div>\n        </div>\n        <a class=\"left carousel-control\" href=\"#carousel-example-generic\" data-slide=\"prev\">\n          <span class=\"glyphicon glyphicon-chevron-left\"></span>\n        </a>\n        <a class=\"right carousel-control\" href=\"#carousel-example-generic\" data-slide=\"next\">\n          <span class=\"glyphicon glyphicon-chevron-right\"></span>\n        </a>\n      </div>\n    </div>\n  </div>\n</div>");
  
});

Ember.TEMPLATES["application"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, helper, options, self=this, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;

function program1(depth0,data) {
  
  
  data.buffer.push("SocialChef");
  }

function program3(depth0,data) {
  
  
  data.buffer.push(" Products ");
  }

function program5(depth0,data) {
  
  
  data.buffer.push(" New ");
  }

function program7(depth0,data) {
  
  
  data.buffer.push(" Popular ");
  }

function program9(depth0,data) {
  
  
  data.buffer.push(" Categories ");
  }

  data.buffer.push("<nav class=\"navbar navbar-inverse navbar-fixed-top\" role=\"navigation\">\n  <div class=\"container\">\n    <div class=\"navbar-header\">\n      <button type=\"button\" class=\"navbar-toggle\" data-toggle=\"collapse\" data-target=\".navbar-ex1-collapse\">\n        <span class=\"sr-only\">Toggle navigation</span>\n        <span class=\"icon-bar\"></span>\n        <span class=\"icon-bar\"></span>\n        <span class=\"icon-bar\"></span>\n      </button>\n      ");
  stack1 = (helper = helpers['link-to'] || (depth0 && depth0['link-to']),options={hash:{
    'class': ("navbar-brand"),
    'id': ("appname")
  },hashTypes:{'class': "STRING",'id': "STRING"},hashContexts:{'class': depth0,'id': depth0},inverse:self.noop,fn:self.program(1, program1, data),contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "index", options) : helperMissing.call(depth0, "link-to", "index", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n    </div>\n\n    <div class=\"collapse navbar-collapse navbar-ex1-collapse\">\n      <ul class=\"nav navbar-nav\">\n        <li> ");
  stack1 = (helper = helpers['link-to'] || (depth0 && depth0['link-to']),options={hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(3, program3, data),contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "products", options) : helperMissing.call(depth0, "link-to", "products", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push(" </li>\n      </ul>\n    </div>\n  </div>\n</nav>\n<div class=\"container\">\n    <div class=\"row\">\n      ");
  data.buffer.push(escapeExpression((helper = helpers['products-search'] || (depth0 && depth0['products-search']),options={hash:{
    'search': ("search")
  },hashTypes:{'search': "STRING"},hashContexts:{'search': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "products-search", options))));
  data.buffer.push("\n      <div class=\"col-md-3\">\n          <p class=\"lead\">Shop Name</p>\n          <div class=\"list-group\">\n              ");
  stack1 = (helper = helpers['link-to'] || (depth0 && depth0['link-to']),options={hash:{
    'class': ("list-group-item")
  },hashTypes:{'class': "STRING"},hashContexts:{'class': depth0},inverse:self.noop,fn:self.program(5, program5, data),contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "", options) : helperMissing.call(depth0, "link-to", "", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n              ");
  stack1 = (helper = helpers['link-to'] || (depth0 && depth0['link-to']),options={hash:{
    'class': ("list-group-item")
  },hashTypes:{'class': "STRING"},hashContexts:{'class': depth0},inverse:self.noop,fn:self.program(7, program7, data),contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "", options) : helperMissing.call(depth0, "link-to", "", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n              ");
  stack1 = (helper = helpers['link-to'] || (depth0 && depth0['link-to']),options={hash:{
    'class': ("list-group-item")
  },hashTypes:{'class': "STRING"},hashContexts:{'class': depth0},inverse:self.noop,fn:self.program(9, program9, data),contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "", options) : helperMissing.call(depth0, "link-to", "", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n          </div>\n      </div>\n      <div class=\"container\">\n          <div class=\"col-md-9\">\n            ");
  stack1 = helpers._triageMustache.call(depth0, "outlet", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n          </div>\n      </div>\n    </div>\n</div>\n<div class=\"container\">\n  <hr>\n  <footer>\n      <div class=\"row\">\n          <div class=\"col-lg-12\">\n              <p id=\"copyright\">Copyright &copy; SocialChef 2014</p>\n          </div>\n        </div>\n    </footer>\n</div>\n");
  return buffer;
  
});

Ember.TEMPLATES["index"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var stack1;


  stack1 = helpers._triageMustache.call(depth0, "add-banner", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  else { data.buffer.push(''); }
  
});

Ember.TEMPLATES["products-search"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', helper, options, escapeExpression=this.escapeExpression, helperMissing=helpers.helperMissing;


  data.buffer.push("<div class=\"container\">\n    <div class=\"row\">\n        <form ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "search", {hash:{
    'on': ("submit")
  },hashTypes:{'on': "STRING"},hashContexts:{'on': depth0},contexts:[depth0],types:["STRING"],data:data})));
  data.buffer.push(" class=\"form-horizontal form-group\" method=\"get\" accept-charset=\"utf-8\" id=\"productSeachForm\">\n            ");
  data.buffer.push(escapeExpression((helper = helpers.input || (depth0 && depth0.input),options={hash:{
    'type': ("search"),
    'id': ("products-search"),
    'placeholder': ("Buscador de Comidas"),
    'value': ("search_query"),
    'class': ("form-control")
  },hashTypes:{'type': "STRING",'id': "STRING",'placeholder': "STRING",'value': "ID",'class': "STRING"},hashContexts:{'type': depth0,'id': depth0,'placeholder': depth0,'value': depth0,'class': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "input", options))));
  data.buffer.push("\n            <button class=\"submit\" ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "search", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data})));
  data.buffer.push(">Buscar</button>\n        </form>\n    </div>\n</div>");
  return buffer;
  
});

Ember.TEMPLATES["products"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, escapeExpression=this.escapeExpression, self=this, helperMissing=helpers.helperMissing;

function program1(depth0,data) {
  
  var buffer = '', stack1, helper, options;
  data.buffer.push("\n                <div class=\"col-sm-4 col-lg-4 col-md-4\">\n                    <div class=\"thumbnail\">\n                        <img  ");
  data.buffer.push(escapeExpression(helpers['bind-attr'].call(depth0, {hash:{
    'src': ("product.image")
  },hashTypes:{'src': "STRING"},hashContexts:{'src': depth0},contexts:[],types:[],data:data})));
  data.buffer.push(">\n                        <div class=\"caption\">\n                            <h4 class=\"pull-right\">$ ");
  stack1 = helpers._triageMustache.call(depth0, "product.price", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</h4>\n                            <h4>");
  stack1 = (helper = helpers['link-to'] || (depth0 && depth0['link-to']),options={hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(2, program2, data),contexts:[depth0,depth0],types:["STRING","ID"],data:data},helper ? helper.call(depth0, "product", "product.name", options) : helperMissing.call(depth0, "link-to", "product", "product.name", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</h4>\n                            <p>");
  stack1 = helpers._triageMustache.call(depth0, "product.description", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</p>\n                        </div>\n                    </div>\n                    <div class=\"ratings\">\n                        <p class=\"pull-right\">18 reviews</p>\n                        <p>\n                            <span class=\"glyphicon glyphicon-star\"></span>\n                            <span class=\"glyphicon glyphicon-star\"></span>\n                            <span class=\"glyphicon glyphicon-star\"></span>\n                            <span class=\"glyphicon glyphicon-star\"></span>\n                            <span class=\"glyphicon glyphicon-star-empty\"></span>\n                        </p>\n                    </div>\n                </div>\n        ");
  return buffer;
  }
function program2(depth0,data) {
  
  var stack1;
  stack1 = helpers._triageMustache.call(depth0, "product.title", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  else { data.buffer.push(''); }
  }

  data.buffer.push("<div class=\"row\" id=\"products\">\n    <div class=\"col-md-12\">\n        <h1>Despliegue de todos los productos</h1>\n        ");
  stack1 = helpers.each.call(depth0, "product", "in", "model", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(1, program1, data),contexts:[depth0,depth0,depth0],types:["ID","ID","ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n    </div>\n</div>");
  return buffer;
  
});