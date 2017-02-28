import 'meteor/templating';

Template.mesAmis.helpers({
  mesAmis(){
    return Meteor.users.find();
  },
  unautrehelpers(){

  }
});
