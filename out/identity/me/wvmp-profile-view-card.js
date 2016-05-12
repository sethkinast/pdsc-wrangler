import Model from 'app/api/NotTerribleModel';
import ProfileViewer from "app/models/identity/me/profile-viewer";
import Insight from "app/models/identity/me/insight";

export default class WvmpProfileViewCard extends Model {
  static schema = {
    /**
     * @property viewedAt
     * Milliseconds since the epoch when this view happened.
     */
    viewedAt: Model.foreignUrn('com.linkedin.common.Time'),

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
     * @property referrer
     * Source of the profile view (localized).
     */
    referrer: Model.STRING,

    modelType: "identity/me/wvmp-profile-view-card"
  }
}
