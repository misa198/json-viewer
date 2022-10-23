const fs = require('fs-extra');
const path = require('path');
const pkg = require('../package.json');
const firefox = require('../public/platforms/manifest.firefox.json');
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
  let manifest = platform === 'firefox' ? firefox : chrome;
  manifest = {
    ...manifest,
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
build('firefox');
build('chromium');
