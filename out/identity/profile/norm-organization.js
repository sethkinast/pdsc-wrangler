import Model from 'app/api/NotTerribleModel';
import OrganizationUrn from "app/models/common/organization-urn";
import DateRange from "app/models/common/date-range";

export default class NormOrganization extends Model {
  static schema = {
    /**
     * @property entityUrn
     * Identifier for this organization
     */
    entityUrn: OrganizationUrn,

    /**
     * @property name
     * Name of this organization, as provided by the member.
     */
    name: Model.STRING,

    /**
     * @property timePeriod
     * The time period when the member's at this organization. This DateRange is meant for holding months and years only.
     */
    timePeriod: DateRange,

    /**
     * @property position
     * Position of the member within the organization.
     */
    position: Model.STRING,

    /**
     * @property occupation
     * Occupation at the time member belonged to this organization.
     */
    occupation: Model.STRING,

    /**
     * @property description
     * Description of the role of the member within this organization.
     */
    description: Model.STRING,

    modelType: "identity/profile/norm-organization"
  }
}
