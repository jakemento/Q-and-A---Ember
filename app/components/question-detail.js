import Ember from 'ember';

export default Ember.Component.extend({
  favoriteQuestions: Ember.inject.service(),
  actions: {
    delete(question) {
      if(confirm('Are you sure you want to delete this Q?')) {
        this.sendAction('deleteQuestion', question);
      }
    },
    addToFavorites(question) {
      this.get('favoriteQuestions').add(question);
    }
  }
});
