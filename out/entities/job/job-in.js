import Model from 'app/api/NotTerribleModel';
import JobInUrn from "app/models/common/job-in-urn";

export default class JobIn extends Model {
  static schema = {
    /**
     * @property entityUrn
     * Identifier for this JobIn.
     */
    entityUrn: JobInUrn,

    /**
     * @property viewerFromTopCompany
     * Flag denoting whether or not any of the viewer's companies rank among the top companies hired from.
     */
    viewerFromTopCompany: Model.BOOL,

    /**
     * @property viewerFromTopSchool
     * Flag denoting whether or not any of the viewer's schools rank among the top schools hired from.
     */
    viewerFromTopSchool: Model.BOOL,

    modelType: "entities/job/job-in"
  }
}
