import Model from 'app/api/NotTerribleModel';
import TreasuryMediaUrn from "app/models/common/treasury-media-urn";
import MediaProxyImage from "app/models/common/media-proxy-image";
import Video from "app/models/identity/profile/treasury/video";
import RichText from "app/models/identity/profile/treasury/rich-text";
import Link from "app/models/identity/profile/treasury/link";

export default class TreasuryMedia extends Model {
  static schema = {
    /**
     * @property entityUrn
     * Identifier for this treasury media.
     */
    entityUrn: TreasuryMediaUrn,

    /**
     * @property customTitle
     * User-defined title for this treasury media
     */
    customTitle: Model.STRING,

    /**
     * @property customDescription
     * User-defined description for this treasury media
     */
    customDescription: Model.STRING,

    /**
     * @property title
     * Generated title
     */
    title: Model.STRING,

    /**
     * @property description
     * Generated description
     */
    description: Model.STRING,

    /**
     * @property images
     * Media proxy images associated with this treasury media
     */
    images: MediaProxyImage,

    /**
     * @property data
     * This is a union field. It could contain either an image or a video or a rich text or a link
     */
    data: Model.oneOf(Video, MediaProxyImage, RichText, Link),

    /**
     * @property sectionIds
     * Education or position sections, used to determine which sections the treasury item is under e.g. ['position:123'].  This field is only populated when finder is used
     */
    sectionIds: Model.STRING,

    modelType: "identity/profile/treasury/treasury-media"
  }
}
