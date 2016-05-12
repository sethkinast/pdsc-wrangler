import Model from 'app/api/NotTerribleModel';
import ChannelUrn from "app/models/common/channel-urn";
import FollowingInfo from "app/models/common/following-info";

export default class UnfollowChannel extends Model {
  static schema = {
    /**
     * @property channelUrn
     * channel urn of the channel that can be unfollowed
     */
    channelUrn: ChannelUrn,

    /**
     * @property displayName
     * Display name of the channel
     */
    displayName: Model.STRING,

    /**
     * @property followingInfo
     * Information about the following relationship between the viewer and the channel.
     */
    followingInfo: FollowingInfo,

    modelType: "feed/actions/unfollow-channel"
  }
}
