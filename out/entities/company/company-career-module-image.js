import Model from 'app/api/NotTerribleModel';
import Image from "app/models/common/image";

export default class CompanyCareerModuleImage extends Model {
  static schema = {
    /**
     * @property image
     * reference to image.
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

    modelType: "entities/company/company-career-module-image"
  }
}
