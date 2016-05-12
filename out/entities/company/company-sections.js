import Model from 'app/api/NotTerribleModel';
import Section from "app/models/entities/common/section";

export default class CompanySections extends Model {
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
     * @property careers
     * This is the section/tab that has all the careers items.
     */
    careers: Section,

    modelType: "entities/company/company-sections"
  }
}
