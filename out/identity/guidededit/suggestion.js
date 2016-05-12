import Model from 'app/api/NotTerribleModel';
import SuggestionUrn from "app/models/common/suggestion-urn";
import Skill from "app/models/identity/profile/skill";
import Certification from "app/models/identity/profile/certification";
import Patent from "app/models/identity/profile/patent";
import Publication from "app/models/identity/profile/publication";
import SuggestionSourceType from "app/models/identity/guidededit/suggestion-source-type";
import Base64EncodedTrackingId from "app/models/common/base64-encoded-tracking-id";

export default class Suggestion extends Model {
  static schema = {
    /**
     * @property entityUrn
     * Identifier for the Suggestion.
     */
    entityUrn: SuggestionUrn,

    /**
     * @property rawProfileElement
     * Urn which uniquely identifies suggested content. To be used for tracking.
     */
    rawProfileElement: Model.foreignUrn('com.linkedin.common.RawProfileElementUrn'),

    /**
     * @property suggestedContent
     * Suggested data to be surfaced to a user as a suggested edit.
     */
    suggestedContent: Model.oneOf(Skill, Certification, Patent, Publication),

    /**
     * @property sourceType
     * Type of the suggestion source.
     */
    sourceType: SuggestionSourceType,

    /**
     * @property inferredMembers
     * MemberUrns of the Co-Authors who have added this suggestion, which is then inferred for current member.
     */
    inferredMembers: Model.foreignUrn('com.linkedin.common.MemberUrn'),

    /**
     * @property flowTrackingId
     * A unique id generated for each suggested edit flow.
     */
    flowTrackingId: Base64EncodedTrackingId,

    modelType: "identity/guidededit/suggestion"
  }
}
