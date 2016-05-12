import Model from 'app/api/NotTerribleModel';

export default class SearchQueryParam extends Model {
  static schema = {
    /**
     * @property name
     * name of the parameter used to make the search
     */
    name: Model.STRING,

    /**
     * @property value
     * value of parameter.
     */
    value: Model.STRING,

    modelType: "search/search-query-param"
  }
}
