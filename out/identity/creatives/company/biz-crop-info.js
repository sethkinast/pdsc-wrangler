import Model from 'app/api/NotTerribleModel';

export default class BizCropInfo extends Model {
  static schema = {
    /**
     * @property height
     * Height of the image.
     */
    height: Model.INT,

    /**
     * @property width
     * Width of the image.
     */
    width: Model.INT,

    /**
     * @property x
     * Cropped X Position of the image.
     */
    x: Model.INT,

    /**
     * @property y
     * Cropped Y Position of the image.
     */
    y: Model.INT,

    /**
     * @property angle
     * Cropped rotated angle of the image.
     */
    angle: Model.INT,

    modelType: "identity/creatives/company/biz-crop-info"
  }
}
