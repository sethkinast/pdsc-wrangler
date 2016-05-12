import Model from 'app/api/NotTerribleModel';
import DegreeUrn from "app/models/common/degree-urn";

export default class TypeaheadDegree extends Model {
  static schema = {
    /**
     * @property id
     * The id of the Degree.
     */
    id: Model.STRING,

    /**
     * @property backendUrn
     * Backend urn representing the degree. This should be used only for tracking.
     */
    backendUrn: Model.foreignUrn('com.linkedin.common.DegreeUrn'),

    /**
     * @property degreeUrn
     * Urn representing the degree. This can be used for frontend APIs to use in subsequent requests.
     */
    degreeUrn: DegreeUrn,

    modelType: "typeahead/typeahead-degree"
  }
}
