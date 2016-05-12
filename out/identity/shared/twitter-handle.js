import Model from 'app/api/NotTerribleModel';

export default class TwitterHandle extends Model {
  static schema = {
    /**
     * @property name
     * The Twitter username
     */
    name: Model.STRING,

    /**
     * @property credentialId
     * LinkedIn id for the Twitter account, used when creating a share
     */
    credentialId: Model.STRING,

    modelType: "identity/shared/twitter-handle"
  }
}
