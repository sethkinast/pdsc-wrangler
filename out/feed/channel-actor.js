import Model from 'app/api/NotTerribleModel';
import Channel from "app/models/growth/interests/channel";

export default class ChannelActor extends Model {
  static schema = {
    /**
     * @property urn
     * backend Urn for this channel.
     */
    urn: Model.STRING,

    /**
     * @property channel
     * channel info
     */
    channel: Channel,

    modelType: "feed/channel-actor"
  }
}
