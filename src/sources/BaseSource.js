const TRAK_ENDPOINT = "https://api-v2launch.trakt.tv/",
		YTRAK_ENDPOINT = 'http://localhost:8080/';

export default class BaseSource {
	static CLIENT_ID = '00566d00423463db210e73875340068b1bedbadc9822438768dd8f3226d3a8e7';
	static TRAK_ENDPOINT = TRAK_ENDPOINT;
	static AUTHORIZATION_ENDPOINT = TRAK_ENDPOINT + "oauth/authorize";
	static REDIRECT_URI = 'http://localhost:8000/';
	static YTRAK_ENDPOINT = YTRAK_ENDPOINT;
	static SERVER_ENDPOINT = YTRAK_ENDPOINT + "api/";

	static defaultRequestHeader()  {
		return {
				"trakt-api-version" : '2',
				"trakt-api-key": this.CLIENT_ID
			};
	}

	static xhr(url, data, method = 'GET', requestHeaders = undefined){
		return new Promise((resolve, reject) => {
			var xhr = new XMLHttpRequest();
		  	xhr.onreadystatechange = function () {
			    if (xhr.readyState === 4) {
			      if (xhr.status === 200) {
			        resolve(JSON.parse(xhr.responseText));
			      } else {
			        reject(xhr.responseText);
			      }
			    }
			  };
			  xhr.open(method, url);

			  // xhr.withCredentials = true;
			  if(requestHeaders === undefined){
			  	requestHeaders = this.defaultRequestHeader();
			  }
			  _.each(requestHeaders, (value, key) => xhr.setRequestHeader(key, value));		  

			  xhr.send(this.serializePostData(data));
			})
		
	}
	static getJSON(url, data, requestHeaders){
		return this.xhr(url + (data ? this.toQueryString(data) : ''), undefined, 'GET', requestHeaders);
	}
	static postJSON(url, data, requestHeaders){
		return this.xhr(url, data, 'POST', requestHeaders);
	}
	static toQueryString(obj) {
	  const queryString = _.map(obj, (v,k) => {
			    return encodeURIComponent(k) + '=' + encodeURIComponent(v);
			  })
	  		.join('&');
  		return  '?' + queryString;
	}
	static serializePostData(data) {
		if(data === undefined) return undefined;

		// trimming out the '?' from the beginning of the query string
		return this.toQueryString(data).substring(1);
	}
}