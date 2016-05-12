import Model from 'app/api/NotTerribleModel';
import RegionUrn from "app/models/common/region-urn";

export default class Region extends Model {
  static schema = {
    /**
     * @property entityUrn
     * Identifier for this region
     */
    entityUrn: RegionUrn,

    /**
     * @property regionName
     * The name of this region.
     */
    regionName: Model.STRING,

    /**
     * @property regionCode
     * The code representing this region. ex. 'San Francisco Bay Area' has a region code of '84'
     */
    regionCode: Model.INT,

    modelType: "common/region"
  }
}
