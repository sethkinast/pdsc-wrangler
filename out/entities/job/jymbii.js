import Model from 'app/api/NotTerribleModel';
import Base64EncodedTrackingId from "app/models/common/base64-encoded-tracking-id";
import JymbiiUpdate from "app/models/feed/shared/jymbii-update";

export default class Jymbii extends Model {
  static schema = {
    /**
     * @property sponsored
     * Is this jymbii update a sponsored update.
     */
    sponsored: Model.BOOL,

    /**
     * @property trackingId
     * A unique id which represents this particular instance of the job posting.
     */
    trackingId: Base64EncodedTrackingId,

    /**
     * @property objectUrn
     * Pointer to the backend object underlying this job posting.
     */
    objectUrn: Model.STRING,

    /**
     * @property jymbiiUpdate
     * Jobs You May Be Interested In Feed Update.
     */
    jymbiiUpdate: JymbiiUpdate,

    modelType: "entities/job/jymbii"
  }
}
