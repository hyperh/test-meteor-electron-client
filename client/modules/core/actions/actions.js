export default {
  callRemoteMethod({remote}) {
    console.log('callRemoteMethod');
    remote.call('things.add', (err, res) => {
      if (err) { alert(err); }
      else { console.log(`callRemoteMethod ${res}`); }
    });
  }
};
