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

  remote.subscribe('self');
  remote.subscribe('users');
  remote.subscribe('things');

  const things = Collections.Things.find().fetch();
  const users = Meteor.users.find().fetch();

  const userId = Meteor.userId();
  const user = Meteor.users.findOne(userId);

  onData(null, {things, users, user});
};

export default composeAll(
  composeWithTracker(composer),
  useDeps(depsMapper)
)(Home);
