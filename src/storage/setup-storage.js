var storageContractAbi = storageOutput.contracts['Storage.sol:Storage'].abi

var storageBinCode = "0x" + storageOutput.contracts['Storage.sol:Storage'].bin

var storageContract = eth.contract(JSON.parse(storageContractAbi))
