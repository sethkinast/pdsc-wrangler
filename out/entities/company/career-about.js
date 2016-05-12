import Model from 'app/api/NotTerribleModel';
import CareerImage from "app/models/entities/company/career-image";

export default class CareerAbout extends Model {
  static schema = {
    /**
     * @property title
     * Title for the text section.
     */
    title: Model.STRING,

    /**
     * @property text
     * Text written by the company about themselves.
     */
    text: Model.STRING,

    /**
     * @property image
     * The company career image.
     */
    image: CareerImage,

    /**
     * @property careersTitle
     * Main title for the careers section.
     */
    careersTitle: Model.STRING,

    /**
     * @property careersSubtitle
     * Main subtitle for the careers section.
     */
    careersSubtitle: Model.STRING,

    modelType: "entities/company/career-about"
  }
}
