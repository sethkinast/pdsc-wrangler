import Model from 'app/api/NotTerribleModel';
import MiniProfile from "app/models/identity/shared/mini-profile";
import RelInvitationUrn from "app/models/common/rel-invitation-urn";

export default class InvitationInfo extends Model {
  static schema = {
    /**
     * @property miniProfile
     * Mini profile data about the member
     */
    miniProfile: MiniProfile,

    /**
     * @property invitationUrn
     * The invitation id of the prop
     */
    invitationUrn: RelInvitationUrn,

    /**
     * @property sharedSecret
     * A shared value to help validate this invitation was accepted from a legitimate handle.
     */
    sharedSecret: Model.STRING,

    /**
     * @property customMessage
     * Indicate if the invitation message is customized.
     */
    customMessage: Model.BOOL,

    /**
     * @property message
     * Invitation message
     */
    message: Model.STRING,

    /**
     * @property mailboxItemId
     * MailboxItem ID which can be used to reply to the invitation.
     */
    mailboxItemId: Model.STRING,

    modelType: "relationships/shared/prop/invitation-info"
  }
}
