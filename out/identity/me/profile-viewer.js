import Model from 'app/api/NotTerribleModel';
import FullProfileViewer from "app/models/identity/me/full-profile-viewer";
import ObfuscatedProfileViewer from "app/models/identity/me/obfuscated-profile-viewer";

export default Model.oneOf(FullProfileViewer, ObfuscatedProfileViewer);
