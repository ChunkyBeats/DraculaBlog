Blogger.PostsRoute = Ember.Route.extend({

  renderTemplate: function() {
    this.render('posts');
  },
  model: function() {
    return posts;
  }
});
