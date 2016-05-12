import Model from 'app/api/NotTerribleModel';
import ChannelUrn from "app/models/common/channel-urn";
import Image from "app/models/common/image";
import FollowingInfo from "app/models/common/following-info";

export default class Channel extends Model {
  static schema = {
    /**
     * @property id
     * The id of the channel (deprecated)
     */
    id: Model.STRING,

    /**
     * @property urn
     * Backend URN for this channel.
     */
    urn: Model.STRING,

    /**
     * @property entityUrn
     * Identifier for this channel.
     */
    entityUrn: ChannelUrn,

    /**
     * @property name
     * The name of the channel
     */
    name: Model.STRING,

    /**
     * @property logo
     * Logo image
     */
    logo: Image,

    /**
     * @property backgroundImage
     * Background image for mini feed
     */
    backgroundImage: Image,

    /**
     * @property followingInfo
     * Indicates whether the member is already following this channel
     */
    followingInfo: FollowingInfo,

    modelType: "growth/interests/channel"
  }
}
