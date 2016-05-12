import Model from 'app/api/NotTerribleModel';
import UrlPreviewData from "app/models/feed/urlpreview/url-preview-data";

export default class SuggestedArticle extends Model {
  static schema = {
    /**
     * @property data
     * Data of the suggested article used to pre-populate a share action.
     */
    data: UrlPreviewData,

    modelType: "identity/me/suggestedactions/suggested-article"
  }
}
