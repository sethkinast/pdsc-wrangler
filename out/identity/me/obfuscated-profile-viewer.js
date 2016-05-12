import Model from 'app/api/NotTerribleModel';
import SearchQuery from "app/models/search/search-query";
import Occupation from "app/models/identity/me/occupation";

export default class ObfuscatedProfileViewer extends Model {
  static schema = {
    /**
     * @property obfuscationString
     * String used to obfuscate the viewer.
     */
    obfuscationString: Model.STRING,

    /**
     * @property searchQuery
     * The query needed to perform a search for this obfuscated member.
     */
    searchQuery: SearchQuery,

    /**
     * @property occupation
     * Viewer's occupation for use in the card headline.
     */
    occupation: Occupation,

    modelType: "identity/me/obfuscated-profile-viewer"
  }
}
