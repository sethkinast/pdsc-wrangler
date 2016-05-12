import Model from 'app/api/NotTerribleModel';
import PresentationUrn from "app/models/common/presentation-urn";
import Image from "app/models/common/image";

export default class Presentation extends Model {
  static schema = {
    /**
     * @property entityUrn
     * Identifier for this presentation.
     */
    entityUrn: PresentationUrn,

    /**
     * @property title
     * Title of the presentation.
     */
    title: Model.STRING,

    /**
     * @property url
     * Url for the presentation.
     */
    url: Model.foreignUrn('com.linkedin.common.Url'),

    /**
     * @property image
     * Image of the presentation.
     */
    image: Image,

    /**
     * @property viewCount
     * Number of views on the presentation.
     */
    viewCount: Model.INT,

    modelType: "entities/skill/presentation"
  }
}
