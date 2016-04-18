import {useDeps, composeWithTracker, composeAll} from 'mantra-core';
import { Accounts } from 'meteor/accounts-base';

import Home from '../components/Home.jsx';

const depsMapper = (context, actions) => ({
  context: () => context,
  callRemoteMethod: actions.all.callRemoteMethod,
  login: actions.all.login,
  logout: actions.all.logout,
  createUser: actions.all.createUser
});

export const composer = ({context}, onData) => {
  const {Meteor, Collections, remote, Tracker, LocalState} = context();

  const userId = Meteor.userId();

  Tracker.autorun(function () {
    var token = LocalState.get('_storedLoginToken');
    console.log(`_storedLoginToken, ${token}`);
    if (token) {
      Meteor.loginWithToken(token, function (err) {
        // this is going to throw error if we logged out
        if (!err) { console.log(`loginWithToken, ${token}`); }
      });
    }
  });

  Tracker.autorun(function () {
    const user = Meteor.users.findOne(userId);
    if (user) {
      console.log('storing token...');
      LocalState.set('_storedLoginToken', Accounts._storedLoginToken());
    }
  });


  const subSelf = remote.subscribe('self');
  const subUsers = remote.subscribe('users');
  const subThings = remote.subscribe('things');

  if (userId) {
    if (subSelf.ready() && subUsers.ready() && subThings.ready()) {
      const things = Collections.Things.find().fetch();
      const users = Meteor.users.find().fetch();
      const user = Meteor.users.findOne(userId);

      onData(null, {things, users, user});
    }
  }
  else {
    onData(null, {things: [], users: []});
  }

};

export default composeAll(
  composeWithTracker(composer),
  useDeps(depsMapper)
)(Home);
