import Model from 'app/api/NotTerribleModel';
import CareerImage from "app/models/entities/company/career-image";
import CareerVideo from "app/models/entities/company/career-video";
import CareerSlide from "app/models/entities/company/career-slide";

export default class CareerRichMedia extends Model {
  static schema = {
    /**
     * @property content
     * Union of possible career rich media content.
     */
    content: Model.oneOf(CareerImage, CareerVideo, CareerSlide),

    modelType: "entities/company/career-rich-media"
  }
}
