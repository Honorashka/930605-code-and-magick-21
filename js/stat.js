"use strict";

const CLOUD_WIDTH = 420;
const CLOUD_HEIGHT = 270;
const CLOUD_X = 100;
const CLOUD_Y = 10;
const GAP = 10;
const BAR_GAP = 50;
const TEXT_HEIGHT = 20;
const BAR_HEIGHT = CLOUD_HEIGHT - BAR_GAP - TEXT_HEIGHT - BAR_GAP;
const BAR_WIDTH = 40;

const renderCloud = function (ctx, x, y, color) {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, CLOUD_WIDTH, CLOUD_HEIGHT);
};

const getMaxElement = function (arr) {
  let maxElement = arr[0];

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > maxElement) {
      maxElement = arr[i];
    }
  }

  return maxElement;
};

window.renderStatistics = function (ctx, names, times) {
  renderCloud(ctx, CLOUD_X + GAP, CLOUD_Y + GAP, "rgba(0, 0, 0, 0.7)");
  renderCloud(ctx, CLOUD_X, CLOUD_Y, "#fff");

  ctx.fillStyle = "#000";

  const maxTime = Math.round(getMaxElement(times));
  let randomColour = () => {
    return ("hsl(" + 233 + "," + 100 * Math.random() + "%," + 100 * Math.random() + "%)");
  };

  ctx.font = "16px PT Mono";
  ctx.textBaseline = "hanging";
  ctx.fillText("Ура вы победили!", 130, 30);
  ctx.fillText("Список результатов:", 130, 50);

  for (let i = 0; i < names.length; i++) {
    if (names[i] === "Вы") {
      ctx.fillStyle = "red";
    } else {
      ctx.fillStyle = randomColour();
    }
    ctx.fillRect(
        CLOUD_X + BAR_GAP + (BAR_GAP + BAR_WIDTH) * i,
        CLOUD_Y + BAR_GAP + BAR_HEIGHT + BAR_WIDTH,
        BAR_WIDTH,
        -(BAR_HEIGHT * times[i]) / maxTime
    );
    ctx.fillStyle = "#000";
    ctx.fillText(
        Math.round(times[i]),
        CLOUD_X + BAR_GAP + (BAR_GAP + BAR_WIDTH) * i,
        CLOUD_HEIGHT - (BAR_HEIGHT * times[i]) / maxTime - TEXT_HEIGHT - TEXT_HEIGHT - GAP
    );
  }
  for (let i = 0; i < names.length; i++) {
    ctx.fillText(
        names[i],
        CLOUD_X + BAR_GAP + (BAR_GAP + BAR_WIDTH) * i,
        CLOUD_Y + BAR_GAP + BAR_HEIGHT + BAR_GAP
    );
  }
};
