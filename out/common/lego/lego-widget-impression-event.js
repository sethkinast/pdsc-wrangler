import Model from 'app/api/NotTerribleModel';

export default class LegoWidgetImpressionEvent extends Model {
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
     * @property visibility
     * The visibility of the widget.
     */
    visibility: Model.STRING,

    modelType: "common/lego/lego-widget-impression-event"
  }
}
