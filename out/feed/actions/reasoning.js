import Model from 'app/api/NotTerribleModel';

export default class Reasoning extends Model {
  static schema = {
    /**
     * @property reason
     * Reason that needs to be displayed to the user when this action is clicked. Should be i18n safe.
     */
    reason: Model.STRING,

    modelType: "feed/actions/reasoning"
  }
}
