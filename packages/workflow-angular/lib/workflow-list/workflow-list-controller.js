var CONSTANTS = require('../constants');

/**
 *
 * Controller for listing workorders
 *
 * @param $scope
 * @param $stateParams
 * @param {workflowservice} workflowService
 * @param $timeout
 * @constructor
 */
function WorkflowListController($scope, $stateParams, workflowService, workflowFlowService, $timeout) {
  var self = this;
  self.workflows = null;
  self.selectedWorkflowId = $stateParams.workflowId;
  var _workflows;


  function refreshWorkflows() {
    workflowService.list().then(function(workflows) {
      $timeout(function() {
        _workflows = workflows;
        self.workflows = workflows;
      });
    });
  }

  refreshWorkflows();

  self.selectWorkflow = function(event, workflow) {
    self.selectedWorkflowId = workflow.id;
    workflowFlowService.goToWorkflowDetails(workflow);
  };

  self.applyFilter = function(term) {
    term = term.toLowerCase();
    self.workflows = _workflows.filter(function(workflow) {
      return String(workflow.title).toLowerCase().indexOf(term) !== -1
        || String(workflow.id).indexOf(term) !== -1;
    });
  };
}

angular.module(CONSTANTS.WORKFLOW_DIRECTIVE_MODULE).controller('WorkflowListController', [ '$scope',  '$stateParams', 'workflowService', 'workflowFlowService', '$timeout', WorkflowListController]);
