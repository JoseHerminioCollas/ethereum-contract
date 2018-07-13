var storage = storageContract.at(storageAddress);
/*
undefined

> storage
{
  abi: [{
      constant: false,
      inputs: [{...}],
      name: "set",
      outputs: [],
      payable: false,
      type: "function"
  }, {
      constant: true,
      inputs: [],
      name: "get",
      outputs: [{...}],
      payable: false,
      type: "function"
  }],
  address: "0xc05c7ee9b13dd103581accfead6074e0522475e0",
  transactionHash: null,
  allEvents: function(),
  get: function(),
  set: function()
}

> storage.get.call()
0

> storage.set.sendTransaction(42, {from: eth.accounts[0], gas: 1000000})
"0x7a54ab329fcbf551432eb78c4b2a1ff48fc8b9f9aa23d94fa86330e5c1d711f3"

> storage.get.call()
42


*/
