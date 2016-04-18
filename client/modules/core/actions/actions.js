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
    console.log(`${username}, ${pwd}`);

    Meteor.loginWithPassword(username, pwd, err => {
      if (err) { alert(err); }
      else {
        console.log('logged in!');
        console.log(Meteor.userId());
      }
    });
  }
};
