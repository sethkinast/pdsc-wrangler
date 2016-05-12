import Model from 'app/api/NotTerribleModel';

export default class Embed extends Model {
  static schema = {
    /**
     * @property embedHtml
     * Sanitized HTML fragment containing the embed code with actual 3rd party domain URL.
     */
    embedHtml: Model.STRING,

    modelType: "publishing/embed"
  }
}
