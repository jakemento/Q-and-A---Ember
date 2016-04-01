import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    return this.store.findRecord('question', params.question_id);
  },
  actions: {
    deleteQuestion(question) {
      question.destroyRecord();
      this.transitionTo('index');
    },
    update(question, params) {
      Object.keys(params).forEach(function(key) {
        if(params[key]!==undefined) {
          question.set(key,params[key]);
        }
      });
      question.save();
      this.transitionTo('index');
    },
    saveC(params) {
        var newAnswer = this.store.createRecord('answer', params);
        var post = params.post;
        post.get('answers').addObject(newAnswer);
        newAnswer.save().then(function() {
          return post.save();
        });
        this.transitionTo('question');
      },

      editAnswer(answer, params) {
        Object.keys(params).forEach(function(key) {
          if(params[key] !== undefined) {
            answer.set(key,params[key]);
          }
        });
        answer.save();
        this.transitionTo('question', params.question);
      },

      deleteAnswer(answer) {
        answer.destroyRecord();
      }
    }
  });
