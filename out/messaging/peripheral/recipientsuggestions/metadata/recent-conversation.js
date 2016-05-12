import Model from 'app/api/NotTerribleModel';
import MessagingProfile from "app/models/messaging/messaging-profile";

export default class RecentConversation extends Model {
  static schema = {
    /**
     * @property profile
     * The MessagingProfile object of the suggested recipient.
     */
    profile: MessagingProfile,

    /**
     * @property lastMessagedAt
     * Timestamp of the last message timestamp with the suggested recipient.
     */
    lastMessagedAt: Model.foreignUrn('com.linkedin.common.Time'),

    modelType: "messaging/peripheral/recipientsuggestions/metadata/recent-conversation"
  }
}
