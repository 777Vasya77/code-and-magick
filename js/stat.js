'use strict';

var CLOUD_WIDTH = 420;
var CLOUD_HEIGHT = 270;
var CLOUD_X = 100;
var CLOUD_Y = 10;
var GAP = 10;
var FONT_SIZE = 16;
var TITLE_GAP = 30;
var BAR_WIDTH = 40;
var BAR_GAP = 50;
var MAX_BAR_HEIGHT = 150;

var renderCloud = function (ctx, x, y, color) {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, CLOUD_WIDTH, CLOUD_HEIGHT);
};

var getMaxElement = function (arr) {
  var maxElement = arr[0];

  for (var i = 0; i < arr.length; i++) {
    if (arr[i] > maxElement) {
      maxElement = arr[i];
    }
  }

  return Math.round(maxElement);
};

window.renderStatistics = function (ctx, players, times) {
  renderCloud(ctx, CLOUD_X + GAP, CLOUD_Y + GAP, 'rgba(0, 0, 0, 0.3)');
  renderCloud(ctx, CLOUD_X, CLOUD_Y, '#fff');

  ctx.fillStyle = '#000';
  ctx.font = FONT_SIZE + 'px' + ' PT Mono';

  ctx.fillText('Ура вы победили!', CLOUD_X + TITLE_GAP, CLOUD_Y + TITLE_GAP);
  ctx.fillText('Список результатов:', CLOUD_X + TITLE_GAP, CLOUD_Y + TITLE_GAP + FONT_SIZE);

  var maxTime = getMaxElement(times);

  for (var i = 0; i < players.length; i++) {
    ctx.fillStyle = '#000';
    ctx.fillText(players[i], CLOUD_X + TITLE_GAP + GAP + (BAR_GAP + BAR_WIDTH) * i, CLOUD_HEIGHT);
    if (players[i] === 'Вы') {
      ctx.fillStyle = 'rgba(255, 0, 0, 1)';
    } else {
      ctx.fillStyle = 'rgba(0, 0, 255, ' + Math.random() * 1 + ')';
    }

    ctx.fillRect(CLOUD_X + TITLE_GAP + GAP + (BAR_GAP + BAR_WIDTH) * i, CLOUD_HEIGHT - FONT_SIZE - GAP, BAR_WIDTH, -(MAX_BAR_HEIGHT * times[i]) / maxTime);
  }
};


