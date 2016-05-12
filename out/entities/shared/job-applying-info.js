import Model from 'app/api/NotTerribleModel';
import JobApplyingInfoUrn from "app/models/common/job-applying-info-urn";

export default class JobApplyingInfo extends Model {
  static schema = {
    /**
     * @property entityUrn
     * Identifier for this JobApplyingInfo.
     */
    entityUrn: JobApplyingInfoUrn,

    /**
     * @property applied
     * Indicates whether the viewer applied for this job.
     */
    applied: Model.BOOL,

    /**
     * @property appliedTime
     * TODO: remove field. DEPRECATED - The application time for this job.
     */
    appliedTime: Model.foreignUrn('com.linkedin.common.Time'),

    /**
     * @property appliedAt
     * The application time for this job.
     */
    appliedAt: Model.foreignUrn('com.linkedin.common.Time'),

    modelType: "entities/shared/job-applying-info"
  }
}
