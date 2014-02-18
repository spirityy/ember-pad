App = Ember.Application.create({});

App.Router.map(function() {
    this.route('index',{path:'/'});
    this.route('search',{path:'/search'});
    this.route('cert',{path:'/cert'});
});


//App.ApplicationView = Ember.View.extend({
//    templateName:'application1'
//});
//
App.IndexRoute  = Ember.Route.extend({
    setupController:function(){
        console.info('index');
    }
});
