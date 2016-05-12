import Model from 'app/api/NotTerribleModel';

export default class SignedEmbed extends Model {
  static schema = {
    /**
     * @property universalEmbed
     * All allowed embeds example youtube/vimeo except SlideShare are universal embeds.
     */
    universalEmbed: Model.BOOL,

    /**
     * @property embedHtml
     * Sanitized HTML containing embed code with signed URL pointing back to API server to get embed to display.
     */
    embedHtml: Model.STRING,

    modelType: "publishing/signed-embed"
  }
}
