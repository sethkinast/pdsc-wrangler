import Model from 'app/api/NotTerribleModel';
import Image from "app/models/common/image";

export default class CareerImage extends Model {
  static schema = {
    /**
     * @property image
     * reference to image. (It's usually a MediaProcessorImage.)
     */
    image: Image,

    /**
     * @property url
     * Url for more information.
     */
    url: Model.foreignUrn('com.linkedin.common.Url'),

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

    modelType: "entities/company/career-image"
  }
}
