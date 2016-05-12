import Model from 'app/api/NotTerribleModel';

export default class SchoolRanking extends Model {
  static schema = {
    /**
     * @property category
     * Category representing a major or field of study (e.g. Design, Engineering, etc.).
     */
    category: Model.STRING,

    /**
     * @property ranking
     * Ranking of the school in the particular category.
     */
    ranking: Model.INT,

    /**
     * @property degreeLevel
     * The degree level to which the ranking applies (e.g. Undergraduate, MBA, etc).
     */
    degreeLevel: Model.STRING,

    modelType: "entities/school/school-ranking"
  }
}
