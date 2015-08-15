'use strict';
//var JSO = require('bower/jso/build/jso');
import $ from 'jquery';
var UserActions = require('actions/UserActionCreators');

const CLIENT_ID = '00566d00423463db210e73875340068b1bedbadc9822438768dd8f3226d3a8e7';
const AUTHORIZATION_ENDPOINT = "https://api-v2launch.trakt.tv/oauth/authorize";
const REDIRECT_URI = 'http://localhost:8000/';
const SERVER_ENDPOINT = "http://localhost:8080/api/";
//const RESOURCE_ENDPOINT = "https://api.soundcloud.com/me";
export default class Api {
	static authorize () {
		// var jso = new JSO({
		// providerID: 'traktv',
  //       client_id: "00566d00423463db210e73875340068b1bedbadc9822438768dd8f3226d3a8e7",
  //       redirect_uri: "http://localhost:8000/",
  //       presenttoken: 'qs',
  //       debug: true,
  //       authorization: "https://accounts.google.com/o/oauth2/auth",
  //       scopes: { request: ["https://www.googleapis.com/auth/userinfo.profile"]}

		var authUrl = AUTHORIZATION_ENDPOINT + 
	        "?response_type=code" +
	        "&client_id="    + CLIENT_ID +
	        "&redirect_uri=" + REDIRECT_URI;
	    
		window.location.assign(authUrl);

	}

	static getToken (code) {
		if(code){
			$.post(SERVER_ENDPOINT + 'getToken', { code: code })//JSON.stringify({ code: code }))
			.done(function(data){
				console.debug(data);
			})
			.fail(function(message){
				console.log('api error - ' + message);
			});
		} else {
			console.log('no code');
		}
	}
}
