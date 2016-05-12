import Model from 'app/api/NotTerribleModel';

export default class Link extends Model {
  static schema = {
    /**
     * @property url
     * The URL for this link.
     */
    url: Model.foreignUrn('com.linkedin.common.Url'),

    /**
     * @property html
     * The html embed code for this link, e.g. blogpost
     */
    html: Model.STRING,

    /**
     * @property width
     * The width for html embed code block.
     */
    width: Model.INT,

    /**
     * @property height
     * The height for html embed block
     */
    height: Model.INT,

    modelType: "identity/profile/treasury/link"
  }
}
