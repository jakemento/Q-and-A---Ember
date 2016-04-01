import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    edit(answer, params) {
      this.sendAction('edit', answer, params);
    },
    delete(answer) {
      this.sendAction('deleteAnswer', answer);
    },
  }
});
