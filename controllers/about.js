Blogger.AboutController = Ember.Controller.extend({
  isPictureShowing: false,
  actions: {
    showRealName: function() {
      alert('Dracula is Vlad III DA IMPALAH');
    },
    showPicture: function() {
      this.set('isPictureShowing', true);
    },
    hidePicture: function() {
      this.set('isPictureShowing', false);
    }
  }
});
