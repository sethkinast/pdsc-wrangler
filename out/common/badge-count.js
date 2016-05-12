import Model from 'app/api/NotTerribleModel';

export default class BadgeCount extends Model {
  static schema = {
    /**
     * @property count
     * Number on the badge
     */
    count: Model.INT,

    modelType: "common/badge-count"
  }
}
