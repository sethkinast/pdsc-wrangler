import Model from 'app/api/NotTerribleModel';
import CustomCreativeVariables from "app/models/identity/creatives/custom-creative-variables";
import MediaCreativeVariables from "app/models/identity/creatives/media-creative-variables";
import TextAdCreativeVariables from "app/models/identity/creatives/text-ad-creative-variables";
import SSUCreativeVariables from "app/models/identity/creatives/s-s-u-creative-variables";
import SjymbiiCreativeVariables from "app/models/identity/creatives/sjymbii-creative-variables";
import FollowCompanyCreativeVariables from "app/models/identity/creatives/follow-company-creative-variables";
import FollowCreativeVariables from "app/models/identity/creatives/follow-creative-variables";
import SponsoredInMailCreativeVariables from "app/models/identity/creatives/sponsored-in-mail-creative-variables";
import SlideshareLeadgenCreativeVariables from "app/models/identity/creatives/slideshare-leadgen-creative-variables";
import WorkWithUsCreativeVariables from "app/models/identity/creatives/work-with-us-creative-variables";
import PictureYourselfJobCreativeVariables from "app/models/identity/creatives/picture-yourself-job-creative-variables";

export default class CreativeVariables extends Model {
  static schema = {
    /**
     * @property href
     * URI destination to forward on a click
     */
    href: Model.foreignUrn('com.linkedin.common.Uri'),

    /**
     * @property subType
     * Subtype fields
     */
    subType: Model.oneOf(CustomCreativeVariables, MediaCreativeVariables, TextAdCreativeVariables, SSUCreativeVariables, SjymbiiCreativeVariables, FollowCompanyCreativeVariables, FollowCreativeVariables, SponsoredInMailCreativeVariables, SlideshareLeadgenCreativeVariables, WorkWithUsCreativeVariables, PictureYourselfJobCreativeVariables),

    modelType: "identity/creatives/creative-variables"
  }
}
