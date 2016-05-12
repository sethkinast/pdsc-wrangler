import Model from 'app/api/NotTerribleModel';
import WvmpSummaryInsightCard from "app/models/identity/me/wvmpOverview/wvmp-summary-insight-card";
import WvmpCompanyInsightCard from "app/models/identity/me/wvmpOverview/wvmp-company-insight-card";
import WvmpJobTitleInsightCard from "app/models/identity/me/wvmpOverview/wvmp-job-title-insight-card";
import WvmpSourceInsightCard from "app/models/identity/me/wvmpOverview/wvmp-source-insight-card";
import WvmpOnboardingCard from "app/models/identity/me/wvmpOverview/wvmp-onboarding-card";
import Base64EncodedTrackingId from "app/models/common/base64-encoded-tracking-id";

export default class WvmpInsightCard extends Model {
  static schema = {
    /**
     * @property value
     * Union for all insight cards used on the WVMP viewers card.
     */
    value: Model.oneOf(WvmpSummaryInsightCard, WvmpCompanyInsightCard, WvmpJobTitleInsightCard, WvmpSourceInsightCard, WvmpOnboardingCard),

    /**
     * @property trackingId
     * Unique tracking id for this instance of the insight card.
     */
    trackingId: Base64EncodedTrackingId,

    /**
     * @property objectUrn
     * Unique identifier for this insight card.
     */
    objectUrn: Model.STRING,

    modelType: "identity/me/wvmpOverview/wvmp-insight-card"
  }
}
