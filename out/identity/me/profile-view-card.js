import Model from 'app/api/NotTerribleModel';
import ProfileViewer from "app/models/identity/me/profile-viewer";
import Insight from "app/models/identity/me/insight";

export default class ProfileViewCard extends Model {
  static schema = {
    /**
     * @property publishedAt
     * Milliseconds since the epoch when this view happened.
     */
    publishedAt: Model.foreignUrn('com.linkedin.common.Time'),

    /**
     * @property viewer
     * Viewer's information.
     */
    viewer: ProfileViewer,

    /**
     * @property insight
     * Insight about the viewer.
     */
    insight: Insight,

    /**
     * @property read
     * Whether this card has been read by the member.
     */
    read: Model.BOOL,

    /**
     * @property headline
     * Localized headline of the card when it's about an obfuscated viewer.
     */
    headline: Model.foreignUrn('com.linkedin.pemberly.text.AttributedText'),

    /**
     * @property profileViewCta
     * Text on the card's profile view CTA button.
     */
    profileViewCta: Model.foreignUrn('com.linkedin.pemberly.text.AttributedText'),

    modelType: "identity/me/profile-view-card"
  }
}
