import Model from 'app/api/NotTerribleModel';
import NormInvitation from "app/models/relationships/invitation/norm-invitation";
import RelInvitationUrn from "app/models/common/rel-invitation-urn";
import MiniProfile from "app/models/identity/shared/mini-profile";
import InvitationType from "app/models/relationships/invitation/invitation-type";

export default class Invitation extends Model {
  static schema = Object.assign({}, NormInvitation.schema, {
    /**
     * @property entityUrn
     * Identifier of this invitation
     */
    entityUrn: RelInvitationUrn,

    /**
     * @property sharedSecret
     * A shared value to help validate this invitation was accepted from a legitimate handle.
     */
    sharedSecret: Model.STRING,

    /**
     * @property fromMemberId
     * Profile id of invitation sender
     */
    fromMemberId: Model.STRING,

    /**
     * @property fromMember
     * Miniprofile of invitation sender
     */
    fromMember: MiniProfile,

    /**
     * @property toMember
     * Miniprofile of invitation receiver
     */
    toMember: MiniProfile,

    /**
     * @property sentTime
     * Time when the invitation was sent
     */
    sentTime: Model.foreignUrn('com.linkedin.common.Time'),

    /**
     * @property invitationType
     * The type of invitations
     */
    invitationType: InvitationType,

    /**
     * @property customMessage
     * Indicate if the invitation message is customized.
     */
    customMessage: Model.BOOL,

    /**
     * @property mailboxItemId
     * MailboxItem ID which can be used to reply to the invitation.
     */
    mailboxItemId: Model.STRING,

    modelType: "relationships/invitation/invitation"
  })
}
