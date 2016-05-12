import Model from 'app/api/NotTerribleModel';
import OccupationType from "app/models/identity/me/occupation-type";

export default class Occupation extends Model {
  static schema = {
    /**
     * @property type
     * The type of occupation.
     */
    type: OccupationType,

    /**
     * @property entityName
     * Localized name of a company a member works at or a school a member attends.
     */
    entityName: Model.STRING,

    modelType: "identity/me/occupation"
  }
}
