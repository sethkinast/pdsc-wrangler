import Model from 'app/api/NotTerribleModel';

export default class OnboardingLaunchResult extends Model {
  static schema = {
    /**
     * @property launchOnboarding
     * Whether new user onboarding should be launched for the logged-in member.
     */
    launchOnboarding: Model.BOOL,

    modelType: "growth/onboarding/onboarding-launch-result"
  }
}
