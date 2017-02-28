import { Template } from 'meteor/templating';

Template.monAmi.helpers({
  isOnline(){
    if(this.online === true){
      return '(online)';
    }
    else {
      return '(offline)';
    }
  }
});
