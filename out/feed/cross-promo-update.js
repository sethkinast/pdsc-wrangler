import Model from 'app/api/NotTerribleModel';
import ControlActions from "app/models/feed/control-actions";
import AnnotatedText from "app/models/feed/shared/annotated-text";
import AppActor from "app/models/feed/app-actor";
import ShareArticle from "app/models/feed/share-article";
import ShareJob from "app/models/feed/share-job";

export default class CrossPromoUpdate extends Model {
  static schema = Object.assign({}, ControlActions.schema, {
    /**
     * @property legoTrackingToken
     * ***DEPRECATED*** Lego tracking token(raw token) for this widget
     */
    legoTrackingToken: Model.STRING,

    /**
     * @property legoTrackingId
     * Lego tracking Id (short token) for this widget
     */
    legoTrackingId: Model.foreignUrn('com.linkedin.common.TrackingId'),

    /**
     * @property header
     * Social proof header for the promo
     */
    header: AnnotatedText,

    /**
     * @property actor
     * The promoted application
     */
    actor: AppActor,

    /**
     * @property text
     * The promotion main text
     */
    text: AnnotatedText,

    /**
     * @property content
     * The main bolt-on for this promo, which should portray the value prop of the promoted app
     */
    content: Model.oneOf(ShareArticle, ShareJob),

    modelType: "feed/cross-promo-update"
  })
}
