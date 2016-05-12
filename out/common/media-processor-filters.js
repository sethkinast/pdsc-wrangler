import Model from 'app/api/NotTerribleModel';

export default class MediaProcessorFilters extends Model {
  static schema = {
    /**
     * @property contain
     * RFC 6570 style uri template describing how MPR urls corresponding to contain should be constructed. Will contain placeholders for size and id
     */
    contain: Model.STRING,

    /**
     * @property cover
     * RFC 6570 style uri template describing how MPR urls corresponding to cover should be constructed. Will contain placeholders for size and id
     */
    cover: Model.STRING,

    /**
     * @property fill
     * RFC 6570 style uri template describing how MPR urls corresponding to fill should be constructed. Will contain placeholders for size and id
     */
    fill: Model.STRING,

    /**
     * @property original
     * RFC 6570 style uri template describing how MPR urls corresponding to original should be constructed. Will contain placeholder for id
     */
    original: Model.STRING,

    modelType: "common/media-processor-filters"
  }
}
