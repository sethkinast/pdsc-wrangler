import Model from 'app/api/NotTerribleModel';

export default class Place extends Model {
  static schema = {
    /**
     * @property name
     * The name of the state or city
     */
    name: Model.STRING,

    /**
     * @property postalCode
     * The postal code of the location, used only when representing a city
     */
    postalCode: Model.STRING,

    /**
     * @property placeCode
     * The place code of the state or city
     */
    placeCode: Model.STRING,

    modelType: "identity/profile/place"
  }
}
