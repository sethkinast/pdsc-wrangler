import Model from 'app/api/NotTerribleModel';
import WorkWithUsJobInfo from "app/models/identity/creatives/work-with-us-job-info";
import ViewerInfo from "app/models/identity/creatives/viewer-info";
import BizCompany from "app/models/identity/creatives/company/biz-company";

export default class PictureYourselfJobCreativeRenderingVariables extends Model {
  static schema = {
    /**
     * @property jobs
     * Jobs matching the viewer.
     */
    jobs: WorkWithUsJobInfo,

    /**
     * @property viewerInfo
     * Information about the viewer.  Note this is not the regular profile object but rather an ads specific object with data needed by the ad.
     */
    viewerInfo: ViewerInfo,

    /**
     * @property companyInfo
     * Company information needed for rendering the ad.
     */
    companyInfo: BizCompany,

    modelType: "identity/creatives/picture-yourself-job-creative-rendering-variables"
  }
}
