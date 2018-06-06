'use strict';

var WIZARD_NAMES = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
var WIZARD_SURNAMES = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
var WIZARD_COAT_COLORS = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
var WIZARD_EYES_COLORS = ['black', 'red', 'blue', 'yellow', 'green'];

var getRandomArrayItem = function (array) {
  var item = array[Math.floor(Math.random() * array.length)];

  return item;
};

var createWizardData = function () {
  var wizard = {
    name: getRandomArrayItem(WIZARD_NAMES) + ' ' + getRandomArrayItem(WIZARD_SURNAMES),
    coatColor: getRandomArrayItem(WIZARD_COAT_COLORS),
    eyesColor: getRandomArrayItem(WIZARD_EYES_COLORS)
  };

  return wizard;
};

var userDialog = document.querySelector('.setup');
userDialog.classList.remove('hidden');

var similarWizardTemplate = document.querySelector('#similar-wizard-template').content.querySelector('.setup-similar-item');

var renderWizard = function (wizard) {
  var wizardElement = similarWizardTemplate.cloneNode(true);
  wizardElement.querySelector('.setup-similar-label').textContent = wizard.name;
  wizardElement.querySelector('.wizard-coat').style.fill = wizard.coatColor;
  wizardElement.querySelector('.wizard-eyes').style.fill = wizard.eyesColor;

  return wizardElement;
};

var createWizardsList = function (wizardCount) {
  var fragment = document.createDocumentFragment();
  for (var i = 0; i < wizardCount; i++) {
    var wizard = createWizardData();
    fragment.appendChild(renderWizard(wizard));
  }

  return fragment;
};

var setupSimilarList = userDialog.querySelector('.setup-similar-list');
setupSimilarList.appendChild(createWizardsList(4));

userDialog.querySelector('.setup-similar').classList.remove('hidden');
