import Model from 'app/api/NotTerribleModel';

export default class BizCroppedImage extends Model {
  static schema = {
    /**
     * @property croppedImage
     * urn representing cropped image
     */
    croppedImage: Model.STRING,

    /**
     * @property uncroppedImage
     * urn representing uncropped image
     */
    uncroppedImage: Model.STRING,

    /**
     * @property url
     * url of image
     */
    url: Model.foreignUrn('com.linkedin.common.Uri'),

    /**
     * @property height
     * original height
     */
    height: Model.INT,

    /**
     * @property width
     * original width
     */
    width: Model.INT,

    /**
     * @property cropHeight
     * cropped height
     */
    cropHeight: Model.INT,

    /**
     * @property cropWidth
     * cropped width
     */
    cropWidth: Model.INT,

    /**
     * @property cropXPosition
     * crop starts from this position on x axis
     */
    cropXPosition: Model.INT,

    /**
     * @property cropYPosition
     * crop starts from this position on y axis
     */
    cropYPosition: Model.INT,

    modelType: "identity/creatives/company/biz-cropped-image"
  }
}
