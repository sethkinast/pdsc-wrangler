import Model from 'app/api/NotTerribleModel';
import ShareUpdateContent from "app/models/feed/share-update-content";
import ControlActions from "app/models/feed/control-actions";
import Update from "app/models/feed/update";

export default class AggregatedShareContentUpdate extends Model {
  static schema = Object.assign({}, ShareUpdateContent.schema, ControlActions.schema, {
    /**
     * @property rollup
     * A list of the ShareUpdates in this rollup.
     */
    rollup: Update,

    modelType: "feed/aggregated-share-content-update"
  })
}
