import Model from 'app/api/NotTerribleModel';

export default class AlumniLocation extends Model {
  static schema = {
    /**
     * @property location
     * Description of the location.
     */
    location: Model.STRING,

    /**
     * @property alumniCount
     * Number of alumni of the school at this location.
     */
    alumniCount: Model.INT,

    modelType: "entities/school/alumni-location"
  }
}
