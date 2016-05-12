import Model from 'app/api/NotTerribleModel';

export default class EnrichedLocation extends Model {
  static schema = {
    /**
     * @property cityCode
     * The city place code of the location, ex. Mountain View, California's will be '7-1-0-43-12'
     */
    cityCode: Model.STRING,

    /**
     * @property cityName
     * The city name of the location, ex. Mountain View, California's will be 'Mountain View, California' in en_US locale.
     */
    cityName: Model.STRING,

    /**
     * @property regionCode
     * The region code of the location, ex. Mountain View, California's will be '84'
     */
    regionCode: Model.STRING,

    /**
     * @property regionName
     * The region name of the location, ex. Mountain View, California's will be 'San Francisco Bay Area' in en_US locale.
     */
    regionName: Model.STRING,

    modelType: "common/enriched-location"
  }
}
