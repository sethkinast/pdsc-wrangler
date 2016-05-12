import Model from 'app/api/NotTerribleModel';
import DiscussionBase from "app/models/feed/discussion-base";
import Image from "app/models/common/image";

export default class DiscussionWithImage extends Model {
  static schema = Object.assign({}, DiscussionBase.schema, {
    /**
     * @property contentId
     * The id of the content.
     */
    contentId: Model.STRING,

    /**
     * @property contentUrl
     * The the url for the content.
     */
    contentUrl: Model.foreignUrn('com.linkedin.common.Url'),

    /**
     * @property contentImage
     * The image for the content.
     */
    contentImage: Image,

    modelType: "feed/discussion-with-image"
  })
}
