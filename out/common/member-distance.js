import Model from 'app/api/NotTerribleModel';
import GraphDistance from "app/models/common/graph-distance";

export default class MemberDistance extends Model {
  static schema = {
    /**
     * @property value
     * Network distance between the logged-in member and the member in the id field.
     */
    value: GraphDistance,

    modelType: "common/member-distance"
  }
}
