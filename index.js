/**
 * This is an example of a basic node.js script that performs
 * the Authorization Code oAuth2 flow to authenticate against
 * the Spotify Accounts.
 *
 * For more information, read
 * https://developer.spotify.com/web-api/authorization-guide/#authorization_code_flow
 */

require('dotenv').load();
var express = require('express'); // Express web server framework

var client_id = process.env.CLIENT_ID; // Your client id
var client_secret = process.env.CLIENT_SECRET; // Your secret
var redirect_uri = process.env.REDIRECT_URI; // Your redirect uri

var app = express();
app.use(express.static(__dirname + '/client'));
app.listen(8888);
console.log('Listening on 8888');
console.log(client_id);
console.log(client_secret);
console.log(redirect_uri);