import Model from 'app/api/NotTerribleModel';
import ProviderType from "app/models/feed/provider-type";

export default class ExternalShareAudience extends Model {
  static schema = {
    /**
     * @property credentialId
     * Id of the credential for the external provider. If not given, server will choose the user's default credential
     */
    credentialId: Model.STRING,

    /**
     * @property providerType
     * The provider for the external audience.
     */
    providerType: ProviderType,

    modelType: "feed/external-share-audience"
  }
}
