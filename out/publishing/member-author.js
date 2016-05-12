import Model from 'app/api/NotTerribleModel';
import MiniProfile from "app/models/identity/shared/mini-profile";

export default class MemberAuthor extends Model {
  static schema = {
    /**
     * @property miniProfile
     * Mini profile of the author.
     */
    miniProfile: MiniProfile,

    /**
     * @property influencer
     * Whether the author is an influencer.
     */
    influencer: Model.BOOL,

    modelType: "publishing/member-author"
  }
}
