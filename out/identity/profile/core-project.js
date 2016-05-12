import Model from 'app/api/NotTerribleModel';
import ProjectUrn from "app/models/common/project-urn";
import DateRange from "app/models/common/date-range";

export default class CoreProject extends Model {
  static schema = {
    /**
     * @property entityUrn
     * Identifier for this project
     */
    entityUrn: ProjectUrn,

    /**
     * @property title
     * Title of the project.
     */
    title: Model.STRING,

    /**
     * @property url
     * URL associated with this project.
     */
    url: Model.foreignUrn('com.linkedin.common.Url'),

    /**
     * @property description
     * Description of the project.
     */
    description: Model.STRING,

    /**
     * @property occupation
     * Occupation held by the member when the project was underway.
     */
    occupation: Model.STRING,

    /**
     * @property timePeriod
     * The time period when this project took place. This DateRange is meant for holding months and years only.
     */
    timePeriod: DateRange,

    modelType: "identity/profile/core-project"
  }
}
