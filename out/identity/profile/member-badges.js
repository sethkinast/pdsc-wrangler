import Model from 'app/api/NotTerribleModel';
import MemberBadgesUrn from "app/models/common/member-badges-urn";

export default class MemberBadges extends Model {
  static schema = {
    /**
     * @property entityUrn
     * Unique identifier for the entity.
     */
    entityUrn: MemberBadgesUrn,

    /**
     * @property influencer
     * Flag telling whether or not the user is an influencer.
     */
    influencer: Model.BOOL,

    /**
     * @property jobSeeker
     * Flag telling whether or not the user is an Job Seeker.
     */
    jobSeeker: Model.BOOL,

    /**
     * @property premium
     * Flag telling whether or not the user has a premium account.
     */
    premium: Model.BOOL,

    /**
     * @property openLink
     * Flag telling whether or not the user is part of the Open Link network.
     */
    openLink: Model.BOOL,

    modelType: "identity/profile/member-badges"
  }
}
