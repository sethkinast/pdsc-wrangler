import Model from 'app/api/NotTerribleModel';
import StateUrn from "app/models/common/state-urn";

export default class TypeaheadState extends Model {
  static schema = {
    /**
     * @property id
     * The id of the state. e.g., us.ca for california
     */
    id: Model.STRING,

    /**
     * @property stateUrn
     * Urn representing the state.
     */
    stateUrn: StateUrn,

    modelType: "typeahead/typeahead-state"
  }
}
