import Model from 'app/api/NotTerribleModel';
import ControlActions from "app/models/feed/control-actions";
import CompanyActor from "app/models/feed/company-actor";
import ExternalCompany from "app/models/feed/shared/external-company";
import MiniJob from "app/models/entities/shared/mini-job";
import EntitiesFlavor from "app/models/entities/shared/entities-flavor";

export default class JymbiiUpdate extends Model {
  static schema = Object.assign({}, ControlActions.schema, {
    /**
     * @property urn
     * Backend URN for this update.
     */
    urn: Model.STRING,

    /**
     * @property company
     * A union of CompanyActor (for a LinkedIn company) and ExternalCompany (for a company not on LinkedIn).
     */
    company: Model.oneOf(CompanyActor, ExternalCompany),

    /**
     * @property createdAt
     * The created time of the update, in milliseconds since epoch.
     */
    createdAt: Model.foreignUrn('com.linkedin.common.Time'),

    /**
     * @property miniJob
     * Mini Job of this job share.
     */
    miniJob: MiniJob,

    /**
     * @property jobUrl
     * URL for the job. To be used for re-sharing this Job.
     */
    jobUrl: Model.foreignUrn('com.linkedin.common.Url'),

    /**
     * @property flavors
     * Array of flavors/insights for this jymbii update.
     */
    flavors: EntitiesFlavor,

    modelType: "feed/shared/jymbii-update"
  })
}
