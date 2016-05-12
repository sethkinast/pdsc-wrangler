import Model from 'app/api/NotTerribleModel';

export default class FacetValue extends Model {
  static schema = {
    /**
     * @property value
     * Value to construct subsequent search queries.
     */
    value: Model.STRING,

    /**
     * @property displayValue
     * Display value of the facet.
     */
    displayValue: Model.STRING,

    modelType: "search/facet-value"
  }
}
