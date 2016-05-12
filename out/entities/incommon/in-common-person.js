import Model from 'app/api/NotTerribleModel';
import MiniProfileWithDistance from "app/models/entities/shared/mini-profile-with-distance";
import MiniProfile from "app/models/identity/shared/mini-profile";

export default class InCommonPerson extends Model {
  static schema = {
    /**
     * @property member
     * The mini profile with distance information for a target member.
     */
    member: MiniProfileWithDistance,

    /**
     * @property people
     * A list of people who have the target member in common.
     */
    people: MiniProfile,

    /**
     * @property total
     * The total number of people in common.
     */
    total: Model.INT,

    modelType: "entities/incommon/in-common-person"
  }
}
