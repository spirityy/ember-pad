App = Ember.Application.create({});

App.Router.map(function() {
    this.route('index',{path:'/'});
    this.route('search',{path:'/search'});
    this.route('cert',{path:'/cert'});

    this.resource('category',{path:'category/:id'}); 
    this.resource('list',{path:'list/:id'}); 

    this.resource('detail',{path:'detail/:id'});
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
        this.render('category',{ outlet:'category' }); 
    },
    activate:function(){
        $('.category').addClass('go-deep');
    },
    deactivate:function(){
        $('.category').removeClass('go-deep');
    }
});

App.ListRoute = Ember.Route.extend({
    model:function(params){
        return listitems; 
    },
    renderTemplate:function(){
        this.render('list',{ outlet:'list' }); 
    },
    deactivate:function(){
        $('.list').removeClass('go-middle');
    },
    activate:function(){
        $('.list').addClass('go-middle');
    }
});

App.DetailRoute = Ember.Route.extend({
    model:function(params){
        return  []; 
    },
    renderTemplate:function(){
        this.render('detail',{ outlet:'detail' }); 
    },
    deactivate:function(){
        $('.detial').removeClass('go-low');
    }
});


App.ListView = Ember.View.extend({
  didInsertElement: function() {
      $('.list').addClass('go-middle');
  }
});
App.CategoryView = Ember.View.extend({
  didInsertElement: function() {
      $('.category').addClass('go-deep');
  }
});
