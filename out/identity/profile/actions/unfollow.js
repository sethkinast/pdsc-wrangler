import Model from 'app/api/NotTerribleModel';

export default class Unfollow extends Model {
  static schema = {
    modelType: "identity/profile/actions/unfollow"
  }
}
