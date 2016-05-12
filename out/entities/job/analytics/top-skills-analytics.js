import Model from 'app/api/NotTerribleModel';
import TopSkill from "app/models/entities/job/analytics/top-skill";

export default class TopSkillsAnalytics extends Model {
  static schema = {
    /**
     * @property topSkills
     * Top skills shared among applicants for a job posting.
     */
    topSkills: TopSkill,

    modelType: "entities/job/analytics/top-skills-analytics"
  }
}
