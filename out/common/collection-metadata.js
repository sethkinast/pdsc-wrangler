import Model from 'app/api/NotTerribleModel';

export default class CollectionMetadata extends Model {
  static schema = {
    /**
     * @property id
     * The type-specific id of the collection entity. Should include the name and method of the collection.
     */
    id: Model.STRING,

    /**
     * @property type
     * The type of the collection entity. Should include the page size and parent resource id.
     */
    type: Model.STRING,

    modelType: "common/collection-metadata"
  }
}
