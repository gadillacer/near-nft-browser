module.exports = {
  sources: [
    {
      name: 'EIP721',
      handler: {
        graphql: {
          endpoint: 'https://api.thegraph.com/subgraphs/name/digitalnativeinc/rinkeby-erc721',
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
    '  erc721\n' +
    '  erc1155\n' +
    '}\n' +
    'extend type Token {\n' +
    '  standard: Standard!\n' +
    '}\n',
  additionalResolvers: ['./mesh/additionalResolvers'],
}
