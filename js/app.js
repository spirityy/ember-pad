App = Ember.Application.create({});

App.Router.map(function() {
    this.route('index',{path:'/'});
    this.route('search',{path:'/search'});
    this.route('cert',{path:'/cert'});

    this.resource('category',{path:'category/:id'},function(){
        this.route('category',{path:'/:id'}); 
    }); 
    this.resource('list',{path:'/:id'});
    this.resource('detail',{path:'/:id'});
});


App.IndexRoute  = Ember.Route.extend({
    model:function(){
        return indexlist; 
    },

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

App.CategoryView = Ember.View.extend({

});

App.ListRoute = Ember.Route.extend({
    renderTemplate:function(){
        this.render({outlet:'list'});    
    }
});

App.DetailRoute = Ember.Route.extend({
    renderTemplate:function(){
        this.render({outlet:'detail'});    
    }
});
