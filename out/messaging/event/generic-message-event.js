import Model from 'app/api/NotTerribleModel';

export default class GenericMessageEvent extends Model {
  static schema = {
    /**
     * @property body
     * The body of the message
     */
    body: Model.STRING,

    modelType: "messaging/event/generic-message-event"
  }
}
