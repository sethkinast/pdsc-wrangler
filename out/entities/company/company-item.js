import Model from 'app/api/NotTerribleModel';
import ItemInfo from "app/models/entities/common/item-info";
import CompanyDetails from "app/models/entities/company/company-details";
import Showcases from "app/models/entities/company/showcases";
import SimilarCompanies from "app/models/entities/company/similar-companies";
import CareerAbout from "app/models/entities/company/career-about";
import CareerAbout2 from "app/models/entities/company/career-about2";
import CareerTitles from "app/models/entities/company/career-titles";
import CareerEmployeeQuotes from "app/models/entities/company/career-employee-quotes";
import CareerResources from "app/models/entities/company/career-resources";
import Description from "app/models/entities/common/description";
import MiniJobsCollection from "app/models/entities/common/mini-jobs-collection";
import MiniProfilesCollection from "app/models/entities/common/mini-profiles-collection";
import UpdateCollection from "app/models/entities/common/update-collection";
import InCommonCompanyCollection from "app/models/entities/incommon/in-common-company-collection";
import InCommonPersonCollection from "app/models/entities/incommon/in-common-person-collection";
import InCommonSchoolCollection from "app/models/entities/incommon/in-common-school-collection";

export default class CompanyItem extends Model {
  static schema = {
    /**
     * @property itemInfo
     * The basic information about a card.
     */
    itemInfo: ItemInfo,

    /**
     * @property item
     * The union of all the possible items/cards appearing on the company page.
     */
    item: Model.oneOf(CompanyDetails, Showcases, SimilarCompanies, CareerAbout, CareerAbout2, CareerTitles, CareerEmployeeQuotes, CareerResources, Description, MiniJobsCollection, MiniProfilesCollection, UpdateCollection, InCommonCompanyCollection, InCommonPersonCollection, InCommonSchoolCollection),

    modelType: "entities/company/company-item"
  }
}
