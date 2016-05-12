import Model from 'app/api/NotTerribleModel';

export default class EnrichedLocationKey extends Model {
  static schema = {
    /**
     * @property countryCode
     * The country code of the enriched location being fetched
     */
    countryCode: Model.STRING,

    /**
     * @property postalCode
     * The postal code of the enriched location being fetched
     */
    postalCode: Model.STRING,

    modelType: "common/enriched-location-key"
  }
}
