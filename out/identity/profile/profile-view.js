import Model from 'app/api/NotTerribleModel';
import ProfileViewUrn from "app/models/common/profile-view-urn";
import Profile from "app/models/identity/profile/profile";
import PositionView from "app/models/identity/profile/position-view";
import EducationView from "app/models/identity/profile/education-view";
import CertificationView from "app/models/identity/profile/certification-view";
import CourseView from "app/models/identity/profile/course-view";
import HonorView from "app/models/identity/profile/honor-view";
import LanguageView from "app/models/identity/profile/language-view";
import OrganizationView from "app/models/identity/profile/organization-view";
import PatentView from "app/models/identity/profile/patent-view";
import ProjectView from "app/models/identity/profile/project-view";
import PublicationView from "app/models/identity/profile/publication-view";
import SkillView from "app/models/identity/profile/skill-view";
import TestScoreView from "app/models/identity/profile/test-score-view";
import VolunteerExperienceView from "app/models/identity/profile/volunteer-experience-view";

export default class ProfileView extends Model {
  static schema = {
    /**
     * @property entityUrn
     * Identifier for this profile view, for caching purposes.
     */
    entityUrn: ProfileViewUrn,

    /**
     * @property profile
     * Basic Information about the profile.
     */
    profile: Profile,

    /**
     * @property primaryLocale
     * The interface locale used when the member is signing up for a LinkedIn account, as well as the default profile locale used when the member doesn't have a profile in a requested profile locale. TODO make this field required.
     */
    primaryLocale: Model.foreignUrn('com.linkedin.common.Locale'),

    /**
     * @property positionView
     * View of the positions of the profile, showing total count and the first X positions.
     */
    positionView: PositionView,

    /**
     * @property educationView
     * View of the educations of the profile, showing total count and the first X educations.
     */
    educationView: EducationView,

    /**
     * @property certificationView
     * View of the certifications of the profile, showing total count and the first X certifications.
     */
    certificationView: CertificationView,

    /**
     * @property courseView
     * View of the courses of the profile, showing total count and the first X courses.
     */
    courseView: CourseView,

    /**
     * @property honorView
     * View of the honors of the profile, showing total count and the first X honors.
     */
    honorView: HonorView,

    /**
     * @property languageView
     * View of the languages of the profile, showing total count and the first X languages.
     */
    languageView: LanguageView,

    /**
     * @property organizationView
     * View of the organizations of the profile, showing total count and the first X organizations.
     */
    organizationView: OrganizationView,

    /**
     * @property patentView
     * View of the patents of the profile, showing total count and the first X patents.
     */
    patentView: PatentView,

    /**
     * @property projectView
     * View of the projects of the profile, showing total count and the first X projects.
     */
    projectView: ProjectView,

    /**
     * @property publicationView
     * View of the publications of the profile, showing total count and the first X publications.
     */
    publicationView: PublicationView,

    /**
     * @property skillView
     * View of the skills of the profile, showing total count and the first X skills.
     */
    skillView: SkillView,

    /**
     * @property testScoreView
     * View of the test scores of the profile, showing total count and the first X test scores.
     */
    testScoreView: TestScoreView,

    /**
     * @property volunteerExperienceView
     * View of the volunteer experiences of the profile, showing total count and the first X volunteer exps.
     */
    volunteerExperienceView: VolunteerExperienceView,

    modelType: "identity/profile/profile-view"
  }
}
