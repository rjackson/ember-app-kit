export default Ember.Route.extend({
  model: function() {
    return new Ember.RSVP.Promise(function (resolve) {
      setTimeout(function () {
        resolve(['red', 'yellow', 'blue']);
      }, 1000);
    });
  }
});
