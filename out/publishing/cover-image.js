import Model from 'app/api/NotTerribleModel';
import Image from "app/models/common/image";

export default class CoverImage extends Model {
  static schema = {
    /**
     * @property originalImage
     * Original uploaded image of the article.
     */
    originalImage: Image,

    /**
     * @property caption
     * Optional caption for the image.
     */
    caption: Model.foreignUrn('com.linkedin.pemberly.text.AttributedText'),

    /**
     * @property croppedImage
     * Cropped cover image of the article.
     */
    croppedImage: Image,

    /**
     * @property cropInfo
     * Cropped image metadata.
     */
    cropInfo: Model.foreignUrn('com.linkedin.common.Rectangle'),

    modelType: "publishing/cover-image"
  }
}
