var TelldusAPI = require('telldus-live');

var publicKey = 'FEHUVEW84RAFR5SP22RABURUPHAFRUNU',
  privateKey = 'ZUXEVEGA9USTAZEWRETHAQUBUR69U6EF',
  token = '939683e99b77139f7e7b329de3f9ebba0584310af',
  tokenSecret = '7a0278c26688d06203114bf0a5d7718a',
  cloud;

cloud = new TelldusAPI.TelldusAPI({
  publicKey: publicKey,
  privateKey: privateKey
}).login(function(token, tokenSecret, function(err, user)) {
  if (!!err) return console.log('login error: ' + err.message);

  // otherwise, good to go!
  console.log('user: ');
  console.log(user);
}).on('error', function(err) {
  console.log('background error: ' + err.message);
});
