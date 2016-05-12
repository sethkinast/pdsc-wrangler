import Model from 'app/api/NotTerribleModel';

export default class ShareCreate extends Model {
  static schema = {
    /**
     * @property share
     * Shared content in the message
     */
    share: Model.STRING,

    modelType: "messaging/create/message/share-create"
  }
}
