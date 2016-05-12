import Model from 'app/api/NotTerribleModel';
import InsightType from "app/models/messaging/peripheral/insight/insight-type";
import Base64EncodedTrackingId from "app/models/common/base64-encoded-tracking-id";

export default class Insight extends Model {
  static schema = {
    /**
     * @property title
     * Title of the insight. Eg. You and x both worked for company y
     */
    title: Model.foreignUrn('com.linkedin.pemberly.text.AttributedText'),

    /**
     * @property body
     * The body of the insight. Eg. Share your memory with x from company y
     */
    body: Model.foreignUrn('com.linkedin.pemberly.text.AttributedText'),

    /**
     * @property preFilledText
     * Pre filled text to display inside the compose box. Eg. I see you also worked at company x. Did you also...
     */
    preFilledText: Model.foreignUrn('com.linkedin.pemberly.text.AttributedText'),

    /**
     * @property type
     * Type of the insight
     */
    type: InsightType,

    /**
     * @property trackingId
     * Unique tracking id for this instance of the insight.
     */
    trackingId: Base64EncodedTrackingId,

    modelType: "messaging/peripheral/insight/insight"
  }
}
