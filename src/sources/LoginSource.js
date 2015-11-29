import BaseSource from 'sources/BaseSource';
export default class LoginSource extends BaseSource {

	static authorize () {
		var authUrl = super.AUTHORIZATION_ENDPOINT + 
	        "?response_type=code" +
	        "&client_id="    + super.CLIENT_ID +
	        "&redirect_uri=" + super.REDIRECT_URI;
	    
		window.location.assign(authUrl);
	}

	static getToken (code) {
		return super.postJSON(super.SERVER_ENDPOINT + 'getToken', { code: code }, {
			'Content-type': 'application/x-www-form-urlencoded'
		});
	}

	static getProfileData (accessToken) {
		return super.getJSON(super.TRAK_ENDPOINT + 'users/me', undefined,
			_.extend({
					'Content-Type': 'application/json',
					'Authorization': 'Bearer ' + accessToken
				},
				super.defaultRequestHeader()
			)
		);
	}
}