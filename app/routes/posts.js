var PostsRoute = Ember.Route.extend({
  model: function () {
    return new Ember.RSVP.Promise(function (resolve) {
      setTimeout(function () {
        resolve(['one', 'two', 'three']);
      }, 1000);
    });
  }
});

export default PostsRoute;
