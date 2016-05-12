import Model from 'app/api/NotTerribleModel';

export default class ImageCropInfo extends Model {
  static schema = {
    /**
     * @property x
     * X coordinate of upper-left corner of the cropped area (upper-left corner of image is 0).
     */
    x: Model.INT,

    /**
     * @property y
     * Y coordinate of upper-left corner of the cropped area (upper-left corner of image is 0).
     */
    y: Model.INT,

    /**
     * @property width
     * Width of the result cropped image.
     */
    width: Model.INT,

    /**
     * @property height
     * Height of the result cropped image.
     */
    height: Model.INT,

    modelType: "identity/profile/image-crop-info"
  }
}
