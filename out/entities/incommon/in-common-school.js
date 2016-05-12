import Model from 'app/api/NotTerribleModel';
import MiniSchool from "app/models/entities/shared/mini-school";
import MiniProfile from "app/models/identity/shared/mini-profile";
import MiniProfileWithDistance from "app/models/entities/shared/mini-profile-with-distance";

export default class InCommonSchool extends Model {
  static schema = {
    /**
     * @property miniSchool
     * The basic information about the school.
     */
    miniSchool: MiniSchool,

    /**
     * @property people
     * DEPRECATED: A list of people in common between the viewer's connections and the school's alumni.
     */
    people: MiniProfile,

    /**
     * @property peopleWithDistance
     * A list of people in common between the viewer's connections and the school's alumni.
     */
    peopleWithDistance: MiniProfileWithDistance,

    /**
     * @property total
     * The total number of people in common between the viewer's connections and the school's alumni.
     */
    total: Model.INT,

    modelType: "entities/incommon/in-common-school"
  }
}
