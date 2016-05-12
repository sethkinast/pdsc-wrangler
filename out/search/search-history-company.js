import Model from 'app/api/NotTerribleModel';
import MiniCompany from "app/models/entities/shared/mini-company";

export default class SearchHistoryCompany extends Model {
  static schema = {
    /**
     * @property backendUrn
     * Backend Urn for company. This should be used only for tracking.
     */
    backendUrn: Model.foreignUrn('com.linkedin.common.CompanyUrn'),

    /**
     * @property company
     * Basic company information.
     */
    company: MiniCompany,

    modelType: "search/search-history-company"
  }
}
