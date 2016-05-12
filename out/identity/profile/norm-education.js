import Model from 'app/api/NotTerribleModel';
import EducationUrn from "app/models/common/education-urn";
import MiniSchoolUrn from "app/models/common/mini-school-urn";
import DateRange from "app/models/common/date-range";
import DegreeUrn from "app/models/common/degree-urn";
import FieldOfStudyUrn from "app/models/common/field-of-study-urn";

export default class NormEducation extends Model {
  static schema = {
    /**
     * @property entityUrn
     * Identifier for this education
     */
    entityUrn: EducationUrn,

    /**
     * @property schoolUrn
     * User-selected school from a typeahead.
     */
    schoolUrn: MiniSchoolUrn,

    /**
     * @property schoolName
     * Free form school. This will be filled if there's no standard school available.
     */
    schoolName: Model.STRING,

    /**
     * @property timePeriod
     * The time period of this education. This DateRange is meant for holding months and years only.
     */
    timePeriod: DateRange,

    /**
     * @property degreeName
     * The degree earned at this education as entered by the member.
     */
    degreeName: Model.STRING,

    /**
     * @property degreeUrn
     * URN of the degree.
     */
    degreeUrn: DegreeUrn,

    /**
     * @property fieldOfStudy
     * The field of study that was studied in this education. (This may be replaced with a more complex FieldOfStudy schema pending response from the higher ed team).
     */
    fieldOfStudy: Model.STRING,

    /**
     * @property fieldOfStudyUrn
     * URN of the field of study.
     */
    fieldOfStudyUrn: FieldOfStudyUrn,

    /**
     * @property activities
     * The activities and societies that the member was involved with at this education.
     */
    activities: Model.STRING,

    /**
     * @property grade
     * The grade received at this education as entered by the member.
     */
    grade: Model.STRING,

    /**
     * @property description
     * The member's description of this education.
     */
    description: Model.STRING,

    modelType: "identity/profile/norm-education"
  }
}
