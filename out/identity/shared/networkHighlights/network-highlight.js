import Model from 'app/api/NotTerribleModel';
import DescriptiveCompany from "app/models/identity/shared/networkHighlights/descriptive-company";
import DescriptiveSchool from "app/models/identity/shared/networkHighlights/descriptive-school";
import DescriptiveRegion from "app/models/identity/shared/networkHighlights/descriptive-region";
import DescriptiveSeniorCompany from "app/models/identity/shared/networkHighlights/descriptive-senior-company";
import NetworkHighlightReason from "app/models/identity/shared/networkHighlights/network-highlight-reason";

export default class NetworkHighlight extends Model {
  static schema = {
    /**
     * @property detail
     * More detailed information about the highlight
     */
    detail: Model.oneOf(DescriptiveCompany, DescriptiveSchool, DescriptiveRegion, DescriptiveSeniorCompany),

    /**
     * @property reason
     * Reason why this NetworkHighlight is relevant.
     */
    reason: NetworkHighlightReason,

    modelType: "identity/shared/networkHighlights/network-highlight"
  }
}
