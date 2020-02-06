const globals = {
  libraries: {
    d3: 'readonly',
    $: 'readonly',
    PriorityQueue: 'readonly',
    ThreeD: 'readonly',
    Delaunator: 'readonly',
  },
  indexSelectors: {
    alertMessage: 'readonly',
    culturesSet: 'readonly',
    densityInput: 'readonly',
    heightExponentInput: 'readonly',
    hideLabels: 'readonly',
    latitudeInput: 'readonly',
    latitudeOutput: 'readonly',
    mapSizeInput: 'readonly',
    mapSizeOutput: 'readonly',
    mapHeightInput: 'readonly',
    mapWidthInput: 'readonly',
    onloadMap: 'readonly',
    optionsSeed: 'readonly',
    populationRate: 'readonly',
    precInput: 'readonly',
    temperatureEquatorInput: 'readonly',
    temperaturePoleInput: 'readonly',
    templateInput: 'readonly',
    urbanization: 'readonly',
  },
  modules: {
    BurgsAndStates: 'readonly',
    Cultures: 'readonly',
    HeightmapGenerator: 'readonly',
    Names: 'readonly',
    OceanLayers: 'readonly',
    Religions: 'readonly',
    Rivers: 'readonly',
    Voronoi: 'readonly',
  },
  saveAndLoad: {
    uploadMap: 'readonly',
  },
  utilities: {
    P: 'readonly',
    rn: 'readonly',
    ra: 'readonly',
    rw: 'readonly',
    rand: 'readonly',
    round: 'readonly',
    getAdjective: 'readonly',
    getPackPolygon: 'readonly',
    getBoundaryPoints: 'readonly',
    getJitteredGrid: 'readonly',
    capitalize: 'readonly',
    biased: 'readonly',
    debounce: 'readonly',
    getNextId: 'readonly',
    normalize: 'readonly',
    gauss: 'readonly',
    link: 'readonly',
    isLand: 'readonly',
    convertTemperature: 'readonly',
    parseError: 'readonly',
    ldb: 'readonly',  // localStorageDB
  },
  uiEditors: {
    clearLegend: 'readonly',
    closeDialogs: 'readonly',
    unfog: 'readonly',
  },
  uiGeneral: {
    clearMainTip: 'readonly',
    getFriendlyHeight: 'readonly',
    locked: 'readonly',
    tip: 'readonly',
  },
  uiLayers: {
    applyPreset: 'readonly',
    drawBorders: 'readonly',
    drawCoordinates: 'readonly',
    drawStates: 'readonly',
    restoreLayers: 'readonly',
  },
  uiMeasurers: {
    addRuler: 'readonly',
    drawScaleBar: 'readonly',
  },
  uiOptions: {
    applyMapSize: 'readonly',
    applyStoredOptions: 'readonly',
    randomizeOptions: 'readonly',
  },
  uiStyle: {
    applyStyleOnLoad: 'readonly',
  },
  uiWorldConfigurator: {
    editWorld: 'readonly',
  },
};

// flattens nested objects in 'globals' into a single object of key-value pairs.
const allGlobals = Object.keys(globals).reduce((gs, key) => Object.assign(gs, globals[key]), {});


module.exports = {
  "env": {
    "browser": true,
    "es6": true
  },
  "extends": "eslint-config-i-am-meticulous",
  "globals": Object.assign({
    "Atomics": "readonly",
    "SharedArrayBuffer": "readonly"
  }, allGlobals),
  "parserOptions": {
    "ecmaVersion": 2018,
    "sourceType": "module"
  },
  "rules": {
    "prefer-const": "off",
    "no-inner-declarations": "warn",
    "no-unused-vars": "warn",
    "one-var": "off",
    "no-bitwise": "off",
    "no-useless-escape": "warn"
  }
};