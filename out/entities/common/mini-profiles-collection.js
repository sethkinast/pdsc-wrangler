import Model from 'app/api/NotTerribleModel';
import EntitiesMiniProfile from "app/models/entities/shared/entities-mini-profile";
import PagingInfo from "app/models/entities/common/paging-info";

export default class MiniProfilesCollection extends Model {
  static schema = {
    /**
     * @property items
     * A list of entities mini profiles.
     */
    items: EntitiesMiniProfile,

    /**
     * @property pagingInfo
     * The paging info for items.
     */
    pagingInfo: PagingInfo,

    modelType: "entities/common/mini-profiles-collection"
  }
}
