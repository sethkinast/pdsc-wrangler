import Model from 'app/api/NotTerribleModel';
import ArticleState from "app/models/publishing/article-state";
import CoverMedia from "app/models/publishing/cover-media";

export default class NormFirstPartyArticle extends Model {
  static schema = {
    /**
     * @property authors
     * The authors of the post. First author will be the primary author of the 1st party article.
     */
    authors: Model.foreignUrn('com.linkedin.common.MemberUrn'),

    /**
     * @property state
     * State of the 1st party article.
     */
    state: ArticleState,

    /**
     * @property title
     * Title of the post. Possible to save but not publish an article with a blank title.
     */
    title: Model.STRING,

    /**
     * @property contentHtml
     * Full text of the content body with HTML markup. Possible to save but not publish an article with an empty body.
     */
    contentHtml: Model.STRING,

    /**
     * @property version
     * Preceding version number of the 1st party article that we're updating from. This is zero-indexed.
     */
    version: Model.INT,

    /**
     * @property coverMedia
     * Optional cover media to display at the top of the 1st party article.
     */
    coverMedia: CoverMedia,

    /**
     * @property customPublishMessage
     * Optional custom publish message to be shared on feed to connections, which could contain member mentions. Only evaluated if the article is being published.
     */
    customPublishMessage: Model.foreignUrn('com.linkedin.pemberly.text.AttributedText'),

    modelType: "publishing/norm-first-party-article"
  }
}
