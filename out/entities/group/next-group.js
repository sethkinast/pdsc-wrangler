import Model from 'app/api/NotTerribleModel';
import NextGroupUrn from "app/models/common/next-group-urn";
import MiniGroup from "app/models/entities/shared/mini-group";

export default class NextGroup extends Model {
  static schema = {
    /**
     * @property entityUrn
     * Identifier for this NextGroup.
     */
    entityUrn: NextGroupUrn,

    /**
     * @property miniGroup
     * Minimum information about the group.
     */
    miniGroup: MiniGroup,

    /**
     * @property recentPostAt
     * The time for the most recent post in this group.
     */
    recentPostAt: Model.foreignUrn('com.linkedin.common.Time'),

    /**
     * @property memberCount
     * This represents the number of members in this group.
     */
    memberCount: Model.INT,

    modelType: "entities/group/next-group"
  }
}
