import Model from 'app/api/NotTerribleModel';
import CareerVideoType from "app/models/entities/company/career-video-type";

export default class CareerVideo extends Model {
  static schema = {
    /**
     * @property videoType
     * Type of embed code for video
     */
    videoType: CareerVideoType,

    /**
     * @property videoCode
     * For Youtube, this is code to embed video. For Embedly, this is the video url on Embedly
     */
    videoCode: Model.STRING,

    /**
     * @property richMediaUrl
     * Complete URL for the video.
     */
    richMediaUrl: Model.foreignUrn('com.linkedin.common.Url'),

    modelType: "entities/company/career-video"
  }
}
