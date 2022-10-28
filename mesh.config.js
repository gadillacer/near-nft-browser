module.exports = {
  sources: [
    {
      name: 'NEP141',
      handler: {
        graphql: {
          endpoint: 'https://api.thegraph.com/subgraphs/name/gadillacer/near-misfits-indexer',
        },
      },
    },
    {
      name: 'EIP1155',
      handler: {
        graphql: {
          endpoint: 'https://api.thegraph.com/subgraphs/name/sunguru98/erc1155-rinkeby-subgraph',
        },
      },
    },
  ],
  transforms: [
    {
      namingConvention: {
        typeNames: 'pascalCase',
        enumValues: 'camelCase',
        fieldNames: 'camelCase',
      },
    },
  ],
  additionalTypeDefs:
    'enum Standard {\n' +
    '  nep141\n' +
    '  erc1155\n' +
    '}\n' +
    'extend type Token {\n' +
    '  standard: Standard!\n' +
    '}\n',
  additionalResolvers: ['./mesh/additionalResolvers'],
}
