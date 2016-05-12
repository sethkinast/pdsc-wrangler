import Model from 'app/api/NotTerribleModel';

export default class UnderageResponse extends Model {
  static schema = {
    /**
     * @property underage
     * Whether the logged-in member is underage.
     */
    underage: Model.BOOL,

    modelType: "growth/profile/underage-response"
  }
}
