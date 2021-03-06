import Ember from 'ember';

export function answerPopularity(params/*, hash*/) {
  var question = params[0];

  if(question.get('answers').get('length') >=3) {
    return Ember.String.htmlSafe('<span class="glyphicon glyphicon-fire"></span');
  }
  if (question.get('answers').get('length') ===0) {
    return Ember.String.htmlSafe('<span class="glyphicon2 glyphicon-unchecked"></span>');
  }
}

export default Ember.Helper.helper(answerPopularity);
