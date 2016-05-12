import Model from 'app/api/NotTerribleModel';
import IconType from "app/models/identity/me/icon-type";
import SuggestedAction from "app/models/identity/me/suggested-action";

export default class SuggestedActionCard extends Model {
  static schema = {
    /**
     * @property icon
     * Icon to display on the card.
     */
    icon: IconType,

    /**
     * @property title
     * Title of suggested action.
     */
    title: Model.STRING,

    /**
     * @property body
     * Text describing suggested action.
     */
    body: Model.STRING,

    /**
     * @property cta
     * Text describing the call to action.
     */
    cta: Model.STRING,

    /**
     * @property action
     * Action suggested by the card.
     */
    action: SuggestedAction,

    /**
     * @property legoTrackingToken
     * Lego tracking token id, used for tracking user actions performed on displayed widgets.
     */
    legoTrackingToken: Model.STRING,

    modelType: "identity/me/suggested-action-card"
  }
}
