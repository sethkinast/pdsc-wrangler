import Model from 'app/api/NotTerribleModel';

export default class WvmpAnonymousProfileViewCard extends Model {
  static schema = {
    /**
     * @property viewedAt
     * The timestamp in milliseconds since epoch. For premium members, the value will be the first millisecond of the week. For free members, it will be the timestamp when the latest anonymous view happened.
     */
    viewedAt: Model.foreignUrn('com.linkedin.common.Time'),

    /**
     * @property numViewers
     * Number of viewers in this anonymous profile view card.
     */
    numViewers: Model.INT,

    modelType: "identity/me/wvmp-anonymous-profile-view-card"
  }
}
