import Model from 'app/api/NotTerribleModel';
import Alumnus from "app/models/entities/school/alumnus";
import PagingInfo from "app/models/entities/common/paging-info";

export default class NotableAlumni extends Model {
  static schema = {
    /**
     * @property alumni
     * A list of notable alumnus.
     */
    alumni: Alumnus,

    /**
     * @property pagingInfo
     * The paging info for alumni.
     */
    pagingInfo: PagingInfo,

    modelType: "entities/school/notable-alumni"
  }
}
