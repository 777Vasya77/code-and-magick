'use strict';

(function () {

  var ESC_KEYCODE = 27;
  var ENTER_KEYCODE = 13;
  var WIZARD_NAMES = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
  var WIZARD_SURNAMES = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
  var WIZARD_COAT_COLORS = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
  var WIZARD_EYES_COLORS = ['black', 'red', 'blue', 'yellow', 'green'];
  var WIZARD_FIREBALL_COLORS = ['#ee4830', '#30a8ee', '#5ce6c0', '#e848d5', '#e6e848'];

  var similarWizardTemplate = document.querySelector('#similar-wizard-template').content.querySelector('.setup-similar-item');
  var userDialog = document.querySelector('.setup');
  var userDialogOpen = document.querySelector('.setup-open');
  var userDialogClose = userDialog.querySelector('.setup-close');
  var setupUserName = userDialog.querySelector('.setup-user-name');
  var setupSimilarList = userDialog.querySelector('.setup-similar-list');
  var wizardCoatColor = document.querySelector('.setup-wizard .wizard-coat');
  var wizardEyesColor = document.querySelector('.setup-wizard .wizard-eyes');
  var wizardFireballColor = document.querySelector('.setup-fireball-wrap');

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

  var onPopupEscPress = function (evt) {
    if (evt.keyCode === ESC_KEYCODE) {
      closePopup();
    }
  };

  var openPopup = function () {
    userDialog.classList.remove('hidden');
    document.addEventListener('keydown', onPopupEscPress);
  };

  var closePopup = function () {
    userDialog.classList.add('hidden');
    document.removeEventListener('keydown', onPopupEscPress);
  };

  userDialogOpen.addEventListener('click', function () {
    openPopup();
  });

  userDialogOpen.addEventListener('keydown', function (evt) {
    if (evt.keyCode === ENTER_KEYCODE) {
      openPopup();
    }
  });

  userDialogClose.addEventListener('click', function () {
    closePopup();
  });

  userDialogClose.addEventListener('keydown', function (evt) {
    if (evt.keyCode === ENTER_KEYCODE) {
      closePopup();
    }
  });

  setupUserName.addEventListener('focus', function () {
    document.removeEventListener('keydown', onPopupEscPress);
  });

  setupUserName.addEventListener('blur', function () {
    document.addEventListener('keydown', onPopupEscPress);
  });

  wizardCoatColor.addEventListener('click', function (evt) {
    var self = evt.currentTarget;
    var value = getRandomArrayItem(WIZARD_COAT_COLORS);
    var input = document.querySelector('input[name=coat-color]');

    self.style.fill = value;
    input.value = value;
  });

  wizardEyesColor.addEventListener('click', function (evt) {
    var self = evt.currentTarget;
    var value = getRandomArrayItem(WIZARD_EYES_COLORS);
    var input = document.querySelector('input[name=eyes-color]');

    self.style.fill = value;
    input.value = value;
  });

  wizardFireballColor.addEventListener('click', function (evt) {
    var self = evt.currentTarget;
    var input = self.querySelector('input[name=fireball-color]');
    var value = getRandomArrayItem(WIZARD_FIREBALL_COLORS);

    self.style.background = value;
    input.value = value;
  });

  setupSimilarList.appendChild(createWizardsList(4));

  userDialog.querySelector('.setup-similar').classList.remove('hidden');

}());
