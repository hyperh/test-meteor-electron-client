import {useDeps, composeWithTracker, composeAll} from 'mantra-core';
import Home from '../components/Home.jsx';

const depsMapper = (context, actions) => ({
  context: () => context,
  callRemoteMethod: actions.all.callRemoteMethod,
  login: actions.all.login,
  logout: actions.all.logout,
  createUser: actions.all.createUser
});

export const composer = ({context}, onData) => {
  const {Meteor, FlowRouter, Collections, remote} = context();

  const subSelf = remote.subscribe('self');
  const subUsers = remote.subscribe('users');
  const subThings = remote.subscribe('things');

  const userId = Meteor.userId();
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
