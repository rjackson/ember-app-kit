var PostsIndexRoute = Ember.Route.extend({
  model: function () {
    var self = this;

    return new Ember.RSVP.Promise(function (resolve) {
      setTimeout(function () {
        resolve(self.modelFor('posts'));
      }, 2000);
    });
  }
});

export default PostsIndexRoute;
