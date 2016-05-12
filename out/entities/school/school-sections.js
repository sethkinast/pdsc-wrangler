import Model from 'app/api/NotTerribleModel';
import Section from "app/models/entities/common/section";

export default class SchoolSections extends Model {
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
     * @property people
     * This is the section/tab that has all the people items.
     */
    people: Section,

    modelType: "entities/school/school-sections"
  }
}
