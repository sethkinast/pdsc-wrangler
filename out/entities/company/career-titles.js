import Model from 'app/api/NotTerribleModel';

export default class CareerTitles extends Model {
  static schema = {
    /**
     * @property title
     * Primary title text.
     */
    title: Model.STRING,

    /**
     * @property subtitle
     * Subtitle text.
     */
    subtitle: Model.STRING,

    modelType: "entities/company/career-titles"
  }
}
