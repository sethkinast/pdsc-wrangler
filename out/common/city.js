import Model from 'app/api/NotTerribleModel';
import CityUrn from "app/models/common/city-urn";

export default class City extends Model {
  static schema = {
    /**
     * @property entityUrn
     * Identifier for this city
     */
    entityUrn: CityUrn,

    /**
     * @property cityName
     * The name of this city.
     */
    cityName: Model.STRING,

    /**
     * @property cityCode
     * The place code of this city. ex. Mountain View, California's will be '7-1-0-43-12'
     */
    cityCode: Model.STRING,

    /**
     * @property centralizedPostalCode
     * The centralized postalCode of this city.
     */
    centralizedPostalCode: Model.STRING,

    modelType: "common/city"
  }
}
