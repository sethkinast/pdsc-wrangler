import Model from 'app/api/NotTerribleModel';

export default class SSUCreativeVariables extends Model {
  static schema = {
    /**
     * @property activity
     * URN of the sponsored activity
     */
    activity: Model.STRING,

    /**
     * @property darkPost
     * Whether or not the creative is a dark post
     */
    darkPost: Model.BOOL,

    modelType: "identity/creatives/s-s-u-creative-variables"
  }
}
