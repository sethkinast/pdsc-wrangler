import Model from 'app/api/NotTerribleModel';

export default class LaunchCard extends Model {
  static schema = {
    /**
     * @property productName
     * The name of the premium product.
     */
    productName: Model.STRING,

    modelType: "premium/onboarding/launch-card"
  }
}
