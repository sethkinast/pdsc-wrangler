import Model from 'app/api/NotTerribleModel';
import CourseProviderUrn from "app/models/common/course-provider-urn";
import Image from "app/models/common/image";

export default class CourseProvider extends Model {
  static schema = {
    /**
     * @property entityUrn
     * Identifier for this courseProvider.
     */
    entityUrn: CourseProviderUrn,

    /**
     * @property name
     * The name of the course provider.
     */
    name: Model.STRING,

    /**
     * @property logo
     * The logo for the course provider.
     */
    logo: Image,

    modelType: "entities/skill/course-provider"
  }
}
