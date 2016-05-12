import Model from 'app/api/NotTerribleModel';
import UrlPreviewData from "app/models/feed/urlpreview/url-preview-data";

export default class PreviewCreationSuccessful extends Model {
  static schema = {
    /**
     * @property data
     * Preview data for this url.
     */
    data: UrlPreviewData,

    modelType: "feed/urlpreview/preview-creation-successful"
  }
}
