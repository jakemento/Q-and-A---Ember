import Ember from 'ember';

export default Ember.Component.extend({
  favoriteQuestions: Ember.inject.service(),
  isAuthorShowing: false,
  updateQuestionForm: false,
  questionAndAuthor: Ember.computed('question.text', 'question.author', function() {
    return this.get('question.text')+ ' - ' + this.get('question.author');
  }),
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
    },
    update(question, params) {
      this.sendAction('update', question, params);
    },
    addToFavorites(question) {
      this.get('favoriteQuestions').add(question);
    }
  }
});
