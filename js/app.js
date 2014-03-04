App = Ember.Application.create({});

App.Router.map(function() {
    this.route('index',{path:'/'});
    this.route('search',{path:'/search'});
    this.route('cert',{path:'/cert'});

    this.resource('category',{path:'category/:id'}); 
    this.resource('list',{path:'list/:id'}); 

    this.resource('product',{path:'product/:id'});

    this.resource('user',{path:'/user'},function(){
        this.route('info'); 
        this.route('order'); 
        this.route('addr');
    });
});

//index
App.IndexRoute  = Ember.Route.extend({
    model:function(){
        return indexlist; 
    }
});


//cert
App.CertRoute  = Ember.Route.extend({
    model:function(){
        return certlist; 
    }
});


App.CategoryRoute = Ember.Route.extend({
    model:function(params){
        return categorylist.findBy('id',params.id); 
    },
    renderTemplate:function(){
        this.render('category',{ outlet:'main' }); 
    },
    activate:function(){
        //$('.category').addClass('go-deep');
    },
    deactivate:function(){
        //$('.category').removeClass('go-deep');
    }
});

App.ListRoute = Ember.Route.extend({
    model:function(params){
        return listitems; 
    },
    renderTemplate:function(){
        this.render('list',{ outlet:'main' }); 
    },
    deactivate:function(){
        //$('.list').removeClass('go-middle');
    },
    activate:function(){
        //$('.list').addClass('go-middle');
    }
});

App.ProductRoute = Ember.Route.extend({
    model:function(params){
        return  []; 
    },
    renderTemplate:function(){
        this.render('product',{ outlet:'main' }); 
    },
    deactivate:function(){
        //$('.product').removeClass('go-low');
    }
});


App.ListView = Ember.View.extend({
  didInsertElement: function() {
      //$('.list').addClass('go-middle');
  }
});
App.CategoryView = Ember.View.extend({
  didInsertElement: function() {
      //$('.category').addClass('go-deep');
  }
});
App.ProductView = Ember.View.extend({
  didInsertElement: function() {
      //$('.product').addClass('go-low');
  }
});
