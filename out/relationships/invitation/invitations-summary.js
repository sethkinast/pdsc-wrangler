import Model from 'app/api/NotTerribleModel';
import RelInvitationsSummaryUrn from "app/models/common/rel-invitations-summary-urn";

export default class InvitationsSummary extends Model {
  static schema = {
    /**
     * @property entityUrn
     * Identifier of this summary
     */
    entityUrn: RelInvitationsSummaryUrn,

    /**
     * @property numNewInvitations
     * Number of new invitations
     */
    numNewInvitations: Model.INT,

    /**
     * @property numPendingInvitations
     * Number of pending invitations
     */
    numPendingInvitations: Model.INT,

    modelType: "relationships/invitation/invitations-summary"
  }
}
