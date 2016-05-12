import Model from 'app/api/NotTerribleModel';
import InCommonPerson from "app/models/entities/incommon/in-common-person";
import PagingInfo from "app/models/entities/common/paging-info";

export default class InCommonPersonCollection extends Model {
  static schema = {
    /**
     * @property items
     * A list of InCommonPerson.
     */
    items: InCommonPerson,

    /**
     * @property pagingInfo
     * The paging info for items.
     */
    pagingInfo: PagingInfo,

    modelType: "entities/incommon/in-common-person-collection"
  }
}
