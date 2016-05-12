import Model from 'app/api/NotTerribleModel';

export default class SkillsAndExperience extends Model {
  static schema = {
    /**
     * @property skillsAndExperience
     * The skills and experience for the job.
     */
    skillsAndExperience: Model.STRING,

    modelType: "entities/job/skills-and-experience"
  }
}
