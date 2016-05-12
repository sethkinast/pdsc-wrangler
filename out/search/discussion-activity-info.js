import Model from 'app/api/NotTerribleModel';

export default class DiscussionActivityInfo extends Model {
  static schema = {
    /**
     * @property numDiscussions
     * Number of discussions in the group over the specified period
     */
    numDiscussions: Model.INT,

    /**
     * @property period
     * Time period of discussion activity
     */
    period: Model.STRING,

    /**
     * @property displayText
     * Display text for number of discussions this period, e.g '10 discussions this month'
     */
    displayText: Model.STRING,

    modelType: "search/discussion-activity-info"
  }
}
