import Model from 'app/api/NotTerribleModel';
import MiniProfile from "app/models/identity/shared/mini-profile";
import MemberFollowingInfo from "app/models/entities/shared/member-following-info";
import Image from "app/models/common/image";
import SocialActivityCounts from "app/models/feed/shared/social-activity-counts";

export default class SearchArticle extends Model {
  static schema = {
    /**
     * @property backendUrn
     * Backend urn representing the content. This should be used only for tracking.
     */
    backendUrn: Model.foreignUrn('com.linkedin.common.ArticleUrn'),

    /**
     * @property title
     * Title of the article
     */
    title: Model.STRING,

    /**
     * @property url
     * URL for the full article.
     */
    url: Model.foreignUrn('com.linkedin.common.Url'),

    /**
     * @property authorName
     * Localized name of the article author. This could either be an individual's name or a 3rd party source e.g npr.org.
     */
    authorName: Model.STRING,

    /**
     * @property authorFollowersCount
     * The number of author's followers.
     */
    authorFollowersCount: Model.INT,

    /**
     * @property authorProfile
     * Profile of the author, if the author is a LinkedIn member.
     */
    authorProfile: MiniProfile,

    /**
     * @property authorFollowing
     * Whether the viewer is following the article author.
     */
    authorFollowing: MemberFollowingInfo,

    /**
     * @property image
     * Image to be displayed with the article.
     */
    image: Image,

    /**
     * @property snippet
     * Snippet of the article content.
     */
    snippet: Model.STRING,

    /**
     * @property postedAt
     * The UTC timestamp when the article posted.
     */
    postedAt: Model.foreignUrn('com.linkedin.common.Time'),

    /**
     * @property parentUrl
     * The parent part of article url. e.g. the parent url of 'www.linkedin.com/xxx' is 'www.linkedin.com'.
     */
    parentUrl: Model.STRING,

    /**
     * @property socialActivityInfo
     * Social activity information about this article, e.g. counts of comments, likes on it, and whether liked by the viewer.
     */
    socialActivityInfo: SocialActivityCounts,

    modelType: "search/search-article"
  }
}
