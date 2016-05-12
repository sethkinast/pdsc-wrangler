import Model from 'app/api/NotTerribleModel';
import Delete from "app/models/feed/actions/delete";
import Reasoning from "app/models/feed/actions/reasoning";
import Feedback from "app/models/feed/actions/feedback";
import UnfollowActions from "app/models/feed/actions/unfollow-actions";
import UnfollowMember from "app/models/feed/actions/unfollow-member";
import UnfollowCompany from "app/models/feed/actions/unfollow-company";
import UnfollowChannel from "app/models/feed/actions/unfollow-channel";
import UnfollowSchool from "app/models/feed/actions/unfollow-school";
import UnfollowGroup from "app/models/feed/actions/unfollow-group";
import FollowMember from "app/models/feed/actions/follow-member";
import FollowCompany from "app/models/feed/actions/follow-company";
import FollowChannel from "app/models/feed/actions/follow-channel";
import FollowSchool from "app/models/feed/actions/follow-school";
import FollowGroup from "app/models/feed/actions/follow-group";
import LeaveGroup from "app/models/feed/actions/leave-group";
import Report from "app/models/feed/actions/report";
import Survey from "app/models/feed/actions/survey";
import IncorrectlyMentionedMember from "app/models/feed/actions/incorrectly-mentioned-member";
import IncorrectlyMentionedCompany from "app/models/feed/actions/incorrectly-mentioned-company";
import CopyLink from "app/models/feed/actions/copy-link";

export default class UpdateAction extends Model {
  static schema = {
    /**
     * @property value
     * A union of all possible actions.
     */
    value: Model.oneOf(Delete, Reasoning, Feedback, UnfollowActions, UnfollowMember, UnfollowCompany, UnfollowChannel, UnfollowSchool, UnfollowGroup, FollowMember, FollowCompany, FollowChannel, FollowSchool, FollowGroup, LeaveGroup, Report, Survey, IncorrectlyMentionedMember, IncorrectlyMentionedCompany, CopyLink),

    modelType: "feed/update-action"
  }
}
