import Model from 'app/api/NotTerribleModel';
import MiniCompany from "app/models/entities/shared/mini-company";

export default class TypeaheadShowcase extends Model {
  static schema = {
    /**
     * @property id
     * The id of the company. This field is deprecated. Use entityUrn in MiniCompany instead.
     */
    id: Model.STRING,

    /**
     * @property backendUrn
     * Backend Urn for the company. This should be used only for tracking.
     */
    backendUrn: Model.foreignUrn('com.linkedin.common.CompanyUrn'),

    /**
     * @property company
     * Basic company information
     */
    company: MiniCompany,

    modelType: "typeahead/typeahead-showcase"
  }
}
