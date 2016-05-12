import Model from 'app/api/NotTerribleModel';
import ChannelFollowingInfoUrn from "app/models/common/channel-following-info-urn";

export default class ChannelFollowingInfo extends Model {
  static schema = {
    /**
     * @property entityUrn
     * Identifier for this ChannelFollowingInfo.
     */
    entityUrn: ChannelFollowingInfoUrn,

    /**
     * @property following
     * Indicates whether the member is already following this channel
     */
    following: Model.BOOL,

    /**
     * @property followerCount
     * The total number of followers of this channel. If this cannot be resolved for some reason, we want to show the channel anyway.
     */
    followerCount: Model.INT,

    modelType: "entities/shared/channel-following-info"
  }
}
