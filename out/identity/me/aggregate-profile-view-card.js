import Model from 'app/api/NotTerribleModel';
import ProfileViewer from "app/models/identity/me/profile-viewer";

export default class AggregateProfileViewCard extends Model {
  static schema = {
    /**
     * @property publishedAt
     * The timestamp in milliseconds of when the latest profile view in this aggregation happened.
     */
    publishedAt: Model.foreignUrn('com.linkedin.common.Time'),

    /**
     * @property someViewers
     * Information about a subset of the viewers.
     */
    someViewers: ProfileViewer,

    /**
     * @property viewsTimeRange
     * TEMPORARILY OPTIONAL. The time range when the profile views happened.
     */
    viewsTimeRange: Model.foreignUrn('com.linkedin.common.TimeRange'),

    /**
     * @property numViewers
     * Number of viewers in this aggregate card.
     */
    numViewers: Model.INT,

    /**
     * @property read
     * Whether this card has been read by the member.
     */
    read: Model.BOOL,

    /**
     * @property profileViewCta
     * Text on the card's profile view CTA button.
     */
    profileViewCta: Model.foreignUrn('com.linkedin.pemberly.text.AttributedText'),

    modelType: "identity/me/aggregate-profile-view-card"
  }
}
