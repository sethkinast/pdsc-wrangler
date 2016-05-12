import Model from 'app/api/NotTerribleModel';
import AnnotatedText from "app/models/feed/shared/annotated-text";
import Image from "app/models/common/image";
import CompanyActor from "app/models/feed/company-actor";
import ExternalAuthor from "app/models/feed/external-author";
import InfluencerActor from "app/models/feed/influencer-actor";
import MemberActor from "app/models/feed/member-actor";

export default class ShareArticle extends Model {
  static schema = {
    /**
     * @property urn
     * Backend Urn for this update.
     */
    urn: Model.STRING,

    /**
     * @property title
     * Title of the article.
     */
    title: Model.STRING,

    /**
     * @property subtitle
     * subtitle of the article (usually the source).
     */
    subtitle: Model.STRING,

    /**
     * @property description
     * description of the article (usually a snippet of its content). Should pass in on creation even if not used on mobile clients - it will appear on the desktop view
     */
    description: Model.STRING,

    /**
     * @property url
     * Url for the article.
     */
    url: Model.foreignUrn('com.linkedin.common.Url'),

    /**
     * @property resolvedUrl
     * resolved url for the article if this article was a bit.ly or some other url shortener link. If not, this is the original url. Optional for now while the client migrates to using this and populating in the create case.
     */
    resolvedUrl: Model.foreignUrn('com.linkedin.common.Url'),

    /**
     * @property text
     * The share commentary
     */
    text: AnnotatedText,

    /**
     * @property image
     * Image of the document
     */
    image: Image,

    /**
     * @property articleType
     * The type of share article.
     */
    articleType: Model.STRING,

    /**
     * @property publisher
     * Publisher of the article if known.
     */
    publisher: CompanyActor,

    /**
     * @property author
     * Author of the article if known.
     */
    author: Model.oneOf(ExternalAuthor, InfluencerActor, MemberActor),

    modelType: "feed/share-article"
  }
}
