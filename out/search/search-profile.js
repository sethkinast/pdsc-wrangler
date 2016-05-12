import Model from 'app/api/NotTerribleModel';
import MiniProfile from "app/models/identity/shared/mini-profile";
import MemberDistance from "app/models/common/member-distance";
import Snippet from "app/models/search/snippet";

export default class SearchProfile extends Model {
  static schema = {
    /**
     * @property miniProfile
     * Basic profile information.
     */
    miniProfile: MiniProfile,

    /**
     * @property id
     * The id of the profile. This field will be deprecated. Use miniProfileUrn instead.
     */
    id: Model.STRING,

    /**
     * @property backendUrn
     * Backend urn representing the member's profile. Contains the member's id. This should be used only for tracking.
     */
    backendUrn: Model.foreignUrn('com.linkedin.common.MemberUrn'),

    /**
     * @property distance
     * distance to member
     */
    distance: MemberDistance,

    /**
     * @property maidenName
     * Maiden name of a member
     */
    maidenName: Model.STRING,

    /**
     * @property industry
     * Industry provided by the member.
     */
    industry: Model.STRING,

    /**
     * @property location
     * Location of a member
     */
    location: Model.STRING,

    /**
     * @property snippets
     * Snippets of matching information on member's profile
     */
    snippets: Snippet,

    /**
     * @property sharedConnectionCount
     * Number of shared connections between this member and the viewer
     */
    sharedConnectionCount: Model.INT,

    /**
     * @property headless
     * Flag to determine if the profile is headless. A member profile is marked as headless if it is out of network and has no shared groups.
     */
    headless: Model.BOOL,

    modelType: "search/search-profile"
  }
}
