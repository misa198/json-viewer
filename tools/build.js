const fs = require('fs-extra');
const path = require('path');
const pkg = require('../package.json');
const chrome = require('../public/platforms/manifest.chromium.json');

const rmOldBuild = () => {
  try {
    fs.removeSync(path.join(__dirname, '..', 'dist'));
  } catch (e) {}
};

const rmManifest = () => {
  try {
    fs.removeSync(path.join(__dirname, '..', 'build', 'platforms'));
  } catch (e) {}
};

const build = (platform) => {
  fs.mkdirSync(path.join(__dirname, '..', 'dist', platform), {
    recursive: true,
  });
  const { version, description } = pkg;
  const manifest = {
    ...chrome,
    version,
    description,
  };
  fs.copySync(
    path.join(__dirname, '..', 'build'),
    path.join(__dirname, '..', 'dist', platform),
  );
  fs.outputJsonSync(
    path.join(__dirname, '..', 'dist', platform, `manifest.json`),
    manifest,
  );
};

rmOldBuild();
rmManifest();
build('chromium');
