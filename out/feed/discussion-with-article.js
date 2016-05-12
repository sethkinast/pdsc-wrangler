import Model from 'app/api/NotTerribleModel';
import DiscussionBase from "app/models/feed/discussion-base";
import Image from "app/models/common/image";

export default class DiscussionWithArticle extends Model {
  static schema = Object.assign({}, DiscussionBase.schema, {
    /**
     * @property contentId
     * The id of the content. Note this is a legacy format in this form: 54a3ba589ec02001:ARTC_8302773461016502828
     */
    contentId: Model.STRING,

    /**
     * @property contentUrl
     * The the url for the content.
     */
    contentUrl: Model.foreignUrn('com.linkedin.common.Url'),

    /**
     * @property contentTitle
     * The title of the content.
     */
    contentTitle: Model.STRING,

    /**
     * @property contentSource
     * The source of the content. (usually the source domain)
     */
    contentSource: Model.STRING,

    /**
     * @property contentDescription
     * The description for the content.
     */
    contentDescription: Model.STRING,

    /**
     * @property contentImage
     * The image for the content.
     */
    contentImage: Image,

    /**
     * @property contentUrn
     * The urn of the content. This is expected to be deco-resolvable to an IngestedContentSummary
     */
    contentUrn: Model.foreignUrn('com.linkedin.common.IngestedContentUrn'),

    modelType: "feed/discussion-with-article"
  })
}
