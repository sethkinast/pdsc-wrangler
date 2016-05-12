import Model from 'app/api/NotTerribleModel';

export default class Address extends Model {
  static schema = {
    /**
     * @property type
     * User entered type such as Home or Work.
     */
    type: Model.STRING,

    /**
     * @property rawAddress
     * Raw address of the contact in case its only available unformatted.
     */
    rawAddress: Model.STRING,

    /**
     * @property address1
     * First part of this address.
     */
    address1: Model.STRING,

    /**
     * @property address2
     * Second part of this address.
     */
    address2: Model.STRING,

    /**
     * @property city
     * City this address belongs to.
     */
    city: Model.STRING,

    /**
     * @property state
     * State this address belongs to.
     */
    state: Model.STRING,

    /**
     * @property postalCode
     * Postal code or zip code of this address. In the USA postal code is also referred to as zipcode.
     */
    postalCode: Model.STRING,

    /**
     * @property country
     * Country this address belongs to.
     */
    country: Model.STRING,

    /**
     * @property primary
     * Indicates if this address primary or not.
     */
    primary: Model.BOOL,

    modelType: "growth/abi/address"
  }
}
