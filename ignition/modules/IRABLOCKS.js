const { buildModule } = require("@nomicfoundation/hardhat-ignition/modules");

module.exports = buildModule("iRABLOCKSModule", (m) => {

  const iRABlocks = m.contract("iRABLOCKS", []);

  return { iRABlocks };
});
