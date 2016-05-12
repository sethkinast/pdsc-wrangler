import Model from 'app/api/NotTerribleModel';
import UnfollowMember from "app/models/feed/actions/unfollow-member";
import UnfollowCompany from "app/models/feed/actions/unfollow-company";
import UnfollowChannel from "app/models/feed/actions/unfollow-channel";
import UnfollowSchool from "app/models/feed/actions/unfollow-school";
import UnfollowGroup from "app/models/feed/actions/unfollow-group";

export default Model.oneOf(UnfollowMember, UnfollowCompany, UnfollowChannel, UnfollowSchool, UnfollowGroup);
