import Model from 'app/api/NotTerribleModel';
import TextAdCreativeVariables from "app/models/identity/creatives/text-ad-creative-variables";

export default class MediaCreativeVariables extends Model {
  static schema = Object.assign({}, TextAdCreativeVariables.schema, {
    /**
     * @property media
     * Media for the creative
     */
    media: Model.foreignUrn('com.linkedin.common.Uri'),

    modelType: "identity/creatives/media-creative-variables"
  })
}
