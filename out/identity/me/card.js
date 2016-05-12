import Model from 'app/api/NotTerribleModel';
import ProfileViewCard from "app/models/identity/me/profile-view-card";
import AggregateProfileViewCard from "app/models/identity/me/aggregate-profile-view-card";
import EndorsementCard from "app/models/identity/me/endorsement-card";
import FollowCard from "app/models/identity/me/follow-card";
import AggregateFollowCard from "app/models/identity/me/aggregate-follow-card";
import SuggestedActionCard from "app/models/identity/me/suggested-action-card";
import SocialActivityCard from "app/models/identity/me/social-activity-card";
import WvmpProfileViewCard from "app/models/identity/me/wvmp-profile-view-card";
import WvmpAnonymousProfileViewCard from "app/models/identity/me/wvmp-anonymous-profile-view-card";
import WvmpPremiumUpsellCard from "app/models/identity/me/wvmp-premium-upsell-card";
import NewToVoyagerCard from "app/models/identity/me/new-to-voyager-card";
import JobUpdateActivityCard from "app/models/identity/me/job-update-activity-card";
import SuggestedEditCard from "app/models/identity/me/suggested-edit-card";
import JymbiiNotificationCard from "app/models/identity/me/jymbii-notification-card";
import Base64EncodedTrackingId from "app/models/common/base64-encoded-tracking-id";
import CardUrn from "app/models/common/card-urn";

export default class Card extends Model {
  static schema = {
    /**
     * @property value
     * The actual card, typed as a union of all the card types.
     */
    value: Model.oneOf(ProfileViewCard, AggregateProfileViewCard, EndorsementCard, FollowCard, AggregateFollowCard, SuggestedActionCard, SocialActivityCard, WvmpProfileViewCard, WvmpAnonymousProfileViewCard, WvmpPremiumUpsellCard, NewToVoyagerCard, JobUpdateActivityCard, SuggestedEditCard, JymbiiNotificationCard),

    /**
     * @property objectUrn
     * Pointer to the backend object underlying this card.
     */
    objectUrn: Model.STRING,

    /**
     * @property trackingId
     * Unique tracking id for this instance of the card.
     */
    trackingId: Base64EncodedTrackingId,

    /**
     * @property entityUrn
     * Identifier for the card.
     */
    entityUrn: CardUrn,

    modelType: "identity/me/card"
  }
}
