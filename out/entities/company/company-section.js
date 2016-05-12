import Model from 'app/api/NotTerribleModel';
import CompanyItem from "app/models/entities/company/company-item";
import SectionInfo from "app/models/entities/common/section-info";

export default class CompanySection extends Model {
  static schema = {
    /**
     * @property items
     * A list of Company specific items in this company section.
     */
    items: CompanyItem,

    /**
     * @property sectionInfo
     * This has all the information about a section.
     */
    sectionInfo: SectionInfo,

    modelType: "entities/company/company-section"
  }
}
