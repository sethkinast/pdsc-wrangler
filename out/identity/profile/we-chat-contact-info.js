import Model from 'app/api/NotTerribleModel';

export default class WeChatContactInfo extends Model {
  static schema = {
    /**
     * @property name
     * WeChat nickname, as entered by the user.
     */
    name: Model.STRING,

    /**
     * @property weChatHandle
     * WeChat handle.
     */
    weChatHandle: Model.STRING,

    /**
     * @property qr
     * WeChat QR image url
     */
    qr: Model.foreignUrn('com.linkedin.common.Url'),

    modelType: "identity/profile/we-chat-contact-info"
  }
}
