import Model from 'app/api/NotTerribleModel';
import CompanyItem from "app/models/entities/company/company-item";
import ShowcaseItemType from "app/models/entities/company/showcase-item-type";
import SchoolItem from "app/models/entities/school/school-item";
import JobItem from "app/models/entities/job/job-item";
import GroupItem from "app/models/entities/group/group-item";

export default class Section extends Model {
  static schema = {
    /**
     * @property rank
     * This has the rank of this section which can be used to order this section/tab. TODO: remove this or make it required.
     */
    rank: Model.INT,

    /**
     * @property items
     * A list of items in a section.
     */
    items: Model.oneOf(CompanyItem, ShowcaseItemType, SchoolItem, JobItem, GroupItem),

    modelType: "entities/common/section"
  }
}
