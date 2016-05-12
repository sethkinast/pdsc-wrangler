import Model from 'app/api/NotTerribleModel';
import ControlActions from "app/models/feed/control-actions";
import CompanyActor from "app/models/feed/company-actor";
import MemberActor from "app/models/feed/member-actor";
import SocialActor from "app/models/feed/social-actor";
import AnnotatedText from "app/models/feed/shared/annotated-text";
import ShareArticle from "app/models/feed/share-article";

export default class MentionedInNewsUpdate extends Model {
  static schema = Object.assign({}, ControlActions.schema, {
    /**
     * @property urn
     * backend Urn for this update.
     */
    urn: Model.STRING,

    /**
     * @property mentionedActor
     * **DEPRECATED** The actor that was mentioned in the article.
     */
    mentionedActor: Model.oneOf(CompanyActor, MemberActor),

    /**
     * @property mentionedEntity
     * The entity : school, company, member that was mentioned in the article.
     */
    mentionedEntity: SocialActor,

    /**
     * @property mentionedActorSnippet
     * A snippet of the article text where the actor was mentioned
     */
    mentionedActorSnippet: Model.STRING,

    /**
     * @property header
     * **DEPRECATED** Header to display for this update, e.g Iosef Kaver was mentioned in the news.
     */
    header: AnnotatedText,

    /**
     * @property footer
     * **DEPRECATED** Footer to display for this update, e.g Reach out to Iosef.
     */
    footer: AnnotatedText,

    /**
     * @property article
     * The entity, the article in which the reason was mentioned.
     */
    article: ShareArticle,

    modelType: "feed/mentioned-in-news-update"
  })
}
