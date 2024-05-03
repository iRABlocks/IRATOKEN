const { buildModule } = require("@nomicfoundation/hardhat-ignition/modules");

module.exports = buildModule("BlocksModule", (m) => {

  const iRABlocks = m.contract("Blocks", []);

  return { iRABlocks };
});
