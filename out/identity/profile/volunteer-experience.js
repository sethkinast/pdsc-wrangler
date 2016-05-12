import Model from 'app/api/NotTerribleModel';
import NormVolunteerExperience from "app/models/identity/profile/norm-volunteer-experience";
import VolunteerExperienceCompany from "app/models/identity/profile/volunteer-experience-company";

export default class VolunteerExperience extends Model {
  static schema = Object.assign({}, NormVolunteerExperience.schema, {
    /**
     * @property company
     * Company info if the volunteer experience's company is a standardized one.
     */
    company: VolunteerExperienceCompany,

    modelType: "identity/profile/volunteer-experience"
  })
}
