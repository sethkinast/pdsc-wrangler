import Model from 'app/api/NotTerribleModel';

export default class ProfileViewsTimeIntervalDataPoint extends Model {
  static schema = {
    /**
     * @property endTimestamp
     * Milliseconds since the epoch marking the end of this interval.
     */
    endTimestamp: Model.foreignUrn('com.linkedin.common.Time'),

    /**
     * @property numViews
     * Profile view count over this interval.
     */
    numViews: Model.INT,

    modelType: "identity/me/profile-views-time-interval-data-point"
  }
}
