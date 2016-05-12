import Model from 'app/api/NotTerribleModel';
import MiniProfile from "app/models/identity/shared/mini-profile";

export default class SameNameProfileResult extends Model {
  static schema = {
    /**
     * @property education
     * An array of entities that represent an education within a member's profile.
     */
    education: Model.STRING,

    /**
     * @property industry
     * Work industry of the member.
     */
    industry: Model.STRING,

    /**
     * @property location
     * Location or region in which the member works.
     */
    location: Model.STRING,

    /**
     * @property miniProfile
     * MiniProfile data about this profile.
     */
    miniProfile: MiniProfile,

    /**
     * @property currentPositions
     * An array of entities that represent current member position information.
     */
    currentPositions: Model.STRING,

    /**
     * @property pastPositions
     * An array of entities that represent past member position information.
     */
    pastPositions: Model.STRING,

    /**
     * @property summary
     * Summary provided by the member.
     */
    summary: Model.STRING,

    modelType: "growth/seo/same-name-profile-result"
  }
}
