import Model from 'app/api/NotTerribleModel';

export default class ShareContentCreate extends Model {
  static schema = {
    /**
     * @property contentUrn
     * Urn for the shared content, e.g activity, article.
     */
    contentUrn: Model.STRING,

    modelType: "messaging/create/message/share-content-create"
  }
}
