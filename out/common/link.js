import Model from 'app/api/NotTerribleModel';

export default class Link extends Model {
  static schema = {
    /**
     * @property text
     * Text to be displayed for the link.
     */
    text: Model.STRING,

    /**
     * @property url
     * URL of the link.
     */
    url: Model.foreignUrn('com.linkedin.common.Url'),

    modelType: "common/link"
  }
}
