import Model from 'app/api/NotTerribleModel';

export default class ExternalAuthor extends Model {
  static schema = {
    /**
     * @property name
     * Name of the author.
     */
    name: Model.STRING,

    modelType: "feed/external-author"
  }
}
