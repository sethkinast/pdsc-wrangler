import Model from 'app/api/NotTerribleModel';
import PropActionType from "app/models/relationships/shared/prop/prop-action-type";

export default class PropAction extends Model {
  static schema = {
    /**
     * @property type
     * Type of the action. Client will have different logic associated with every type we support
     */
    type: PropActionType,

    /**
     * @property displayText
     * Text to be displayed for this action
     */
    displayText: Model.STRING,

    /**
     * @property prefilledMessage
     * Pre-filled message for the action
     */
    prefilledMessage: Model.STRING,

    modelType: "relationships/shared/prop/prop-action"
  }
}
