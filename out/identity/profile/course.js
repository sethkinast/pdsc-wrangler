import Model from 'app/api/NotTerribleModel';
import NormCourse from "app/models/identity/profile/norm-course";

export default class Course extends Model {
  static schema = Object.assign({}, NormCourse.schema, {
    modelType: "identity/profile/course"
  })
}
