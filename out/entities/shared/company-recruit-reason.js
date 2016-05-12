import Model from 'app/api/NotTerribleModel';
import MiniCompany from "app/models/entities/shared/mini-company";
import EntitiesMiniProfile from "app/models/entities/shared/entities-mini-profile";

export default class CompanyRecruitReason extends Model {
  static schema = {
    /**
     * @property currentCompany
     * The company the coworkers have in common (the member's most recent company).
     */
    currentCompany: MiniCompany,

    /**
     * @property totalNumberOfPastCoworkers
     * Total number of people who used to work at the member's current company who now work at this company (or the company that posted this jobPosting).
     */
    totalNumberOfPastCoworkers: Model.INT,

    /**
     * @property coworkers
     * Up to ten members of people who used to work at the member's current company who now work at this company (or the company that posted this jobPosting), ordered by most recent transition first.
     */
    coworkers: EntitiesMiniProfile,

    modelType: "entities/shared/company-recruit-reason"
  }
}
