import Model from 'app/api/NotTerribleModel';
import MiniProfile from "app/models/identity/shared/mini-profile";
import SuggestedSkill from "app/models/identity/profile/suggested-skill";

export default class AddSkills extends Model {
  static schema = {
    /**
     * @property miniProfile
     * The basic profile information about the logged-in member.
     */
    miniProfile: MiniProfile,

    /**
     * @property skills
     * List of suggested skills for member to add. When this is empty, either there's no suggested skills for the member, or the fetching failed.
     */
    skills: SuggestedSkill,

    modelType: "identity/me/suggestedactions/add-skills"
  }
}
