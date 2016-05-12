import Model from 'app/api/NotTerribleModel';
import MemberContact from "app/models/growth/abi/member-contact";
import GuestContact from "app/models/growth/abi/guest-contact";

export default class ImportedContacts extends Model {
  static schema = {
    /**
     * @property memberContacts
     * List of member contacts and their types.
     */
    memberContacts: MemberContact,

    /**
     * @property guestContacts
     * List of guest contacts identified by email or phone number.
     */
    guestContacts: GuestContact,

    /**
     * @property trackingId
     * Tracking id associated with the current flow.
     */
    trackingId: Model.STRING,

    modelType: "growth/abi/imported-contacts"
  }
}
