import Model from 'app/api/NotTerribleModel';
import SearchArticle from "app/models/search/search-article";

export default class SearchHistoryArticle extends Model {
  static schema = {
    /**
     * @property backendUrn
     * Backend Urn for article. This should be used only for tracking.
     */
    backendUrn: Model.foreignUrn('com.linkedin.common.ArticleUrn'),

    /**
     * @property article
     * Basic article information.
     */
    article: SearchArticle,

    modelType: "search/search-history-article"
  }
}
