import Model from 'app/api/NotTerribleModel';
import Link from "app/models/common/link";
import CareerRichMedia from "app/models/entities/company/career-rich-media";

export default class CareerResources extends Model {
  static schema = {
    /**
     * @property links
     * A list of links with their corresponding anchor text.
     */
    links: Link,

    /**
     * @property media
     * Embedded media, either an image, a video, or a slideshare.
     */
    media: CareerRichMedia,

    modelType: "entities/company/career-resources"
  }
}
