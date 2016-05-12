import Model from 'app/api/NotTerribleModel';

export default class EndorsementsCollectionMetadata extends Model {
  static schema = {
    /**
     * @property vieweeEndorsementsEnabled
     * Whether the viewee allows endorsements on their skills.
     */
    vieweeEndorsementsEnabled: Model.BOOL,

    modelType: "identity/profile/endorsements-collection-metadata"
  }
}
