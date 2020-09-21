var fireballSize = 22;

var getFireballSpeed = function (isFlyLeft) {
    return isFlyLeft ? 2 : 5;
};

var wizzardWidth = 70;

var getWizardHeight = function () {
  return 1.337 * wizzardWidth;
}

var wizardSpeed = 3;

var getWizardX = function (gameFieldWidth) {
  return gameFieldWidth / 2;
};

var getWizardY = function (gameFieldHeight) {
  return gameFieldHeight / 3
};
