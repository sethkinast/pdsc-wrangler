import Model from 'app/api/NotTerribleModel';

export default class TypeaheadMetadata extends Model {
  static schema = {
    /**
     * @property id
     * The id of the typeahead search
     */
    id: Model.STRING,

    /**
     * @property type
     * The type of the typeahead search
     */
    type: Model.STRING,

    modelType: "typeahead/typeahead-metadata"
  }
}
