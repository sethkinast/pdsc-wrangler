import Model from 'app/api/NotTerribleModel';
import GroupContent from "app/models/growth/lego/group-content";

export default class SlotContent extends Model {
  static schema = {
    /**
     * @property slotId
     * The Lego slot id.
     */
    slotId: Model.STRING,

    /**
     * @property groups
     * Groups of widgets to be shown in this slot.
     */
    groups: GroupContent,

    modelType: "growth/lego/slot-content"
  }
}
