import Ember from 'ember';

export default Ember.Component.extend({
  addNewAnswer: false,
  actions: {
    answerFormShow() {
      this.set('addNewAnswer', true);
    },
    saveA() {
     var params = {
       text: this.get('text'),
       author: this.get('author'),
       post: this.get('post'),
     };
     this.set('addNewAnswer', false);
     this.sendAction('saveB', params);
   },
   cancel() {
     this.set('addNewAnswer', false);
   }
 }
});
