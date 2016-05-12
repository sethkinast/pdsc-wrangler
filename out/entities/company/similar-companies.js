import Model from 'app/api/NotTerribleModel';
import NextCompany from "app/models/entities/company/next-company";
import PagingInfo from "app/models/entities/common/paging-info";

export default class SimilarCompanies extends Model {
  static schema = {
    /**
     * @property companies
     * A list of NextCompany which is a wrapper around MiniCompany with some extra information about the company.
     */
    companies: NextCompany,

    /**
     * @property pagingInfo
     * The paging info for companies.
     */
    pagingInfo: PagingInfo,

    modelType: "entities/company/similar-companies"
  }
}
