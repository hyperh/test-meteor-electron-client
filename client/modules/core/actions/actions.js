import { Accounts } from 'meteor/accounts-base';

export default {
  callRemoteMethod({remote, Meteor}) {
    console.log('callRemoteMethod');

    // Meteor.call('things.add', (err, res) => {
    //   if (err) { alert(err); }
    //   else { console.log(`callRemoteMethod ${res}`); }
    // });
    remote.call('things.add', (err, res) => {
      if (err) { alert(err); }
      else { console.log(`callRemoteMethod ${res}`); }
    });
  },

  login({Meteor}, username, password) {
    console.log('login');
    console.log(`username ${username}, pwd ${password}`);

    Meteor.loginWithPassword(username, password, err => {
      if (err) { alert(err); }
      else {
        console.log('logged in!');
        console.log(`userId ${Meteor.userId()}`);
        console.log(`Meteor.user()`);
        console.log(Meteor.user());
        console.log(`Meteor.users.findOne()`);
        console.log(Meteor.users.findOne(Meteor.userId()));
      }
    });
  },

  logout({Meteor}) {
    Meteor.logout(err => {
      if (err) { alert(err); }
      else {
        console.log('logged out!');
      }
    });
  },

  createUser({Meteor}, username, password) {
    console.log('createUser');
    Accounts.createUser({
      username, password
    });
  }
};
