import {useDeps, composeWithTracker, composeAll} from 'mantra-core';
import Home from '../components/Home.jsx';

const depsMapper = (context, actions) => ({
  context: () => context,
  callRemoteMethod: actions.all.callRemoteMethod,
  login: actions.all.login
});

export const composer = ({context}, onData) => {
  const {Meteor, FlowRouter, Collections, remote} = context();

  const sub = remote.subscribe('self');
  console.log(sub);
  // if (sub.ready()) {
    onData(null, {});
  // }
};

export default composeAll(
  composeWithTracker(composer),
  useDeps(depsMapper)
)(Home);
