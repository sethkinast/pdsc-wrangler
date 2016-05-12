import Model from 'app/api/NotTerribleModel';
import SpInmailAdUnit from "app/models/messaging/event/message/spinmail/sp-inmail-ad-unit";

export default class SpInmailStandardSubContent extends Model {
  static schema = {
    /**
     * @property actionText
     * The text for the call to action button
     */
    actionText: Model.STRING,

    /**
     * @property action
     * The url for the call to action redirect
     */
    action: Model.foreignUrn('com.linkedin.common.Url'),

    /**
     * @property actionTracking
     * Ad click tracking url for action
     */
    actionTracking: Model.foreignUrn('com.linkedin.common.Url'),

    /**
     * @property adUnit
     * The ad to be displayed with this sponsored inmail
     */
    adUnit: SpInmailAdUnit,

    modelType: "messaging/event/message/spinmail/sp-inmail-standard-sub-content"
  }
}
