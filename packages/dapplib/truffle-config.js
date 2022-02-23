require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'hover enrich sun food nothing regret night soft harvest canoe army giant'; 
let testAccounts = [
"0x3f2ca2e7c8f1429e1f77521295f270f9fe769270a3e871fce3c75f92983761c4",
"0x63fd8cd7a035b4c15039ea7a9b48ae191cec0f4d8238a5228bab3d71734a7855",
"0x89f7f351cd954e6e2efce2065e5a6afb14e3452ff19eaae5391f80ced9b39d90",
"0xb62c329c99eeb868ad47641381b4b5f801827ff22f419ed454c3421e86f42cb3",
"0x5dc658b806e2d44c01c2cb6cb93ee4ab12c7099033ab5b54f4e7c41a8be1ea2a",
"0x543fdef4458cf75ef51807184e043b3b32a00e9d840b830223e4d34cbf1d5ffc",
"0x6580e4a79b353a3205c023b1f11bcc444ae51684f2c30edae72556d36fd048fc",
"0x0f5e17e82e7b2b2977c28353a726e49b3d1d4141ac9fcc11170386419b89bc7a",
"0x90cac29cd11c2ebf40920566412edd8d83483071bebbb7c9cb3b67769c86cb88",
"0x2855433c966ad02c62a1716df801f3da6dc7dd2a340e8aa0c8ef6b0962e9563d"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

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
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

