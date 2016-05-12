import Model from 'app/api/NotTerribleModel';
import Trackable from "app/models/common/trackable";
import InviteeProfile from "app/models/growth/invitation/invitee-profile";
import InviteeEmail from "app/models/growth/invitation/invitee-email";
import InviteePhone from "app/models/growth/invitation/invitee-phone";

export default class NormInvitation extends Model {
  static schema = Object.assign({}, Trackable.schema, {
    /**
     * @property invitee
     * The identifier of the person who is receiving the invite.
     */
    invitee: Model.oneOf(InviteeProfile, InviteeEmail, InviteePhone),

    /**
     * @property message
     * General invitation message to be sent to user. If omitted the default message will be used.
     */
    message: Model.STRING,

    /**
     * @property uploadTransactionId
     * DEPRECATED. Pass this as query param instead. Flow ID to link back this instance of invitation record to abook events. This is passed for ABI flow.
     */
    uploadTransactionId: Model.STRING,

    modelType: "growth/invitation/norm-invitation"
  })
}
