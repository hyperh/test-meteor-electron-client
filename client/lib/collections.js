import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';
import remote from './connection';

export const Things = new Mongo.Collection('things', {connection: remote});
Meteor.users = new Mongo.Collection('users', {connection: remote});
