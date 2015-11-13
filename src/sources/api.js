'use strict';

import $ from 'jquery';

const CLIENT_ID = '00566d00423463db210e73875340068b1bedbadc9822438768dd8f3226d3a8e7';
const TRAK_ENDPOINT = "https://api-v2launch.trakt.tv/";
const AUTHORIZATION_ENDPOINT = TRAK_ENDPOINT + "oauth/authorize";
const REDIRECT_URI = 'http://localhost:8000/';
const YTRAK_ENDPOINT = 'http://localhost:8080/';
const SERVER_ENDPOINT = YTRAK_ENDPOINT + "api/";

//var userStore = require('stores/UserStore');

function buildApiRequest(url, data = {}) {
	return {
			    dataType: "json",
			    contentType: "application/json",
			    beforeSend: function(request) {
			        request.setRequestHeader("trakt-api-version", '2');
			        request.setRequestHeader("trakt-api-key", CLIENT_ID);
			    },
			    url: TRAK_ENDPOINT + url,
			    data
			};
}

export default class Api {

	static authorize () {
		var authUrl = AUTHORIZATION_ENDPOINT + 
	        "?response_type=code" +
	        "&client_id="    + CLIENT_ID +
	        "&redirect_uri=" + REDIRECT_URI;
	    
		window.location.assign(authUrl);
	}

	static getToken (code) {
		return $.post(SERVER_ENDPOINT + 'getToken', { code: code });
	}

	static getProfileData (accessToken) {
		return $.ajax(TRAK_ENDPOINT + 'users/me', {
			beforeSend(jqXHR) {
				jqXHR.setRequestHeader('Content-Type', 'application/json');
				jqXHR.setRequestHeader('Authorization', 'Bearer ' + accessToken);
				jqXHR.setRequestHeader('trakt-api-version', '2');
				jqXHR.setRequestHeader('trakt-api-key', CLIENT_ID);
			}
		});
	}

	static getPopular (){
		return $.ajax(buildApiRequest("movies/popular"));
	}

	static search (data){
		return $.ajax(buildApiRequest("search", data));
	}

	static related(movieId) {
		return $.ajax(buildApiRequest("movies/" + movieId + "/related"));
	}
}
