import Model from 'app/api/NotTerribleModel';
import ProfileUrn from "app/models/common/profile-urn";
import IndustryUrn from "app/models/common/industry-urn";
import ProfileLocation from "app/models/identity/profile/profile-location";
import BackgroundImage from "app/models/identity/profile/background-image";
import Picture from "app/models/identity/profile/picture";

export default class NormProfile extends Model {
  static schema = {
    /**
     * @property entityUrn
     * Identifier for this profile
     */
    entityUrn: ProfileUrn,

    /**
     * @property firstName
     * First name of a member
     */
    firstName: Model.STRING,

    /**
     * @property lastName
     * Last name of a member
     */
    lastName: Model.STRING,

    /**
     * @property maidenName
     * Maiden name of a member.
     */
    maidenName: Model.STRING,

    /**
     * @property headline
     * Headline of this member.
     */
    headline: Model.STRING,

    /**
     * @property industryName
     * Localizable name of industry as entered by the member
     */
    industryName: Model.STRING,

    /**
     * @property industryUrn
     * User-selected reference from typeahead.
     */
    industryUrn: IndustryUrn,

    /**
     * @property location
     * Member's current location.
     */
    location: ProfileLocation,

    /**
     * @property backgroundImage
     * The background image information for a profile.
     */
    backgroundImage: BackgroundImage,

    /**
     * @property pictureInfo
     * Profile picture information for a profile.
     */
    pictureInfo: Picture,

    /**
     * @property phoneticFirstName
     * Phonetic representation of the first name of a member.
     */
    phoneticFirstName: Model.STRING,

    /**
     * @property phoneticLastName
     * Phonetic representation of the last name of a member.
     */
    phoneticLastName: Model.STRING,

    /**
     * @property contactInstructions
     * Notes on how to contact the member.
     */
    contactInstructions: Model.STRING,

    /**
     * @property interests
     * Write up of interests that a member wishes to display on the profile.
     */
    interests: Model.STRING,

    /**
     * @property address
     * Address of the member to display on the profile.
     */
    address: Model.STRING,

    /**
     * @property birthDate
     * The birth date of the member.
     */
    birthDate: Model.foreignUrn('com.linkedin.common.Date'),

    /**
     * @property summary
     * Summary provided by the member.
     */
    summary: Model.STRING,

    modelType: "identity/profile/norm-profile"
  }
}
