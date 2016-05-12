import Model from 'app/api/NotTerribleModel';
import FirstPartyArticle from "app/models/publishing/first-party-article";

export default class EditorFirstPartyArticle extends Model {
  static schema = {
    /**
     * @property firstPartyArticle
     * First party article that is being edited
     */
    firstPartyArticle: FirstPartyArticle,

    /**
     * @property createdAt
     * Time the article was created.
     */
    createdAt: Model.foreignUrn('com.linkedin.common.Time'),

    /**
     * @property updatedAt
     * Time the article was last updated.
     */
    updatedAt: Model.foreignUrn('com.linkedin.common.Time'),

    /**
     * @property version
     * The current version of the 1st party article. Only present when article is not published.
     */
    version: Model.INT,

    modelType: "publishing/editor-first-party-article"
  }
}
