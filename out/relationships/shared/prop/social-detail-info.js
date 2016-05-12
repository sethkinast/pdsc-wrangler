import Model from 'app/api/NotTerribleModel';

export default class SocialDetailInfo extends Model {
  static schema = {
    /**
     * @property threadId
     * The id of the thread that the likes/comments belong to
     */
    threadId: Model.STRING,

    modelType: "relationships/shared/prop/social-detail-info"
  }
}
