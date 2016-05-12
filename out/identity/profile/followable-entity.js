import Model from 'app/api/NotTerribleModel';
import MiniProfile from "app/models/identity/shared/mini-profile";
import MiniCompany from "app/models/entities/shared/mini-company";
import MiniSchool from "app/models/entities/shared/mini-school";
import MiniGroup from "app/models/entities/shared/mini-group";
import Channel from "app/models/growth/interests/channel";
import FollowingInfo from "app/models/common/following-info";

export default class FollowableEntity extends Model {
  static schema = {
    /**
     * @property entity
     * The followable thing.
     */
    entity: Model.oneOf(MiniProfile, MiniCompany, MiniSchool, MiniGroup, Channel),

    /**
     * @property followingInfo
     * Followers information for this entity, including whether the viewer is following this entity.
     */
    followingInfo: FollowingInfo,

    modelType: "identity/profile/followable-entity"
  }
}
