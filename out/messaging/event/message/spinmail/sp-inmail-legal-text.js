import Model from 'app/api/NotTerribleModel';

export default class SpInmailLegalText extends Model {
  static schema = {
    /**
     * @property customLegalText
     * HTML string legal text that the advertisers customizes at creation time. Contains the terms and conditions message
     */
    customLegalText: Model.STRING,

    /**
     * @property staticLegalText
     * HTML string legal text that LinkedIn displays. Contains LinkedIn's translated terms and conditions message and opt out options
     */
    staticLegalText: Model.STRING,

    /**
     * @property customLegalTextTracking
     * Ad click tracking url for any url fired within customLegalText
     */
    customLegalTextTracking: Model.foreignUrn('com.linkedin.common.Url'),

    /**
     * @property staticLegalTextTracking
     * Ad click tracking url for any url fired within staticLegalText
     */
    staticLegalTextTracking: Model.foreignUrn('com.linkedin.common.Url'),

    modelType: "messaging/event/message/spinmail/sp-inmail-legal-text"
  }
}
