import Ember from 'ember';

export function adminLabel(params/*, hash*/) {
  var author = params[0].get('author');

  if (author === "Jake S.") {
    return 'ADMIN';
  }
}

export default Ember.Helper.helper(adminLabel);
