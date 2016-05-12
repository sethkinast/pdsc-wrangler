import Model from 'app/api/NotTerribleModel';

export default class VersionTag extends Model {
  static schema = {
    /**
     * @property versionTag
     * Version tag of the profile, used for optimistic locking.
     */
    versionTag: Model.STRING,

    modelType: "identity/profile/version-tag"
  }
}
