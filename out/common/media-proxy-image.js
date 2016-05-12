import Model from 'app/api/NotTerribleModel';

export default class MediaProxyImage extends Model {
  static schema = {
    /**
     * @property url
     * Fully qualified CDNified media-proxy URL
     */
    url: Model.foreignUrn('com.linkedin.common.Url'),

    /**
     * @property originalWidth
     * Width of original 3rd party hosted image
     */
    originalWidth: Model.INT,

    /**
     * @property originalHeight
     * Height of original 3rd party hosted image
     */
    originalHeight: Model.INT,

    modelType: "common/media-proxy-image"
  }
}
