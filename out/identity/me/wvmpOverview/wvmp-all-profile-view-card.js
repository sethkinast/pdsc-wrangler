import Model from 'app/api/NotTerribleModel';
import WvmpProfileViewCard from "app/models/identity/me/wvmp-profile-view-card";
import WvmpAnonymousProfileViewCard from "app/models/identity/me/wvmp-anonymous-profile-view-card";

export default Model.oneOf(WvmpProfileViewCard, WvmpAnonymousProfileViewCard);
