import Model from 'app/api/NotTerribleModel';
import Connect from "app/models/identity/profile/actions/connect";
import PersonalizedConnect from "app/models/identity/profile/actions/personalized-connect";
import InvitationPending from "app/models/identity/profile/actions/invitation-pending";
import Accept from "app/models/identity/profile/actions/accept";
import Message from "app/models/identity/profile/actions/message";
import Follow from "app/models/identity/profile/actions/follow";
import SendInMail from "app/models/identity/profile/actions/send-in-mail";
import Disconnect from "app/models/identity/profile/actions/disconnect";
import Unfollow from "app/models/identity/profile/actions/unfollow";
import Block from "app/models/identity/profile/actions/block";
import Report from "app/models/identity/profile/actions/report";
import Signup from "app/models/identity/profile/actions/signup";
import ActionType from "app/models/identity/profile/actions/action-type";

export default class ProfileAction extends Model {
  static schema = {
    /**
     * @property action
     * The actual profile action, typed as a union of all the card types
     */
    action: Model.oneOf(Connect, PersonalizedConnect, InvitationPending, Accept, Message, Follow, SendInMail, Disconnect, Unfollow, Block, Report, Signup),

    /**
     * @property type
     * Describes where an action on the profile belongs
     */
    type: ActionType,

    modelType: "identity/profile/actions/profile-action"
  }
}
