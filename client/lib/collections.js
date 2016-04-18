import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';
import remote from './connection';
import { Accounts } from 'meteor/accounts-base';

export const Things = new Mongo.Collection('things', {connection: remote});

Accounts.connection = remote;
Meteor.users = new Mongo.Collection('users', {connection: remote});
