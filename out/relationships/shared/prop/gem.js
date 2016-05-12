import Model from 'app/api/NotTerribleModel';
import GemType from "app/models/relationships/shared/prop/gem-type";
import Image from "app/models/common/image";
import AnnotatedText from "app/models/relationships/shared/annotation/annotated-text";

export default class Gem extends Model {
  static schema = {
    /**
     * @property gemType
     * Gem type
     */
    gemType: GemType,

    /**
     * @property image
     * An image that presents the gem
     */
    image: Image,

    /**
     * @property links
     * External links for the gem
     */
    links: Model.foreignUrn('com.linkedin.restli.common.Link'),

    /**
     * @property details
     * Detailed information for the gem
     */
    details: AnnotatedText,

    modelType: "relationships/shared/prop/gem"
  }
}
