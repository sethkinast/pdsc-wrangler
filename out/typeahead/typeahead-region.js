import Model from 'app/api/NotTerribleModel';
import RegionUrn from "app/models/common/region-urn";

export default class TypeaheadRegion extends Model {
  static schema = {
    /**
     * @property id
     * The id of the geo region. e.g.,  us:84 for san francisco bay area
     */
    id: Model.STRING,

    /**
     * @property regionUrn
     * Urn representing the region. This can be used for frontend APIs to use in subsequent requests.
     */
    regionUrn: RegionUrn,

    modelType: "typeahead/typeahead-region"
  }
}
