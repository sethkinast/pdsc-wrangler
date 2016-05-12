import Model from 'app/api/NotTerribleModel';
import SchoolUrn from "app/models/common/school-urn";
import BasicSchoolInfo from "app/models/entities/school/basic-school-info";
import Image from "app/models/common/image";
import SchoolSections from "app/models/entities/school/school-sections";
import EntityInfo from "app/models/entities/common/entity-info";

export default class School extends Model {
  static schema = {
    /**
     * @property entityUrn
     * Identifier for this school.
     */
    entityUrn: SchoolUrn,

    /**
     * @property basicSchoolInfo
     * All of the info needed to give the viewer a basic summary of the school.
     */
    basicSchoolInfo: BasicSchoolInfo,

    /**
     * @property heroImage
     * Hero image - used as the cover photo for the School.
     */
    heroImage: Image,

    /**
     * @property description
     * Summary of school.
     */
    description: Model.STRING,

    /**
     * @property numberOfStudentsAndAlumni
     * Number of students and alumni at this school.
     */
    numberOfStudentsAndAlumni: Model.INT,

    /**
     * @property homepageUrl
     * URL for this school's homepage.
     */
    homepageUrl: Model.foreignUrn('com.linkedin.common.Uri'),

    /**
     * @property emailAddress
     * School email address.
     */
    emailAddress: Model.foreignUrn('com.linkedin.common.EmailAddress'),

    /**
     * @property phoneNumber
     * School phone number.
     */
    phoneNumber: Model.foreignUrn('com.linkedin.common.PhoneNumber'),

    /**
     * @property schoolType
     * Will be either PUBLIC, PRIVATE, PROFIT.
     */
    schoolType: Model.STRING,

    /**
     * @property address
     * School location address.
     */
    address: Model.STRING,

    /**
     * @property yearLevel
     * Will be either UNDER_TWO_YEAR, TWO_TO_FOUR_YEAR, or FOUR_OR_MORE_YEAR.
     */
    yearLevel: Model.STRING,

    /**
     * @property numberOfUndergradStudents
     * Number of undergraduate students.
     */
    numberOfUndergradStudents: Model.INT,

    /**
     * @property numberOfGradStudents
     * Number of graduate students.
     */
    numberOfGradStudents: Model.INT,

    /**
     * @property numberOfFaculty
     * Number of faculty members at the school.
     */
    numberOfFaculty: Model.INT,

    /**
     * @property totalPopulation
     * Total count of all students and faculty.
     */
    totalPopulation: Model.INT,

    /**
     * @property maleStudentPercentage
     * Percentage of the student population that is male.
     */
    maleStudentPercentage: Model.FLOAT,

    /**
     * @property femaleStudentPercentage
     * Percentage of the student population that is female.
     */
    femaleStudentPercentage: Model.FLOAT,

    /**
     * @property admittedPercentage
     * Percentage of applicants accepted.
     */
    admittedPercentage: Model.FLOAT,

    /**
     * @property graduationPercentage
     * Graduation rate.
     */
    graduationPercentage: Model.FLOAT,

    /**
     * @property studentFacultyRatio
     * Student to Faculty ratio.
     */
    studentFacultyRatio: Model.FLOAT,

    /**
     * @property financialAidAvailable
     * Financial aid availability.
     */
    financialAidAvailable: Model.BOOL,

    /**
     * @property financialAidPercentage
     * Percentage of the student population receiving financial aid.
     */
    financialAidPercentage: Model.FLOAT,

    /**
     * @property inStateTuition
     * In-state tuition cost.
     */
    inStateTuition: Model.STRING,

    /**
     * @property outOfStateTuition
     * Out-of-state tuition cost.
     */
    outOfStateTuition: Model.STRING,

    /**
     * @property sections
     * This has all the sections/tabs available on school page.
     */
    sections: SchoolSections,

    /**
     * @property entityInfo
     * It has the specific information about this entity.
     */
    entityInfo: EntityInfo,

    modelType: "entities/school/school"
  }
}
