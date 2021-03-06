module.exports = {
  ngModule: require('./angular'),
  definition: {
    code: "vehicle-inspection",
    name: "Vehicle Inspection Step",
    description: "Perform Vehicle Inspection and log results",
    templates: {
      form: "<vehicle-inspection-form></vehicle-inspection-form>",
      view: "<vehicle-inspection value='result.submission'></vehicle-inspection>"
    }
  }
};
