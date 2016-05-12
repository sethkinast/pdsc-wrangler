import Model from 'app/api/NotTerribleModel';
import CompanyItemType from "app/models/entities/company/company-item-type";
import ShowcaseItemType from "app/models/entities/company/showcase-item-type";
import SchoolItemType from "app/models/entities/school/school-item-type";
import GroupItemType from "app/models/entities/group/group-item-type";
import JobItemType from "app/models/entities/job/job-item-type";
import Base64EncodedTrackingId from "app/models/common/base64-encoded-tracking-id";

export default class ItemInfo extends Model {
  static schema = {
    /**
     * @property itemType
     * The union of all entities (Company, Group, Showcase, etc.) item types.
     */
    itemType: Model.oneOf(CompanyItemType, ShowcaseItemType, SchoolItemType, GroupItemType, JobItemType),

    /**
     * @property rank
     * This has the information about the ranking of the item in a section/tab. TODO: remove this or make it required.
     */
    rank: Model.INT,

    /**
     * @property trackingId
     * A unique id which represents this particular instance of an entity.
     */
    trackingId: Base64EncodedTrackingId,

    modelType: "entities/common/item-info"
  }
}
