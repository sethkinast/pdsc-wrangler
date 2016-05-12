import Model from 'app/api/NotTerribleModel';
import ProfileViewsTimeIntervalDataPoint from "app/models/identity/me/profile-views-time-interval-data-point";

export default class ProfileViewsByTimePanel extends Model {
  static schema = {
    /**
     * @property chartData
     * Time series counting profile views over several intervals.
     */
    chartData: ProfileViewsTimeIntervalDataPoint,

    /**
     * @property totalNumViews
     * Profile view count over the total time.
     */
    totalNumViews: Model.INT,

    modelType: "identity/me/profile-views-by-time-panel"
  }
}
