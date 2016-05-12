import Model from 'app/api/NotTerribleModel';
import ControlActions from "app/models/feed/control-actions";
import Update from "app/models/feed/update";

export default class AggregatedJymbiiUpdate extends Model {
  static schema = Object.assign({}, ControlActions.schema, {
    /**
     * @property jymbiiUpdates
     * The list will only ever contain JymbiiUpdates wrapped by Update.
     */
    jymbiiUpdates: Update,

    modelType: "feed/aggregated-jymbii-update"
  })
}
