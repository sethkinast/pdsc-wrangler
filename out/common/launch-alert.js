import Model from 'app/api/NotTerribleModel';

export default class LaunchAlert extends Model {
  static schema = {
    /**
     * @property title
     * The title of the prop window
     */
    title: Model.STRING,

    /**
     * @property message
     * The message string of the prop window
     */
    message: Model.STRING,

    /**
     * @property link
     * The link that an action button uses.
     */
    link: Model.STRING,

    /**
     * @property labelForAction
     * The label for the action button.
     */
    labelForAction: Model.STRING,

    /**
     * @property labelForCancel
     * The label for the cancel button
     */
    labelForCancel: Model.STRING,

    modelType: "common/launch-alert"
  }
}
