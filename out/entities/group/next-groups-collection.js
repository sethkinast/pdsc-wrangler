import Model from 'app/api/NotTerribleModel';
import NextGroup from "app/models/entities/group/next-group";

export default class NextGroupsCollection extends Model {
  static schema = {
    /**
     * @property items
     * A list of similar groups.
     */
    items: NextGroup,

    modelType: "entities/group/next-groups-collection"
  }
}
