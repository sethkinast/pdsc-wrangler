import Model from 'app/api/NotTerribleModel';
import VolunteerCause from "app/models/identity/volunteer-cause";

export default class LocalizedVolunteerCause extends Model {
  static schema = {
    /**
     * @property cause
     * Type of volunteer cause.
     */
    cause: VolunteerCause,

    /**
     * @property displayName
     * Localized cause name for display.
     */
    displayName: Model.STRING,

    modelType: "identity/localized-volunteer-cause"
  }
}
