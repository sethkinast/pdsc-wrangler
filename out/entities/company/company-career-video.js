import Model from 'app/api/NotTerribleModel';
import CompanyCareerVideoType from "app/models/entities/company/company-career-video-type";

export default class CompanyCareerVideo extends Model {
  static schema = {
    /**
     * @property videoType
     * Type of embed code for video
     */
    videoType: CompanyCareerVideoType,

    /**
     * @property videoCode
     * For Youtube, this is code to embed video. For Embedly, this is the video url on Embedly
     */
    videoCode: Model.STRING,

    modelType: "entities/company/company-career-video"
  }
}
