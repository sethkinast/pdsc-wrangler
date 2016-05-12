import Model from 'app/api/NotTerribleModel';
import GroupUrn from "app/models/common/group-urn";
import BasicGroupInfo from "app/models/entities/group/basic-group-info";
import GroupType from "app/models/entities/group/group-type";
import GroupMembershipInfo from "app/models/entities/shared/group-membership-info";
import Image from "app/models/common/image";
import Color from "app/models/common/color";
import MiniProfileWithDistance from "app/models/entities/shared/mini-profile-with-distance";
import GroupSections from "app/models/entities/group/group-sections";
import EntityInfo from "app/models/entities/common/entity-info";

export default class Group extends Model {
  static schema = {
    /**
     * @property entityUrn
     * Identifier for this group.
     */
    entityUrn: GroupUrn,

    /**
     * @property basicGroupInfo
     * Basic information to be able to build a cell that will link to the group entity page.
     */
    basicGroupInfo: BasicGroupInfo,

    /**
     * @property groupType
     * The type of the group.
     */
    groupType: GroupType,

    /**
     * @property membershipInfo
     * Information about the membership of the viewer in the group.
     */
    membershipInfo: GroupMembershipInfo,

    /**
     * @property description
     * Description of the group.
     */
    description: Model.STRING,

    /**
     * @property heroImage
     * Hero image of the group (cover photo).
     */
    heroImage: Image,

    /**
     * @property backgroundColor
     * The preferred background color for the group.
     */
    backgroundColor: Color,

    /**
     * @property rules
     * Group rules.
     */
    rules: Model.STRING,

    /**
     * @property owner
     * The owner of the group.
     */
    owner: MiniProfileWithDistance,

    /**
     * @property sections
     * The possible sections/tabs on a group page.
     */
    sections: GroupSections,

    /**
     * @property entityInfo
     * It has the specific information about this entity.
     */
    entityInfo: EntityInfo,

    modelType: "entities/group/group"
  }
}
