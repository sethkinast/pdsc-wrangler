import Model from 'app/api/NotTerribleModel';
import RawContact from "app/models/growth/abi/raw-contact";

export default class ContactsUploadContactsRequest extends Model {
  static schema = {
    /**
     * @property rawContacts
     * The contacts to upload
     */
    rawContacts: RawContact,

    /**
     * @property uploadTransactionId
     * A unique identifier for tracking this upload transaction.
     */
    uploadTransactionId: Model.STRING,

    /**
     * @property deviceCountryCode
     * The device country code/SIM card country code. Example - US
     */
    deviceCountryCode: Model.STRING,

    modelType: "growth/abi/contacts-upload-contacts-request"
  }
}
