import Model from 'app/api/NotTerribleModel';
import CoreSkill from "app/models/identity/profile/core-skill";

export default class SuggestedSkill extends Model {
  static schema = Object.assign({}, CoreSkill.schema, {
    /**
     * @property trackingId
     * Id used for tracking impression & actions (accept / dismiss) on the SuggestedSkill.
     */
    trackingId: Model.STRING,

    modelType: "identity/profile/suggested-skill"
  })
}
