import Model from 'app/api/NotTerribleModel';
import StateUrn from "app/models/common/state-urn";

export default class State extends Model {
  static schema = {
    /**
     * @property entityUrn
     * Identifier for this state
     */
    entityUrn: StateUrn,

    /**
     * @property stateName
     * The name of this state.
     */
    stateName: Model.STRING,

    /**
     * @property stateCode
     * The geo place code of this state. ex. California's will be '7-1'
     */
    stateCode: Model.STRING,

    modelType: "common/state"
  }
}
