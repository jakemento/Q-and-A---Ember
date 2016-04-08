import Ember from 'ember';

export default Ember.Component.extend({
  favoriteQuestions: Ember.inject.service(),

  actions: {
    removeFromFavorites(question) {
      this.get('favoriteQuestions').removeFromFavorites(question);
    }
  }
});
