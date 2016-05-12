const path = require('path');
const humps = require('humps');

/**
 * Given a path like messaging/event/GenericMessageEvent.pdsc, return messaging/event/generic-message-event.js
 */
function pdscPathToModelPath(pdscPath, { extension = '.js' } = {}) {
  return path.join(
    path.dirname(pdscPath),
    pdscPathToModelName(pdscPath) + extension
  );
}

/**
 * Given a path like messaging/event/GenericMessageEvent.pdsc, return generic-message-event
 */
function pdscPathToModelName(pdscPath) {
  return humps.decamelize(pdscPathToVariableName(pdscPath), { separator: '-' });
}

/**
 * Given a path like messaging/event/GenericMessageEvent.pdsc, return GenericMessageEvent
 */
function pdscPathToVariableName(pdscPath) {
  return path.basename(pdscPath, '.pdsc');
}

/**
 * Given a package name like com.linkedin.voyager.identity.shared.MiniProfile, return identity/shared/mini-profile
 */
function pdscPackageNameToModelPath(packageName, { extension = '' } = {}) {
  return pdscPathToModelPath(removePackageFromPdscPath(packageName.replace(/\./g, '/')), { extension });
}

/**
 * Given a path like com/linkedin/restli/common, return restli/common
 * Given a path like com/linkedin/voyager/search/hits, return search/hits
 */
function removePackageFromPdscPath(pdscPath) {
  let pathWithNoDomain = path.relative('com/linkedin', pdscPath);
  if (pathWithNoDomain.indexOf('voyager') === 0) {
    pathWithNoDomain = path.relative('voyager', pathWithNoDomain);
  }
  return pathWithNoDomain;
}

module.exports = {
  pdscPathToModelPath,
  pdscPackageNameToModelPath
};
