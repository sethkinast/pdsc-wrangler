import Model from 'app/api/NotTerribleModel';
import PositionUrn from "app/models/common/position-urn";
import DateRange from "app/models/common/date-range";
import RegionUrn from "app/models/common/region-urn";
import MiniCompanyUrn from "app/models/common/mini-company-urn";

export default class NormPosition extends Model {
  static schema = {
    /**
     * @property entityUrn
     * Identifier for this position
     */
    entityUrn: PositionUrn,

    /**
     * @property title
     * Title provided by the member for this position.
     */
    title: Model.STRING,

    /**
     * @property description
     * Description given by the member about his position.
     */
    description: Model.STRING,

    /**
     * @property timePeriod
     * The time period when the member's at this position. This DateRange is meant for holding months and years only.
     */
    timePeriod: DateRange,

    /**
     * @property region
     * URN of the region of this position.
     */
    region: RegionUrn,

    /**
     * @property locationName
     * Localized location name of this position.
     */
    locationName: Model.STRING,

    /**
     * @property companyName
     * Name of the company, as provided by the user.
     */
    companyName: Model.STRING,

    /**
     * @property companyUrn
     * URN of the company given by the user, as provided from the type-ahead.
     */
    companyUrn: MiniCompanyUrn,

    modelType: "identity/profile/norm-position"
  }
}
