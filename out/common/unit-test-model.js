import Model from 'app/api/NotTerribleModel';
import MiniProfileUrn from "app/models/common/mini-profile-urn";

export default class UnitTestModel extends Model {
  static schema = {
    /**
     * @property stringField
     * DO NOT USE - TEST MODEL.
     */
    stringField: Model.STRING,

    /**
     * @property entityUrn
     * DO NOT USE - TEST MODEL.
     */
    entityUrn: MiniProfileUrn,

    modelType: "common/unit-test-model"
  }
}
