import Model from 'app/api/NotTerribleModel';
import ItemInfo from "app/models/entities/common/item-info";
import NextGroupsCollection from "app/models/entities/group/next-groups-collection";
import Description from "app/models/entities/common/description";

export default class GroupItem extends Model {
  static schema = {
    /**
     * @property itemInfo
     * The basic information about a card/item.
     */
    itemInfo: ItemInfo,

    /**
     * @property item
     * The union of all the possible cards/items appearing on a group page.
     */
    item: Model.oneOf(NextGroupsCollection, Description),

    modelType: "entities/group/group-item"
  }
}
