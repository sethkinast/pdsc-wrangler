import Model from 'app/api/NotTerribleModel';
import SpInmailAdUnit from "app/models/messaging/event/message/spinmail/sp-inmail-ad-unit";

export default class SpInmailLeadGenSubContent extends Model {
  static schema = {
    /**
     * @property actionText
     * The text for the call to action button
     */
    actionText: Model.STRING,

    /**
     * @property afterActionText
     * The text to show after the action button was clicked
     */
    afterActionText: Model.STRING,

    /**
     * @property adUnit
     * The ad to be displayed with this sponsored inmail
     */
    adUnit: SpInmailAdUnit,

    /**
     * @property leadGenInterestedTracking
     * Ad click tracking url for action. This url is fired when the user clicks the lead generation action button with interest, but doesn't want to share his or her contact info
     */
    leadGenInterestedTracking: Model.foreignUrn('com.linkedin.common.Url'),

    /**
     * @property leadGenSharedEmailTracking
     * Ad click tracking url for action. This url is fired when user clicks the lead generation action button with the intent to share his or her contact info
     */
    leadGenSharedEmailTracking: Model.foreignUrn('com.linkedin.common.Url'),

    modelType: "messaging/event/message/spinmail/sp-inmail-lead-gen-sub-content"
  }
}
