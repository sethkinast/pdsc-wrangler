import Model from 'app/api/NotTerribleModel';
import NormTestScore from "app/models/identity/profile/norm-test-score";

export default class TestScore extends Model {
  static schema = Object.assign({}, NormTestScore.schema, {
    modelType: "identity/profile/test-score"
  })
}
