import Model from 'app/api/NotTerribleModel';
import SuggestedRecipientListType from "app/models/messaging/peripheral/recipientsuggestions/suggested-recipient-list-type";
import SuggestedRecipient from "app/models/messaging/peripheral/recipientsuggestions/suggested-recipient";

export default class SuggestedRecipientList extends Model {
  static schema = {
    /**
     * @property type
     * Type of the suggested recipient list.
     */
    type: SuggestedRecipientListType,

    /**
     * @property suggestedRecipients
     * Array of suggested recipients.
     */
    suggestedRecipients: SuggestedRecipient,

    modelType: "messaging/peripheral/recipientsuggestions/suggested-recipient-list"
  }
}
