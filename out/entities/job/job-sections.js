import Model from 'app/api/NotTerribleModel';
import Section from "app/models/entities/common/section";

export default class JobSections extends Model {
  static schema = {
    /**
     * @property highlights
     * This is the section/tab that has all the highlight items.
     */
    highlights: Section,

    /**
     * @property details
     * This is the section/tab that has all the details items.
     */
    details: Section,

    /**
     * @property insights
     * This is the section/tab that has all the insights items.
     */
    insights: Section,

    modelType: "entities/job/job-sections"
  }
}
