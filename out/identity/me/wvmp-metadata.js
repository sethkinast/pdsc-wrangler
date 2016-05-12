import Model from 'app/api/NotTerribleModel';

export default class WvmpMetadata extends Model {
  static schema = {
    /**
     * @property timeRange
     * The time range of the profile views. This is optional, because it's only used on the first page for pagination purposes, and there might not be any profile view. Start time is exclusive, and end time is inclusive.
     */
    timeRange: Model.foreignUrn('com.linkedin.common.TimeRange'),

    modelType: "identity/me/wvmp-metadata"
  }
}
