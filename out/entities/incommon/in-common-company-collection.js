import Model from 'app/api/NotTerribleModel';
import InCommonCompany from "app/models/entities/incommon/in-common-company";
import PagingInfo from "app/models/entities/common/paging-info";

export default class InCommonCompanyCollection extends Model {
  static schema = {
    /**
     * @property items
     * A list of InCommonCompany.
     */
    items: InCommonCompany,

    /**
     * @property pagingInfo
     * The paging info for items.
     */
    pagingInfo: PagingInfo,

    modelType: "entities/incommon/in-common-company-collection"
  }
}
