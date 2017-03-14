import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';

Meteor.methods({
  'envoyerInvitation': function(nom){
    var user = Meteor.users.findOne({username: nom});
    if(Meteor.users.findOne(user._id)){
      Invitations.insert({
        emetteurId: Meteor.user()._id,
        emetteurNom: Meteor.user().username,
        destinataireId: user._id
      });
    }
  }
});
