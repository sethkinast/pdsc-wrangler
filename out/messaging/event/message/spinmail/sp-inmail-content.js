import Model from 'app/api/NotTerribleModel';
import SpInmailLegalText from "app/models/messaging/event/message/spinmail/sp-inmail-legal-text";
import SpInmailStandardSubContent from "app/models/messaging/event/message/spinmail/sp-inmail-standard-sub-content";
import SpInmailLeadGenSubContent from "app/models/messaging/event/message/spinmail/sp-inmail-lead-gen-sub-content";

export default class SpInmailContent extends Model {
  static schema = {
    /**
     * @property spInmailType
     * Describes the type of Sponsored InMail.
     */
    spInmailType: Model.STRING,

    /**
     * @property status
     * Status of the spInMail
     */
    status: Model.STRING,

    /**
     * @property body
     * The body of the Sponsored InMail
     */
    body: Model.STRING,

    /**
     * @property bodyTracking
     * Ad click tracking url for any url fired within body
     */
    bodyTracking: Model.foreignUrn('com.linkedin.common.Url'),

    /**
     * @property openTracking
     * Ad click tracking url that is fired when a Sponsored InMail is rendered
     */
    openTracking: Model.foreignUrn('com.linkedin.common.Url'),

    /**
     * @property legalText
     * legal terms and conditions and their respective click tracking urls
     */
    legalText: SpInmailLegalText,

    /**
     * @property subContent
     * Various types of Sponsored InMail content
     */
    subContent: Model.oneOf(SpInmailStandardSubContent, SpInmailLeadGenSubContent),

    modelType: "messaging/event/message/spinmail/sp-inmail-content"
  }
}
