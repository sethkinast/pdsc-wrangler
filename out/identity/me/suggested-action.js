import Model from 'app/api/NotTerribleModel';
import AddSkills from "app/models/identity/me/suggestedactions/add-skills";
import PYMK from "app/models/identity/me/suggestedactions/p-y-m-k";
import UpdateProfile from "app/models/identity/me/suggestedactions/update-profile";
import ComposeShare from "app/models/identity/me/suggestedactions/compose-share";

export default Model.oneOf(AddSkills, PYMK, UpdateProfile, ComposeShare);
