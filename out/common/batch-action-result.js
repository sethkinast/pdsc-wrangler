import Model from 'app/api/NotTerribleModel';

export default class BatchActionResult extends Model {
  static schema = {
    /**
     * @property statusCodeMap
     * The status code for each action.
     */
    statusCodeMap: Model.foreignUrn('[object Object]'),

    modelType: "common/batch-action-result"
  }
}
