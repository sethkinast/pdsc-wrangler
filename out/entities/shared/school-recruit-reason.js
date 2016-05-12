import Model from 'app/api/NotTerribleModel';
import MiniSchool from "app/models/entities/shared/mini-school";
import EntitiesMiniProfile from "app/models/entities/shared/entities-mini-profile";

export default class SchoolRecruitReason extends Model {
  static schema = {
    /**
     * @property mostRecentSchool
     * The school that the alumni have in common with the viewer (the viewer's most recent school).
     */
    mostRecentSchool: MiniSchool,

    /**
     * @property totalNumberOfAlumni
     * Total number of people who are alumni of the viewer's most recent school who now work at this company (or the company that posted this jobPosting)
     */
    totalNumberOfAlumni: Model.INT,

    /**
     * @property alumniOfMostRecentSchool
     * Up to ten members who are alumni of the viewer's most recent school who now work at this company (or the company that posted this jobPosting), ordered by most recent transition first.
     */
    alumniOfMostRecentSchool: EntitiesMiniProfile,

    modelType: "entities/shared/school-recruit-reason"
  }
}
