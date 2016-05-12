import Model from 'app/api/NotTerribleModel';
import MiniProfile from "app/models/identity/shared/mini-profile";

export default class SearchCard extends Model {
  static schema = {
    /**
     * @property profiles
     * A list of search result profiles.
     */
    profiles: MiniProfile,

    /**
     * @property totalResult
     * The total amount of the search result.
     */
    totalResult: Model.INT,

    modelType: "premium/onboarding/search-card"
  }
}
