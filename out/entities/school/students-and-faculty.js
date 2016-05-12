import Model from 'app/api/NotTerribleModel';

export default class StudentsAndFaculty extends Model {
  static schema = {
    /**
     * @property numberOfStudentsAndAlumni
     * Number of students and alumni at this school.
     */
    numberOfStudentsAndAlumni: Model.INT,

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

    modelType: "entities/school/students-and-faculty"
  }
}
