import Model from 'app/api/NotTerribleModel';
import IndustryUrn from "app/models/common/industry-urn";

export default class TypeaheadIndustry extends Model {
  static schema = {
    /**
     * @property industryUrn
     * The urn of the industry for use on the client.
     */
    industryUrn: IndustryUrn,

    /**
     * @property backendUrn
     * Backend urn representing the industry. This should be used only for tracking.
     */
    backendUrn: Model.foreignUrn('com.linkedin.common.IndustryUrn'),

    modelType: "typeahead/typeahead-industry"
  }
}
