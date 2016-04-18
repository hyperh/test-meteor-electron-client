import { Accounts } from 'meteor/accounts-base';

export default {
  callRemoteMethod({remote}) {
    console.log('callRemoteMethod');

    remote.call('things.add', (err, res) => {
      if (err) { alert(err); }
      else { console.log(`callRemoteMethod ${res}`); }
    });
  },

  login({remote}, username, pwd) {
    console.log('login');
    console.log(`${username}, ${pwd}`);
  }
};
