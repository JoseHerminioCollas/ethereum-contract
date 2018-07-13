Set Up an Ethereum contract

1) Create wallet address
    
    personal.newAccount()

2) Create Contract file:
    
    Storage.sol

3) Compile, Generate object for load
    
Run
    
    compile-storage.sh

Generate
    
     storage.js

4) Load the script into the Geth Console:
    
    loadScript(‘storage.js’)

5) Create the storage instance, load the following scripts

    setup-storage.js

6) Deploy

    deploy-storage.js


This recipe is based on this blog by Gustavo (Gus) Guimaraes.

    "Deploying A Smart Contract, The Hard Way"

        https://medium.com/@gus_tavo_guim/deploying-a-smart-contract-the-hard-way-8aae778d4f2a