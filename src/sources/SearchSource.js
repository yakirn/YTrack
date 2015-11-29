import BaseSource from 'sources/BaseSource';

export default class SearchSource extends BaseSource {
	static search (data){
		return super.getJSON(super.TRAK_ENDPOINT + "search", data);
	}
}