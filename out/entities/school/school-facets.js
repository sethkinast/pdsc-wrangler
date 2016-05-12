import Model from 'app/api/NotTerribleModel';
import SchoolFacetsUrn from "app/models/common/school-facets-urn";
import AlumniJobFunction from "app/models/entities/school/alumni-job-function";
import AlumniLocation from "app/models/entities/school/alumni-location";

export default class SchoolFacets extends Model {
  static schema = {
    /**
     * @property entityUrn
     * Identifier for this SchoolFacets.
     */
    entityUrn: SchoolFacetsUrn,

    /**
     * @property alumniJobFunctions
     * List of job functions that the alumni of this school perform, ordered by number of alumni.
     */
    alumniJobFunctions: AlumniJobFunction,

    /**
     * @property alumniLocations
     * List of locations where the alumni of this school live, ordered by number of alumni.
     */
    alumniLocations: AlumniLocation,

    modelType: "entities/school/school-facets"
  }
}
