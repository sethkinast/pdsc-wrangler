import Model from 'app/api/NotTerribleModel';
import SearchProfile from "app/models/search/search-profile";
import SearchJob from "app/models/search/search-job";
import SearchCompany from "app/models/search/search-company";
import SearchSchool from "app/models/search/search-school";
import SearchGroup from "app/models/search/search-group";
import SearchArticle from "app/models/search/search-article";
import SecondaryResultContainer from "app/models/search/secondary-result-container";
import FacetSuggestion from "app/models/search/facet-suggestion";
import Update from "app/models/feed/update";

export default class SearchHit extends Model {
  static schema = {
    /**
     * @property hitInfo
     * Search hit details specific to its type
     */
    hitInfo: Model.oneOf(SearchProfile, SearchJob, SearchCompany, SearchSchool, SearchGroup, SearchArticle, SecondaryResultContainer, FacetSuggestion, Update),

    modelType: "search/search-hit"
  }
}
