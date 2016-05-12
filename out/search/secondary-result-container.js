import Model from 'app/api/NotTerribleModel';
import SecondaryResult from "app/models/search/secondary-result";

export default class SecondaryResultContainer extends Model {
  static schema = {
    /**
     * @property secondaryResults
     * List of Secondary Search Results
     */
    secondaryResults: SecondaryResult,

    modelType: "search/secondary-result-container"
  }
}
