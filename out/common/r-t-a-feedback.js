import Model from 'app/api/NotTerribleModel';

export default class RTAFeedback extends Model {
  static schema = {
    /**
     * @property feedback
     * Feedback about the app entered by the user.
     */
    feedback: Model.STRING,

    modelType: "common/r-t-a-feedback"
  }
}
