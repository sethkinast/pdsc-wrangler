import Model from 'app/api/NotTerribleModel';

export default class WidgetContent extends Model {
  static schema = {
    /**
     * @property widgetId
     * The Lego widget id.
     */
    widgetId: Model.STRING,

    /**
     * @property trackingToken
     * The tracking token to be used for sending Lego tracking events.
     */
    trackingToken: Model.STRING,

    /**
     * @property prefetchable
     * If false, this widget should not be pre-fetched because its contents may be dependent on the user's latest actions.
     */
    prefetchable: Model.BOOL,

    modelType: "growth/lego/widget-content"
  }
}
