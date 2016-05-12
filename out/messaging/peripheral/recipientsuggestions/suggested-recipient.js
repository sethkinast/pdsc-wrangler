import Model from 'app/api/NotTerribleModel';
import RecentConversation from "app/models/messaging/peripheral/recipientsuggestions/metadata/recent-conversation";

export default class SuggestedRecipient extends Model {
  static schema = {
    /**
     * @property text
     * Title of this suggested recipient.
     */
    text: Model.STRING,

    /**
     * @property subtext
     * Sub title of this suggested recipient.
     */
    subtext: Model.STRING,

    /**
     * @property metadata
     * Metadata of this suggested recipient.
     */
    metadata: RecentConversation,

    modelType: "messaging/peripheral/recipientsuggestions/suggested-recipient"
  }
}
