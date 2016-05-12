import Model from 'app/api/NotTerribleModel';

export default class LegoPageImpressionEvent extends Model {
  static schema = {
    /**
     * @property trackingToken
     * A tracking token from any widget on the page which can be used to resolve the page id.
     */
    trackingToken: Model.STRING,

    modelType: "common/lego/lego-page-impression-event"
  }
}
