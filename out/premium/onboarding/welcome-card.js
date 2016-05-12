import Model from 'app/api/NotTerribleModel';

export default class WelcomeCard extends Model {
  static schema = {
    /**
     * @property productName
     * The name of the premium product.
     */
    productName: Model.STRING,

    /**
     * @property productDescription
     * The description about the premium product.
     */
    productDescription: Model.STRING,

    modelType: "premium/onboarding/welcome-card"
  }
}
