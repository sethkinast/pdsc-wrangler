import Model from 'app/api/NotTerribleModel';

export default class LegoWidgetActionEvent extends Model {
  static schema = {
    /**
     * @property trackingToken
     * The widget's Lego tracking token.
     */
    trackingToken: Model.STRING,

    /**
     * @property trackingId
     * The fixed 16 representation of (short) trackingToken field.
     */
    trackingId: Model.foreignUrn('com.linkedin.common.TrackingId'),

    /**
     * @property actionCategory
     * The type of action taken.
     */
    actionCategory: Model.STRING,

    /**
     * @property actionCount
     * Can be used to signal that the action was performed more than once.
     */
    actionCount: Model.INT,

    modelType: "common/lego/lego-widget-action-event"
  }
}
