import Model from 'app/api/NotTerribleModel';
import CareerResources from "app/models/entities/company/career-resources";

export default class CareerAbout2 extends Model {
  static schema = Object.assign({}, CareerResources.schema, {
    /**
     * @property title
     * Title of section.
     */
    title: Model.STRING,

    /**
     * @property text
     * Text written by the company about themselves.
     */
    text: Model.STRING,

    modelType: "entities/company/career-about2"
  })
}
