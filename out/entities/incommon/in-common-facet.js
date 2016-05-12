import Model from 'app/api/NotTerribleModel';
import MiniProfile from "app/models/identity/shared/mini-profile";

export default class InCommonFacet extends Model {
  static schema = {
    /**
     * @property facets
     * The facets that the viewer has in common.
     */
    facets: Model.foreignUrn('[object Object]'),

    /**
     * @property people
     * A list of people from the target entity that share the common facets (job-function, location, current-company, etc).
     */
    people: MiniProfile,

    /**
     * @property total
     * The total number of the entity's people that have the company in common with the viewer.
     */
    total: Model.INT,

    modelType: "entities/incommon/in-common-facet"
  }
}
