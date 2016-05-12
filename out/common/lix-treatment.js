import Model from 'app/api/NotTerribleModel';

export default class LixTreatment extends Model {
  static schema = {
    /**
     * @property testKey
     * Lix test key
     */
    testKey: Model.STRING,

    /**
     * @property treatment
     * The treatment for the current logged in member
     */
    treatment: Model.STRING,

    modelType: "common/lix-treatment"
  }
}
