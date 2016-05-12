import Model from 'app/api/NotTerribleModel';
import Email from "app/models/growth/abi/email";
import PhoneNumber from "app/models/growth/abi/phone-number";
import Address from "app/models/growth/abi/address";
import Site from "app/models/growth/abi/site";

export default class RawContact extends Model {
  static schema = {
    /**
     * @property fullName
     * Full name of the contact.
     */
    fullName: Model.STRING,

    /**
     * @property firstName
     * First name of the contact.
     */
    firstName: Model.STRING,

    /**
     * @property lastName
     * Last name of the contact.
     */
    lastName: Model.STRING,

    /**
     * @property middleName
     * Middle name of the contact.
     */
    middleName: Model.STRING,

    /**
     * @property title
     * Title of the contact.
     */
    title: Model.STRING,

    /**
     * @property emails
     * Email addresses of the contact.
     */
    emails: Email,

    /**
     * @property phoneNumbers
     * Phone Numbers of the contact.
     */
    phoneNumbers: PhoneNumber,

    /**
     * @property instantMessageHandles
     * List of instant message handles for the contact.
     */
    instantMessageHandles: Model.foreignUrn('com.linkedin.common.IM'),

    /**
     * @property addresses
     * List of addresses of the contact.
     */
    addresses: Address,

    /**
     * @property bornOn
     * Birthday of the contact.
     */
    bornOn: Model.foreignUrn('com.linkedin.common.Date'),

    /**
     * @property sites
     * Websites associated with the contact.
     */
    sites: Site,

    /**
     * @property bookmarked
     * Indicates if the contact is bookmarked.
     */
    bookmarked: Model.BOOL,

    /**
     * @property notes
     * ***DEPRECATED*** Notes about the contact.
     */
    notes: Model.STRING,

    modelType: "growth/abi/raw-contact"
  }
}
