import BaseSource from 'sources/BaseSource';

export default class RelatedSource extends BaseSource {
	static related(movieId){
		return super.getJSON(super.TRAK_ENDPOINT + "movies/" + movieId + "/related");
	}
}