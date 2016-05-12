import Model from 'app/api/NotTerribleModel';
import SchoolRanking from "app/models/entities/school/school-ranking";
import PagingInfo from "app/models/entities/common/paging-info";

export default class SchoolRankings extends Model {
  static schema = {
    /**
     * @property rankings
     * A list of school's ranking.
     */
    rankings: SchoolRanking,

    /**
     * @property pagingInfo
     * The paging info for rankings.
     */
    pagingInfo: PagingInfo,

    modelType: "entities/school/school-rankings"
  }
}
