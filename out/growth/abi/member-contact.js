import Model from 'app/api/NotTerribleModel';
import MiniProfile from "app/models/identity/shared/mini-profile";

export default class MemberContact extends Model {
  static schema = {
    /**
     * @property miniProfile
     * MiniProfile data about this member.
     */
    miniProfile: MiniProfile,

    /**
     * @property handle
     * The handle using which the invitation should be sent to the member.
     */
    handle: Model.oneOf(Model.foreignUrn('com.linkedin.common.EmailAddress'), Model.foreignUrn('com.linkedin.common.PhoneNumber')),

    /**
     * @property trackingId
     * Tracking id associated with the contact and the current flow.
     */
    trackingId: Model.STRING,

    modelType: "growth/abi/member-contact"
  }
}
