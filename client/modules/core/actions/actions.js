export default {
  callRemoteMethod({remote}) {
    console.log('callRemoteMethod');

    remote.call('things.add', (err, res) => {
      if (err) { alert(err); }
      else { console.log(`callRemoteMethod ${res}`); }
    });
  },

  login({Meteor}, username, pwd) {
    console.log('login');
    console.log(`username ${username}, pwd ${pwd}`);

    Meteor.loginWithPassword(username, pwd, err => {
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
  }
};
