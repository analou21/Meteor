import { Meteor } from 'meteor/meteor';

import './formInvit.html';

Template.formInvit.events({
  'button': function(event){
    event.preventDefault();
    event.target.formInvit;
    event.target.unCertainNom.valeur;
  }
});
