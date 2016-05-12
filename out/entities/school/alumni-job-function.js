import Model from 'app/api/NotTerribleModel';

export default class AlumniJobFunction extends Model {
  static schema = {
    /**
     * @property jobFunction
     * Name of the job function.
     */
    jobFunction: Model.STRING,

    /**
     * @property alumniCount
     * Number of alumni of the school that have this job function.
     */
    alumniCount: Model.INT,

    modelType: "entities/school/alumni-job-function"
  }
}
