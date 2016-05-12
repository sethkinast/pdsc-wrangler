import Model from 'app/api/NotTerribleModel';
import JobSavingInfoUrn from "app/models/common/job-saving-info-urn";

export default class JobSavingInfo extends Model {
  static schema = {
    /**
     * @property entityUrn
     * Identifier for this JobSavingInfo.
     */
    entityUrn: JobSavingInfoUrn,

    /**
     * @property saved
     * Indicates whether the viewer saved this job.
     */
    saved: Model.BOOL,

    modelType: "entities/shared/job-saving-info"
  }
}
