import Model from 'app/api/NotTerribleModel';
import SearchType from "app/models/search/search-type";
import SearchHistoryProfile from "app/models/search/search-history-profile";
import SearchHistoryJob from "app/models/search/search-history-job";
import SearchHistoryCompany from "app/models/search/search-history-company";
import SearchHistoryGroup from "app/models/search/search-history-group";
import SearchHistorySchool from "app/models/search/search-history-school";
import SearchQuery from "app/models/search/search-query";
import EntityAwareSearchQuery from "app/models/search/entity-aware-search-query";
import SearchHistoryTrendingResultContainer from "app/models/search/search-history-trending-result-container";

export default class SearchHistory extends Model {
  static schema = {
    /**
     * @property displayText
     * Text to be displayed for the search history activity. eg entity name or search query.
     */
    displayText: Model.STRING,

    /**
     * @property subtext
     * The subtext to be displayed under the display text.  e.g. this would be additional member info, or search suggestion info.
     */
    subtext: Model.STRING,

    /**
     * @property searchType
     * Type of entity viewed from search or vertical in which the the search was performed.
     */
    searchType: SearchType,

    /**
     * @property historyInfo
     * Contains information about entity viewed or search performed.
     */
    historyInfo: Model.oneOf(SearchHistoryProfile, SearchHistoryJob, SearchHistoryCompany, SearchHistoryGroup, SearchHistorySchool, SearchQuery, EntityAwareSearchQuery, SearchHistoryTrendingResultContainer),

    modelType: "search/search-history"
  }
}
