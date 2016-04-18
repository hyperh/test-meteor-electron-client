import {Meteor} from 'meteor/meteor';
import {Things} from '/lib/collections';

export default function () {
  Meteor.methods({
    'wipeAndInitialize'() {
      Things.remove();

      for (let i = 0; i < 10; i++) {
        Things.insert({
          text: `some text ${i}`
        });
      }
    }
  });
}
