import Model from 'app/api/NotTerribleModel';
import ControlActions from "app/models/feed/control-actions";
import Update from "app/models/feed/update";

export default class AggregatedPymkUpdate extends Model {
  static schema = Object.assign({}, ControlActions.schema, {
    /**
     * @property pymkUpdates
     * The list will only ever contain PYMK Updates wrapped by Update.
     */
    pymkUpdates: Update,

    modelType: "feed/aggregated-pymk-update"
  })
}
