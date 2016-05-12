import Model from 'app/api/NotTerribleModel';

export default class RichText extends Model {
  static schema = {
    /**
     * @property embedHtml
     * The html embed for this Rich Text.
     */
    embedHtml: Model.STRING,

    /**
     * @property url
     * The URL for this Rich Text.
     */
    url: Model.foreignUrn('com.linkedin.common.Url'),

    /**
     * @property width
     * width of Rich Text
     */
    width: Model.INT,

    /**
     * @property height
     * height of Rich Text
     */
    height: Model.INT,

    /**
     * @property externalUrl
     * URL of the item on the external site if stored externally.
     */
    externalUrl: Model.foreignUrn('com.linkedin.common.Url'),

    /**
     * @property externalId
     * URN of the item on the external site if stored externally.
     */
    externalId: Model.STRING,

    modelType: "identity/profile/treasury/rich-text"
  }
}
