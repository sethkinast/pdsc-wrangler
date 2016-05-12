import Model from 'app/api/NotTerribleModel';

export default class TypeaheadSiteFeature extends Model {
  static schema = {
    /**
     * @property id
     * The id of the site feature.
     */
    id: Model.STRING,

    /**
     * @property backendUrn
     * Backend urn representing the site feature. This should be used only for tracking.
     */
    backendUrn: Model.STRING,

    modelType: "typeahead/typeahead-site-feature"
  }
}
