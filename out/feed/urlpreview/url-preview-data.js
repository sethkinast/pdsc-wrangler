import Model from 'app/api/NotTerribleModel';
import PreviewImage from "app/models/feed/urlpreview/preview-image";

export default class UrlPreviewData extends Model {
  static schema = {
    /**
     * @property id
     * The type-specific id of the entity.
     */
    id: Model.STRING,

    /**
     * @property type
     * The type of the entity.
     */
    type: Model.STRING,

    /**
     * @property urn
     * Backend URN for this article.
     */
    urn: Model.STRING,

    /**
     * @property previewImages
     * Preview images for this url.
     */
    previewImages: PreviewImage,

    /**
     * @property url
     * url for the article.
     */
    url: Model.foreignUrn('com.linkedin.common.Url'),

    /**
     * @property resolvedUrl
     * resolved url for the article.
     */
    resolvedUrl: Model.foreignUrn('com.linkedin.common.Url'),

    /**
     * @property title
     * Title of the article
     */
    title: Model.STRING,

    /**
     * @property description
     * A description for the article
     */
    description: Model.STRING,

    /**
     * @property source
     * Source website
     */
    source: Model.STRING,

    modelType: "feed/urlpreview/url-preview-data"
  }
}
