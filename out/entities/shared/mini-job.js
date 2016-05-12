import Model from 'app/api/NotTerribleModel';
import TrackingObject from "app/models/common/tracking-object";
import MiniJobUrn from "app/models/common/mini-job-urn";
import Image from "app/models/common/image";

export default class MiniJob extends Model {
  static schema = Object.assign({}, TrackingObject.schema, {
    /**
     * @property entityUrn
     * Identifier for this mini job
     */
    entityUrn: MiniJobUrn,

    /**
     * @property title
     * This is the job title stored on the backend.
     */
    title: Model.STRING,

    /**
     * @property location
     * This is the location of the job specified when posted.
     */
    location: Model.STRING,

    /**
     * @property logo
     * This logo can be both company or a specific job logo which specified once this job posting was listed.
     */
    logo: Image,

    /**
     * @property listDate
     * TODO: remove field. DEPRECATED - This date indicates when the job's status changed to LISTED.
     */
    listDate: Model.foreignUrn('com.linkedin.common.Time'),

    /**
     * @property listedAt
     * This date indicates when the job's status changed to LISTED.
     */
    listedAt: Model.foreignUrn('com.linkedin.common.Time'),

    modelType: "entities/shared/mini-job"
  })
}
