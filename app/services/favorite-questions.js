import Ember from 'ember';

export default Ember.Service.extend({
  questions: [],

  add(question) {
    this.get('questions').pushObject(question);
  },
  removeFromFavorites(question) {
    this.get('questions').popObject(question);
  },
});
