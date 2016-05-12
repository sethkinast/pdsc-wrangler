import Model from 'app/api/NotTerribleModel';

export default class MediaProcessorSize extends Model {
  static schema = {
    /**
     * @property width
     * Width of the image.
     */
    width: Model.INT,

    /**
     * @property height
     * Height of the image.
     */
    height: Model.INT,

    modelType: "common/media-processor-size"
  }
}
