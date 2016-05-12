import Model from 'app/api/NotTerribleModel';
import InviteeProfile from "app/models/common/invitee-profile";
import InviteeEmail from "app/models/common/invitee-email";
import InviteePhone from "app/models/common/invitee-phone";

export default class Invitation extends Model {
  static schema = {
    /**
     * @property invitee
     * Deprecated. Use growth/Invitation/NormInvitation instead. The identifier of the person who is receiving the invite.
     */
    invitee: Model.oneOf(InviteeProfile, InviteeEmail, InviteePhone),

    modelType: "common/invitation"
  }
}
