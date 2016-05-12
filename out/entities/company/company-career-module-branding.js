import Model from 'app/api/NotTerribleModel';
import Link from "app/models/common/link";
import CompanyCareerModuleImage from "app/models/entities/company/company-career-module-image";
import CompanyCareerVideo from "app/models/entities/company/company-career-video";
import CompanyCareerSlidesCode from "app/models/entities/company/company-career-slides-code";

export default class CompanyCareerModuleBranding extends Model {
  static schema = {
    /**
     * @property title
     * Title of section.
     */
    title: Model.STRING,

    /**
     * @property text
     * Text written by the company about themselves.
     */
    text: Model.STRING,

    /**
     * @property links
     * A list of links with their corresponding anchor text.
     */
    links: Link,

    /**
     * @property media
     * Embedded media, either an image, a video, or a slideshare.
     */
    media: Model.oneOf(CompanyCareerModuleImage, CompanyCareerVideo, CompanyCareerSlidesCode),

    modelType: "entities/company/company-career-module-branding"
  }
}
