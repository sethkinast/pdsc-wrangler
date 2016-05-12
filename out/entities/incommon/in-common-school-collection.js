import Model from 'app/api/NotTerribleModel';
import InCommonSchool from "app/models/entities/incommon/in-common-school";
import PagingInfo from "app/models/entities/common/paging-info";

export default class InCommonSchoolCollection extends Model {
  static schema = {
    /**
     * @property items
     * A list of InCommonSchool.
     */
    items: InCommonSchool,

    /**
     * @property pagingInfo
     * The paging info for items.
     */
    pagingInfo: PagingInfo,

    modelType: "entities/incommon/in-common-school-collection"
  }
}
