import Model from 'app/api/NotTerribleModel';
import ActorMiniProfile from "app/models/identity/me/actor-mini-profile";
import Occupation from "app/models/identity/me/occupation";

export default class FullProfileViewer extends Model {
  static schema = {
    /**
     * @property profile
     * Profile information about the viewer.
     */
    profile: ActorMiniProfile,

    /**
     * @property occupation
     * Viewer's occupation for use in the card headline.
     */
    occupation: Occupation,

    modelType: "identity/me/full-profile-viewer"
  }
}
