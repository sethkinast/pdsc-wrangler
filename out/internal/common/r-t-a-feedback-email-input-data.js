import Model from 'app/api/NotTerribleModel';

export default class RTAFeedbackEmailInputData extends Model {
  static schema = {
    /**
     * @property feedback
     * Feedback about the app entered by the user.
     */
    feedback: Model.STRING,

    /**
     * @property memberID
     * Member Id of the user who generated feedback.
     */
    memberID: Model.STRING,

    /**
     * @property deviceType
     * Device type of the installed app.
     */
    deviceType: Model.STRING,

    /**
     * @property model
     * Model name of the device.
     */
    model: Model.STRING,

    /**
     * @property osName
     * OS installed on the device.
     */
    osName: Model.STRING,

    /**
     * @property osVersion
     * Version of the OS installed on the device.
     */
    osVersion: Model.STRING,

    /**
     * @property carrier
     * Carrier of the device.
     */
    carrier: Model.STRING,

    /**
     * @property appVersion
     * Version of the installed app for which feedback is given.
     */
    appVersion: Model.STRING,

    /**
     * @property appId
     * Id of the app for which feedback is given.
     */
    appId: Model.STRING,

    modelType: "internal/common/r-t-a-feedback-email-input-data"
  }
}
