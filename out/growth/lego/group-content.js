import Model from 'app/api/NotTerribleModel';
import WidgetContent from "app/models/growth/lego/widget-content";

export default class GroupContent extends Model {
  static schema = {
    /**
     * @property groupId
     * The Lego group id.
     */
    groupId: Model.STRING,

    /**
     * @property widgets
     * Widgets to be shown.
     */
    widgets: WidgetContent,

    modelType: "growth/lego/group-content"
  }
}
