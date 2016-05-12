import Model from 'app/api/NotTerribleModel';

export default class ConversationsMetadata extends Model {
  static schema = {
    /**
     * @property unreadCount
     * Total number of unread events for a member
     */
    unreadCount: Model.INT,

    modelType: "messaging/conversations-metadata"
  }
}
