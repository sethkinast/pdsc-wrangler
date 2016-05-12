import Model from 'app/api/NotTerribleModel';
import ItemInfo from "app/models/entities/common/item-info";
import NextSchoolsCollection from "app/models/entities/school/next-schools-collection";
import SchoolDetails from "app/models/entities/school/school-details";
import NotableAlumni from "app/models/entities/school/notable-alumni";
import SchoolRankings from "app/models/entities/school/school-rankings";
import SchoolFacets from "app/models/entities/school/school-facets";
import FinancialInformation from "app/models/entities/school/financial-information";
import StudentsAndFaculty from "app/models/entities/school/students-and-faculty";
import AlumniCompaniesCollection from "app/models/entities/school/alumni-companies-collection";
import Description from "app/models/entities/common/description";
import MiniProfilesCollection from "app/models/entities/common/mini-profiles-collection";

export default class SchoolItem extends Model {
  static schema = {
    /**
     * @property itemInfo
     * The basic information about a card/item.
     */
    itemInfo: ItemInfo,

    /**
     * @property item
     * The union of all the possible cards/items appearing on a school page.
     */
    item: Model.oneOf(NextSchoolsCollection, SchoolDetails, NotableAlumni, SchoolRankings, SchoolFacets, FinancialInformation, StudentsAndFaculty, AlumniCompaniesCollection, Description, MiniProfilesCollection),

    modelType: "entities/school/school-item"
  }
}
