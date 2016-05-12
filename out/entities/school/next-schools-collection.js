import Model from 'app/api/NotTerribleModel';
import NextSchool from "app/models/entities/school/next-school";
import PagingInfo from "app/models/entities/common/paging-info";

export default class NextSchoolsCollection extends Model {
  static schema = {
    /**
     * @property items
     * A list of similar schools.
     */
    items: NextSchool,

    /**
     * @property pagingInfo
     * The paging info for items.
     */
    pagingInfo: PagingInfo,

    modelType: "entities/school/next-schools-collection"
  }
}
