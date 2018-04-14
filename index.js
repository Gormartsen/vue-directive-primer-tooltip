module.exports = {
  name: 'primer-tooltip',
  config: {},
  install: function install(Vue) {
    Vue.directive('primer-tooltip', {
      inserted: function inserted(el, binding) {
        processModifiers(binding, el);
      },
      updated: function componentUpdated(el, binding) {
        cleanClasses(el)
        processModifiers(binding, el);
      } 
    });
  }
}

function processModifiers(_ref, el) {
  if (typeof _ref.value === 'string') {
    el.setAttribute('aria-label', _ref.value);
  }
  for (var modifier in _ref.modifiers) {
    setClasses(modifier, el);
  }
  if (_ref.argument) {
    setClasses(_ref.argument, el);
  }
  ensureClass('tooltipped', el);
}

function setClasses(name, el){
  var names = [
    'n',
    'ne',
    'e',
    'se',
    's',
    'sw',
    'w',
    'nw',
    'no-delay',
  ]
  if (names.indexOf(name) !== -1) {
    ensureClass('tooltipped-' + name, el);
  }
}

function ensureClass(item, el) {
  if (!el.classList.contains(item)) {
    el.classList.add(item)
  }
}

function cleanClasses(el) {
  var classes = [
    "tooltipped",
    "tooltipped-n",
    "tooltipped-ne",
    "tooltipped-e",
    "tooltipped-se",
    "tooltipped-s",
    "tooltipped-sw",
    "tooltipped-w",
    "tooltipped-nw",
    "tooltipped-no-delay"
  ]
  classes.forEach(function(item){
    if (el.classList.contains(item)) {
      el.classList.remove(item)
    }  
  });
}
