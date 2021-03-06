import Ember from 'ember';

export default Ember.Component.extend({
  updateQuestionForm: false,
  actions: {
    updateQuestionForm() {
      this.set('updateQuestionForm', true);
    },
    update(question) {
      var params = {
        text: this.get('text'),
        author: this.get('author'),
        notes: this.get('notes'),
      };
      this.set('updateQuestionForm', false);
      this.sendAction('update', question, params);
    },
    cancel() {
      this.set('updateQuestionForm', false);
    }
  }
});
