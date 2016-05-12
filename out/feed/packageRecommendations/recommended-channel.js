import Model from 'app/api/NotTerribleModel';
import TrackingObject from "app/models/common/tracking-object";
import Channel from "app/models/growth/interests/channel";
import AnnotatedText from "app/models/feed/shared/annotated-text";

export default class RecommendedChannel extends Model {
  static schema = Object.assign({}, TrackingObject.schema, {
    /**
     * @property channel
     * Shared channel fields for this channel entity
     */
    channel: Channel,

    /**
     * @property reason
     * Editorial reason for recommending this channel
     */
    reason: AnnotatedText,

    modelType: "feed/packageRecommendations/recommended-channel"
  })
}
