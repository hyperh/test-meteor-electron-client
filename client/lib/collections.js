import { Mongo } from 'meteor/mongo';
import { DDP } from 'meteor/ddp-client';

export let remote = DDP.connect('http://localhost:3000');
export const Things = new Mongo.Collection('things', {connection: remote});
