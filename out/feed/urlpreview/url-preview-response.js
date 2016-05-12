import Model from 'app/api/NotTerribleModel';
import PreviewCreationSuccessful from "app/models/feed/urlpreview/preview-creation-successful";
import PreviewCreationInProgress from "app/models/feed/urlpreview/preview-creation-in-progress";
import PreviewCreationFailed from "app/models/feed/urlpreview/preview-creation-failed";

export default class UrlPreviewResponse extends Model {
  static schema = {
    /**
     * @property value
     * A union of all possible responses to the UrlPreview task.
     */
    value: Model.oneOf(PreviewCreationSuccessful, PreviewCreationInProgress, PreviewCreationFailed),

    modelType: "feed/urlpreview/url-preview-response"
  }
}
