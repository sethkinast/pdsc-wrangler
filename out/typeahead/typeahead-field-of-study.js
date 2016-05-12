import Model from 'app/api/NotTerribleModel';
import FieldOfStudyUrn from "app/models/common/field-of-study-urn";

export default class TypeaheadFieldOfStudy extends Model {
  static schema = {
    /**
     * @property id
     * The id of the Field of Study.
     */
    id: Model.STRING,

    /**
     * @property backendUrn
     * Backend urn representing the field of study. This should be used only for tracking.
     */
    backendUrn: Model.foreignUrn('com.linkedin.common.FieldOfStudyUrn'),

    /**
     * @property fieldOfStudyUrn
     * Urn representing the field fo study. This can be used for frontend APIs to use in subsequent requests.
     */
    fieldOfStudyUrn: FieldOfStudyUrn,

    modelType: "typeahead/typeahead-field-of-study"
  }
}
