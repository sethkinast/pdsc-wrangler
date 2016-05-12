import Model from 'app/api/NotTerribleModel';
import AnnotatedText from "app/models/feed/shared/annotated-text";
import Image from "app/models/common/image";

export default class ShareVideo extends Model {
  static schema = {
    /**
     * @property urn
     * Backend URN for this update.
     */
    urn: Model.STRING,

    /**
     * @property title
     * Title of the video.
     */
    title: Model.STRING,

    /**
     * @property subtitle
     * subtitle of the video (usually the source).
     */
    subtitle: Model.STRING,

    /**
     * @property description
     * description of the video (usually a snippet of its content). Should pass in on creation even if not used on mobile clients - it will appear on the desktop view
     */
    description: Model.STRING,

    /**
     * @property url
     * Url for the video.
     */
    url: Model.foreignUrn('com.linkedin.common.Url'),

    /**
     * @property text
     * The share commentary
     */
    text: AnnotatedText,

    /**
     * @property image
     * Image of the video
     */
    image: Image,

    modelType: "feed/share-video"
  }
}
