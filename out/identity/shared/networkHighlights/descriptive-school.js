import Model from 'app/api/NotTerribleModel';
import MiniSchool from "app/models/entities/shared/mini-school";
import HighlightsMiniProfile from "app/models/identity/shared/highlights-mini-profile";

export default class DescriptiveSchool extends Model {
  static schema = {
    /**
     * @property school
     * Brief information about the school.
     */
    school: MiniSchool,

    /**
     * @property numConnections
     * Number of connections who went to this school.
     */
    numConnections: Model.INT,

    /**
     * @property connections
     * A list of connections, upto a maximum of 10, that went to this school.
     */
    connections: HighlightsMiniProfile,

    modelType: "identity/shared/networkHighlights/descriptive-school"
  }
}
