import Model from 'app/api/NotTerribleModel';
import NativeArticle from "app/models/publishing/native-article";
import FirstPartyArticle from "app/models/publishing/first-party-article";

export default class FirstPartyContent extends Model {
  static schema = {
    /**
     * @property content
     * Union of types of 1st party content to display.
     */
    content: Model.oneOf(NativeArticle, FirstPartyArticle),

    /**
     * @property publishedAt
     * Time when the content was published.
     */
    publishedAt: Model.foreignUrn('com.linkedin.common.Time'),

    /**
     * @property updatedAt
     * Time when the content was last updated.
     */
    updatedAt: Model.foreignUrn('com.linkedin.common.Time'),

    modelType: "publishing/first-party-content"
  }
}
