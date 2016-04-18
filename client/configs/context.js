import remote from '../lib/connection';
import * as Collections from '../lib/collections';
import {Meteor} from 'meteor/meteor';
import {FlowRouter} from 'meteor/kadira:flow-router';
import {ReactiveDict} from 'meteor/reactive-dict';
import {Tracker} from 'meteor/tracker';
import { Session } from 'meteor/session';
import _ from 'lodash';

// Do this if you want to stick with regular Meteor calls. Might break stuff though.
// const funcNames = [
//   'subscribe', 'methods', 'call', 'apply', 'status', 'reconnect', 'disconnect'
// ];
// funcNames.forEach(name => {
//   Meteor[name] = _.bind(remote[name], remote);
// });

export default function () {
  return {
    Meteor,
    FlowRouter,
    Collections,
    LocalState: new ReactiveDict(),
    Tracker,
    remote,
    Session
  };
}
