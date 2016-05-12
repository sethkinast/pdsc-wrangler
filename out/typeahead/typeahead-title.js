import Model from 'app/api/NotTerribleModel';

export default class TypeaheadTitle extends Model {
  static schema = {
    /**
     * @property id
     * The id of the title.
     */
    id: Model.STRING,

    /**
     * @property backendUrn
     * Backend urn representing the title. This should be used only for tracking.
     */
    backendUrn: Model.foreignUrn('com.linkedin.common.TitleUrn'),

    modelType: "typeahead/typeahead-title"
  }
}
