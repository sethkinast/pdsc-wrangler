import Model from 'app/api/NotTerribleModel';
import WelcomeCard from "app/models/premium/onboarding/welcome-card";
import JobCard from "app/models/premium/onboarding/job-card";
import InMailCard from "app/models/premium/onboarding/in-mail-card";
import FeaturedApplicantCard from "app/models/premium/onboarding/featured-applicant-card";
import WvmpCard from "app/models/premium/onboarding/wvmp-card";
import SearchCard from "app/models/premium/onboarding/search-card";
import LaunchCard from "app/models/premium/onboarding/launch-card";

export default class PremiumOnboardingCard extends Model {
  static schema = {
    /**
     * @property card
     * The actual onboarding card, typed as a union of all onboarding card types.
     */
    card: Model.oneOf(WelcomeCard, JobCard, InMailCard, FeaturedApplicantCard, WvmpCard, SearchCard, LaunchCard),

    modelType: "premium/onboarding/premium-onboarding-card"
  }
}
