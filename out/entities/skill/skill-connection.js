import Model from 'app/api/NotTerribleModel';
import MiniProfileWithDistance from "app/models/entities/shared/mini-profile-with-distance";

export default class SkillConnection extends Model {
  static schema = {
    /**
     * @property miniProfileWithDistance
     * mini profile of the connection and the connection degree with the member.
     */
    miniProfileWithDistance: MiniProfileWithDistance,

    modelType: "entities/skill/skill-connection"
  }
}
