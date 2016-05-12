import Model from 'app/api/NotTerribleModel';

export default class GuestContact extends Model {
  static schema = {
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
     * @property handle
     * The handle using which the invitation should be sent to the guest.
     */
    handle: Model.oneOf(Model.foreignUrn('com.linkedin.common.EmailAddress'), Model.foreignUrn('com.linkedin.common.PhoneNumber')),

    /**
     * @property trackingId
     * Tracking id associated with the contact and the current flow.
     */
    trackingId: Model.STRING,

    modelType: "growth/abi/guest-contact"
  }
}
