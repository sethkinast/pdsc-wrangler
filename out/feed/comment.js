import Model from 'app/api/NotTerribleModel';
import CommentUrn from "app/models/common/comment-urn";
import SocialActor from "app/models/feed/social-actor";
import AnnotatedText from "app/models/feed/shared/annotated-text";
import SocialDetail from "app/models/feed/social-detail";
import Insight from "app/models/feed/insight";
import CommentAction from "app/models/feed/comment-action";

export default class Comment extends Model {
  static schema = {
    /**
     * @property urn
     * backend Urn for this comment.
     */
    urn: Model.STRING,

    /**
     * @property entityUrn
     * Voyager specific URN for this comment.
     */
    entityUrn: CommentUrn,

    /**
     * @property commenter
     * The commenter of the comment.
     */
    commenter: SocialActor,

    /**
     * @property comment
     * The commentary.
     */
    comment: AnnotatedText,

    /**
     * @property createdTime
     * The created time of the comment.
     */
    createdTime: Model.foreignUrn('com.linkedin.common.Time'),

    /**
     * @property socialDetail
     * The social detail of the comment.
     */
    socialDetail: SocialDetail,

    /**
     * @property threadId
     * The id of the parent thread this comment belongs to
     */
    threadId: Model.STRING,

    /**
     * @property index
     * Information about where this comment fits in all comments when ordered by time oldest first.
     */
    index: Model.INT,

    /**
     * @property insight
     * Why did we show you this comment?
     */
    insight: Insight,

    /**
     * @property canDelete
     * **DEPRECATED** can the user delete this comment? Use the existence of CommentAction Delete instead
     */
    canDelete: Model.BOOL,

    /**
     * @property actions
     * A list of possible actions on this comment.
     */
    actions: CommentAction,

    modelType: "feed/comment"
  }
}
