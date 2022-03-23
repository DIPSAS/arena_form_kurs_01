// DIPS openEHR Forms Script, created 2022-03-23 23:01
// Alder_beregninger_v01

// var ALDER_BEREGNINGER = "alder-beregninger";
//var ALDER = "alder-beregninger/alder";
// var ORIGIN = "alder-beregninger/alder/event_series/origin";
// var TIDSPUNKT = "alder-beregninger/alder/tidspunkt";
// var ALDERSKATEGORI = "alder-beregninger/alder/tidspunkt/alderskategori";
// var JUSTERT_ALDER = "alder-beregninger/alder/tidspunkt/justert_alder";
// var KOMMENTAR = "alder-beregninger/alder/tidspunkt/kommentar";

// var TIME = "alder-beregninger/alder/tidspunkt/time";
// var END_TIME = "alder-beregninger/end_time";
// var START_TIME = "alder-beregninger/start_time";
// var FORM_ROOT = "form_root";

//


var KRONOLOGISK_ALDER = "alder-beregninger/alder/tidspunkt/kronologisk_alder";
var t = api.getTemplateVariable("Pas.Alder");
console.debug("Pasientens alder er " + t);

var duration = new DvDuration();
duration.value = "P" + t + "Y0M0W0DT0H0M0S";
console.debug(duration.value);

api.setFieldValue(KRONOLOGISK_ALDER,duration);

