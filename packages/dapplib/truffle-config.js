require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'give nation flush special drift random place arrow include end army gaze'; 
let testAccounts = [
"0xadec19cdbf236502e63a8e55347f44ca4861fb95a59c2ae8f78692c156e79af2",
"0xb57d7e5b5d5002da6534f734f5cf67d9925d283508a33681ada141461d16e58c",
"0x6dd01935eff18ff26bd68b60e73abc390e2a5d22a674f2a3258cca2288b701a4",
"0x92c0858862b9d6d844c28d3a3d4d8ecbb0e931c3e8a2676b770032adf046c7e0",
"0x5723e3453af3aa291a75bc04bb045bc6dadfc8b5719100fc21227a46c36a6cee",
"0x76f70cde8dd84e3da299f9af181ee4f0624cb2eea0283acb4ec606d538195b82",
"0x5b58852f0d713f1d650bd1bab78e19886b0b9270d9ee3f501dcb5bdfa491db9b",
"0xb25e19914794ea398db19fc0bf8c52ea6596ae2489048b7b16bde7c3677f0f4d",
"0x79771667f4c4337e911547a5245031184a894148f7dcc86e78786a944cb5ed6d",
"0x8861842b8a370a8d308851093276e27490120b7fe47ea5673ff8e6b869b6d3d8"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 8000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


