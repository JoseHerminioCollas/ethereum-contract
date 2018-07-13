// deploy and transact
//personal.unlockAccount(eth.accounts[0])

var deployTransationObject = { from: eth.accounts[0], data: storageBinCode, gas: 1000000 };

var storageInstance = storageContract.new(deployTransationObject)
// inspect storageInstance
eth.getTransactionReceipt(storageInstance.transactionHash);

var storageAddress = eth.getTransactionReceipt(storageInstance.transactionHash).contractAddress
