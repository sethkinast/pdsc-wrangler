import Model from 'app/api/NotTerribleModel';
import AlumniCompany from "app/models/entities/school/alumni-company";
import PagingInfo from "app/models/entities/common/paging-info";

export default class AlumniCompaniesCollection extends Model {
  static schema = {
    /**
     * @property items
     * A list of alumni company.
     */
    items: AlumniCompany,

    /**
     * @property pagingInfo
     * The paging info for items.
     */
    pagingInfo: PagingInfo,

    modelType: "entities/school/alumni-companies-collection"
  }
}
