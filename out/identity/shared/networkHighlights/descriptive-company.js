import Model from 'app/api/NotTerribleModel';
import MiniCompany from "app/models/entities/shared/mini-company";
import HighlightsMiniProfile from "app/models/identity/shared/highlights-mini-profile";

export default class DescriptiveCompany extends Model {
  static schema = {
    /**
     * @property company
     * Brief information about the company.
     */
    company: MiniCompany,

    /**
     * @property numConnections
     * Number of connections who work in the company.
     */
    numConnections: Model.INT,

    /**
     * @property connections
     * A list of connections, upto a maximum of 10, that work at this company.
     */
    connections: HighlightsMiniProfile,

    modelType: "identity/shared/networkHighlights/descriptive-company"
  }
}
