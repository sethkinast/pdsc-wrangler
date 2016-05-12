import Model from 'app/api/NotTerribleModel';

export default class VoyagerRawLiTrackData extends Model {
  static schema = Object.assign({}, Model.foreignUrn(&#39;com.linkedin.pemberly.common.RawLiTrackData&#39;).schema, {
    /**
     * @property clientMinorVersion
     * The client minor version string
     */
    clientMinorVersion: Model.STRING,

    /**
     * @property deviceType
     * The type of the mobile device
     */
    deviceType: Model.STRING,

    modelType: "common/voyager-raw-li-track-data"
  })
}
