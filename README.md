# Base SwapRouter02 deployment

## To deploy

```shell
npx hardhat run scripts/deploy.js --network base
```

## Contracts

Deployed `SwapRouter02` is:

```
0x5788F91Aa320e0610122fb88B39Ab8f35e50040b
```


Uniswap v2 contracts on Base:

```
    "base": {
        "factory": "0x8909Dc15e40173Ff4699343b6eB8132c65e18eC6",
        "router": "0x4752ba5dbc23f44d87826276bf6fd6b1c372ad24",
        "init_code_hash": "96e8ac4277198ff8b6f785478aa9a39f403cb768dd02cbee326c3e7da348845f",
    }
```

Uniswap v3 contracts on Base:

```
factory: 0x33128a8fC17869897dcE68Ed026d694621f6FDfD
position_manager: 0x03a520b32C04BF3bEEf7BEb72E919cf822Ed34f1
weth9: 0x4200000000000000000000000000000000000006
```

And now deployed:

```
```

# Deployment

To deploy:

```shell
# From Basescan.org
export ETHESCAN_API_KEY=

# Top it up
export PRIVATE_KEY=

npx hardhat run scripts/deploy.js --network base
```