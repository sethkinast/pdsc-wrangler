import Model from 'app/api/NotTerribleModel';
import MiniCompanyUrn from "app/models/common/mini-company-urn";
import SearchHistoryProfile from "app/models/search/search-history-profile";
import SearchHistoryJob from "app/models/search/search-history-job";
import SearchHistoryCompany from "app/models/search/search-history-company";
import SearchHistoryGroup from "app/models/search/search-history-group";
import SearchHistorySchool from "app/models/search/search-history-school";
import SearchHistoryArticle from "app/models/search/search-history-article";

export default class SearchHistoryTrendingResult extends Model {
  static schema = {
    /**
     * @property context
     * Context details as to why the trending result is being shown. E.g 'articles about microsoft, a company similar to yours'
     */
    context: Model.foreignUrn('com.linkedin.pemberly.text.AttributedText'),

    /**
     * @property contextEntity
     * Entity URN for the context object. e.g miniCompanyUrn for company microsoft.
     */
    contextEntity: MiniCompanyUrn,

    /**
     * @property result
     * Contains detailed information about the trending result.
     */
    result: Model.oneOf(SearchHistoryProfile, SearchHistoryJob, SearchHistoryCompany, SearchHistoryGroup, SearchHistorySchool, SearchHistoryArticle),

    modelType: "search/search-history-trending-result"
  }
}
