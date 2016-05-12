import Model from 'app/api/NotTerribleModel';
import Trackable from "app/models/common/trackable";
import RelPeopleYouMayKnowUrn from "app/models/common/rel-people-you-may-know-urn";
import MiniProfile from "app/models/identity/shared/mini-profile";
import GuestContact from "app/models/growth/abi/guest-contact";

export default class PeopleYouMayKnow extends Model {
  static schema = Object.assign({}, Trackable.schema, {
    /**
     * @property entityUrn
     * Identifier of this Pymk
     */
    entityUrn: RelPeopleYouMayKnowUrn,

    /**
     * @property entity
     * A Pymk entity that represents either a member or a guest identified using email or a phonenumber.
     */
    entity: Model.oneOf(MiniProfile, GuestContact),

    modelType: "relationships/shared/pymk/people-you-may-know"
  })
}
