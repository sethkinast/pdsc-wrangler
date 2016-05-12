import Model from 'app/api/NotTerribleModel';

export default class PagingInfo extends Model {
  static schema = {
    /**
     * @property start
     * The start index requested by client.
     */
    start: Model.INT,

    /**
     * @property count
     * The number of results requested by client.
     */
    count: Model.INT,

    /**
     * @property total
     * The total number of results.
     */
    total: Model.INT,

    modelType: "entities/common/paging-info"
  }
}
