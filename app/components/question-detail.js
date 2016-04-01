import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    delete(question) {
      if(confirm('Are you sure you want to delete this Q?')) {
        this.sendAction('deleteQuestion', question);
      }
    }
  }
});