import Model from 'app/api/NotTerribleModel';
import SearchHistoryTrendingResult from "app/models/search/search-history-trending-result";

export default class SearchHistoryTrendingResultContainer extends Model {
  static schema = {
    /**
     * @property trendingResults
     * List of trending Search Results
     */
    trendingResults: SearchHistoryTrendingResult,

    modelType: "search/search-history-trending-result-container"
  }
}
