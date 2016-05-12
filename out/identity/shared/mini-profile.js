import Model from 'app/api/NotTerribleModel';
import TrackingObject from "app/models/common/tracking-object";
import MiniProfileUrn from "app/models/common/mini-profile-urn";
import Image from "app/models/common/image";

export default class MiniProfile extends Model {
  static schema = Object.assign({}, TrackingObject.schema, {
    /**
     * @property entityUrn
     * Identifier for this mini profile
     */
    entityUrn: MiniProfileUrn,

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
     * @property occupation
     * Occupation of the user. It is computed with the following rules: If the member has a position, it will be defaulted to his first position. If the member has an education, it will be defaulted as the first education. Lastly their headline will be used.
     */
    occupation: Model.STRING,

    /**
     * @property backgroundImage
     * Background image of this member. Note that this is optimized for quick display, hence it's low resolution and cropped by default. Fetch com.linkedin.voyager.identity.profile.BackgroundImage to display the full resolution.
     */
    backgroundImage: Image,

    /**
     * @property picture
     * Profile picture of this member. By default this is the cropped version.
     */
    picture: Image,

    /**
     * @property publicIdentifier
     * Public identifier of this member, whether it is the public profile id or the vanity name
     */
    publicIdentifier: Model.STRING,

    modelType: "identity/shared/mini-profile"
  })
}
