import { Meteor } from 'meteor/meteor';

import './formInvit.html';

Template.formInvit.events({
  'submit #form': function(event){
    event.preventDefault();
    var nom = event.target.text.value;
    Meteor.call('envoyerInvitation', nom);
  }
});
