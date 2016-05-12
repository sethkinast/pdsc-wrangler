import Model from 'app/api/NotTerribleModel';
import TrackingObject from "app/models/common/tracking-object";
import MiniGroupUrn from "app/models/common/mini-group-urn";
import Image from "app/models/common/image";

export default class MiniGroup extends Model {
  static schema = Object.assign({}, TrackingObject.schema, {
    /**
     * @property entityUrn
     * Identifier for this mini group.
     */
    entityUrn: MiniGroupUrn,

    /**
     * @property groupName
     * Name of the group.
     */
    groupName: Model.STRING,

    /**
     * @property groupDescription
     * The description of the group.
     */
    groupDescription: Model.STRING,

    /**
     * @property logo
     * Logo image of the group.
     */
    logo: Image,

    /**
     * @property recentActivityCount
     * The number of recent activities
     */
    recentActivityCount: Model.INT,

    modelType: "entities/shared/mini-group"
  })
}
