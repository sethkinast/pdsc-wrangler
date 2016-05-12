import Model from 'app/api/NotTerribleModel';
import TestScoreUrn from "app/models/common/test-score-urn";

export default class NormTestScore extends Model {
  static schema = {
    /**
     * @property entityUrn
     * Identifier for this test score
     */
    entityUrn: TestScoreUrn,

    /**
     * @property name
     * Name of this test.
     */
    name: Model.STRING,

    /**
     * @property date
     * Date associated with this test.
     */
    date: Model.foreignUrn('com.linkedin.common.Date'),

    /**
     * @property score
     * Test score obtained for this test.
     */
    score: Model.STRING,

    /**
     * @property description
     * Description of this test or the score obtained.
     */
    description: Model.STRING,

    /**
     * @property occupation
     * Occupation this member had at time of this test.
     */
    occupation: Model.STRING,

    modelType: "identity/profile/norm-test-score"
  }
}
