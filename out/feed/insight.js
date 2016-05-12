import Model from 'app/api/NotTerribleModel';

export default class Insight extends Model {
  static schema = {
    /**
     * @property reason
     * Simple text of the insight
     */
    reason: Model.STRING,

    modelType: "feed/insight"
  }
}
