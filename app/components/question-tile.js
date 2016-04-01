import Ember from 'ember';

export default Ember.Component.extend({
  isAuthorShowing: false,
  actions: {
    authorShow: function() {
      this.set('isAuthorShowing', true);
    },
    authorHide: function() {
      this.set('isAuthorShowing', false);
    },
    delete(question) {
      if (confirm('Are you sure you want to delete this Q?')) {
        this.sendAction('deleteQuestion', question);
      }
    }
  }
});
