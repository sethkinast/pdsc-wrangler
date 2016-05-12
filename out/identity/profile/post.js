import Model from 'app/api/NotTerribleModel';
import ProfilePostUrn from "app/models/common/profile-post-urn";
import Image from "app/models/common/image";

export default class Post extends Model {
  static schema = {
    /**
     * @property entityUrn
     * Identifier of this post
     */
    entityUrn: ProfilePostUrn,

    /**
     * @property title
     * The title of the post.
     */
    title: Model.STRING,

    /**
     * @property permaLink
     * A string identifying the link to the article.
     */
    permaLink: Model.STRING,

    /**
     * @property image
     * The article's cover image.
     */
    image: Image,

    /**
     * @property createdDate
     * The date on which the article was created.
     */
    createdDate: Model.foreignUrn('com.linkedin.common.Date'),

    /**
     * @property postedDate
     * The date on which the article was posted.
     */
    postedDate: Model.foreignUrn('com.linkedin.common.Date'),

    /**
     * @property numLikes
     * The number of likes that this post has.
     */
    numLikes: Model.INT,

    /**
     * @property numViews
     * The number of views that this post has.
     */
    numViews: Model.INT,

    /**
     * @property numComments
     * The number of comments that this post has.
     */
    numComments: Model.INT,

    modelType: "identity/profile/post"
  }
}
