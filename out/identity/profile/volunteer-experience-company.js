import Model from 'app/api/NotTerribleModel';
import MiniCompany from "app/models/entities/shared/mini-company";

export default class VolunteerExperienceCompany extends Model {
  static schema = {
    /**
     * @property miniCompany
     * Information about the mini company for this Volunteer experience.
     */
    miniCompany: MiniCompany,

    modelType: "identity/profile/volunteer-experience-company"
  }
}
