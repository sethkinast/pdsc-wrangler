import Model from 'app/api/NotTerribleModel';

export default class MediaProcessorImage extends Model {
  static schema = {
    /**
     * @property id
     * Ambry or media-server identifier
     */
    id: Model.STRING,

    modelType: "common/media-processor-image"
  }
}
