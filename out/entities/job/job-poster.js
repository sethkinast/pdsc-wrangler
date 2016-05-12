import Model from 'app/api/NotTerribleModel';
import EntitiesMiniProfile from "app/models/entities/shared/entities-mini-profile";
import MemberConnection from "app/models/identity/shared/member-connection";
import PagingInfo from "app/models/entities/common/paging-info";

export default class JobPoster extends Model {
  static schema = {
    /**
     * @property poster
     * The information of the job poster.
     */
    poster: EntitiesMiniProfile,

    /**
     * @property connections
     * List of in-common connections between the job poster and the viewer.
     */
    connections: MemberConnection,

    /**
     * @property pagingInfo
     * The paging info for in-common connections.
     */
    pagingInfo: PagingInfo,

    modelType: "entities/job/job-poster"
  }
}
