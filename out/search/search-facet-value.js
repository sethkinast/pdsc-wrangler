import Model from 'app/api/NotTerribleModel';
import FacetValue from "app/models/search/facet-value";
import Image from "app/models/common/image";

export default class SearchFacetValue extends Model {
  static schema = Object.assign({}, FacetValue.schema, {
    /**
     * @property image
     * Logo / image for the facet value (e.g if the facet value is a specific company)
     */
    image: Image,

    /**
     * @property count
     * Number of hits matching this facet value
     */
    count: Model.INT,

    /**
     * @property selected
     * Indicates whether the facet value is selected
     */
    selected: Model.BOOL,

    modelType: "search/search-facet-value"
  })
}
