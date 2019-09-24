'use strict';

const getEipTemplate = require('./templates/eip');

function compileEip() {
  const { Resources } = this.serverless.service.provider.compiledCloudFormationTemplate;
  const logicalId = this.provider.naming.getEipLogicalId();
  const vpcLogicalId = this.provider.naming.getVpcLogicalId();

  const eipResource = { [logicalId]: getEipTemplate(vpcLogicalId) };

  Object.assign(Resources, eipResource);
}

module.exports = compileEip;