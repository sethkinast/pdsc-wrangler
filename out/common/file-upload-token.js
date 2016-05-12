import Model from 'app/api/NotTerribleModel';

export default class FileUploadToken extends Model {
  static schema = {
    /**
     * @property uploadToken
     * A token that is required for POSTing files to mupld
     */
    uploadToken: Model.STRING,

    modelType: "common/file-upload-token"
  }
}
