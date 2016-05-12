import Model from 'app/api/NotTerribleModel';
import ControlActions from "app/models/feed/control-actions";
import Update from "app/models/feed/update";

export default class AggregatedConnectionUpdate extends Model {
  static schema = Object.assign({}, ControlActions.schema, {
    /**
     * @property connectionUpdates
     * The list will only ever contain Connection Updates wrapped by Update.
     */
    connectionUpdates: Update,

    modelType: "feed/aggregated-connection-update"
  })
}
