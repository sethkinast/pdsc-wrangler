import Model from 'app/api/NotTerribleModel';
import FirstPartyArticleUrn from "app/models/common/first-party-article-urn";
import FirstPartyAuthor from "app/models/publishing/first-party-author";
import ArticleState from "app/models/publishing/article-state";
import CoverMedia from "app/models/publishing/cover-media";

export default class FirstPartyArticle extends Model {
  static schema = {
    /**
     * @property entityUrn
     * Identifier for this first party article
     */
    entityUrn: FirstPartyArticleUrn,

    /**
     * @property title
     * Title of the article.
     */
    title: Model.STRING,

    /**
     * @property authors
     * The author(s) of the article.
     */
    authors: FirstPartyAuthor,

    /**
     * @property state
     * The state of the 1st party article.
     */
    state: ArticleState,

    /**
     * @property permalink
     * Unique string used to compose the permalink of the 1st party article. Blank for articles that have never been published.
     */
    permalink: Model.STRING,

    /**
     * @property coverMedia
     * The cover media at the top of a 1st party article.
     */
    coverMedia: CoverMedia,

    /**
     * @property contentHtml
     * Full text of the content body with HTML markup. Possible to save but not publish an article with an empty body.
     */
    contentHtml: Model.STRING,

    /**
     * @property publishedAt
     * The date and time the article was published. Not present for articles that have never been published.
     */
    publishedAt: Model.foreignUrn('com.linkedin.common.Time'),

    modelType: "publishing/first-party-article"
  }
}
