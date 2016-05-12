import Model from 'app/api/NotTerribleModel';
import Image from "app/models/common/image";
import ImageCropInfo from "app/models/identity/profile/image-crop-info";

export default class BackgroundImage extends Model {
  static schema = {
    /**
     * @property image
     * Member's background image, which can be a standard or a custom image.
     */
    image: Image,

    /**
     * @property cropInfo
     * Cropping information about the background image.
     */
    cropInfo: ImageCropInfo,

    modelType: "identity/profile/background-image"
  }
}
