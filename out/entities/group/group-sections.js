import Model from 'app/api/NotTerribleModel';
import Section from "app/models/entities/common/section";

export default class GroupSections extends Model {
  static schema = {
    /**
     * @property posts
     * This is the section/tab that has all the posts items.
     */
    posts: Section,

    /**
     * @property details
     * This is the section/tab that has all the details items.
     */
    details: Section,

    modelType: "entities/group/group-sections"
  }
}
