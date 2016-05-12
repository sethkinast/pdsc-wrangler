import Model from 'app/api/NotTerribleModel';
import BasicCompanyInfo from "app/models/entities/company/basic-company-info";
import PagingInfo from "app/models/entities/common/paging-info";

export default class Showcases extends Model {
  static schema = {
    /**
     * @property showcases
     * List of showcase (brand) pages related to this company.
     */
    showcases: BasicCompanyInfo,

    /**
     * @property pagingInfo
     * The paging info for companies.
     */
    pagingInfo: PagingInfo,

    modelType: "entities/company/showcases"
  }
}
