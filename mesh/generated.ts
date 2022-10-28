import { GraphQLResolveInfo, GraphQLScalarType, GraphQLScalarTypeConfig } from 'graphql';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type RequireFields<T, K extends keyof T> = { [X in Exclude<keyof T, K>]?: T[X] } & { [P in K]-?: NonNullable<T[P]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  BigDecimal: any;
  BigInt: bigint;
  Bytes: any;
};

export type Query = {
  all?: Maybe<All>;
  alls: Array<All>;
  token?: Maybe<Token>;
  tokens: Array<Token>;
  tokenContract?: Maybe<TokenContract>;
  tokenContracts: Array<TokenContract>;
  owner?: Maybe<Owner>;
  owners: Array<Owner>;
  ownerPerTokenContract?: Maybe<OwnerPerTokenContract>;
  ownerPerTokenContracts: Array<OwnerPerTokenContract>;
  /** Access to subgraph metadata */
  meta?: Maybe<Meta>;
  account?: Maybe<Account>;
  accounts: Array<Account>;
  tokenRegistry?: Maybe<TokenRegistry>;
  tokenRegistries: Array<TokenRegistry>;
  balance?: Maybe<Balance>;
  balances: Array<Balance>;
  transfer?: Maybe<Transfer>;
  transfers: Array<Transfer>;
  approval?: Maybe<Approval>;
  approvals: Array<Approval>;
  decimalValue?: Maybe<DecimalValue>;
  decimalValues: Array<DecimalValue>;
  transaction?: Maybe<Transaction>;
  transactions: Array<Transaction>;
  persistentStringArray?: Maybe<PersistentStringArray>;
  persistentStringArrays: Array<PersistentStringArray>;
  persistentString?: Maybe<PersistentString>;
  persistentStrings: Array<PersistentString>;
  event?: Maybe<Event>;
  events: Array<Event>;
};


export type QueryAllArgs = {
  id: Scalars['ID'];
  block?: Maybe<BlockHeight>;
  subgraphError?: SubgraphErrorPolicy;
};


export type QueryAllsArgs = {
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<AllOrderBy>;
  orderDirection?: Maybe<OrderDirection>;
  where?: Maybe<AllFilter>;
  block?: Maybe<BlockHeight>;
  subgraphError?: SubgraphErrorPolicy;
};


export type QueryTokenArgs = {
  id: Scalars['ID'];
  block?: Maybe<BlockHeight>;
  subgraphError?: SubgraphErrorPolicy;
};


export type QueryTokensArgs = {
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<TokenOrderBy>;
  orderDirection?: Maybe<OrderDirection>;
  where?: Maybe<TokenFilter>;
  block?: Maybe<BlockHeight>;
  subgraphError?: SubgraphErrorPolicy;
};


export type QueryTokenContractArgs = {
  id: Scalars['ID'];
  block?: Maybe<BlockHeight>;
  subgraphError?: SubgraphErrorPolicy;
};


export type QueryTokenContractsArgs = {
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<TokenContractOrderBy>;
  orderDirection?: Maybe<OrderDirection>;
  where?: Maybe<TokenContractFilter>;
  block?: Maybe<BlockHeight>;
  subgraphError?: SubgraphErrorPolicy;
};


export type QueryOwnerArgs = {
  id: Scalars['ID'];
  block?: Maybe<BlockHeight>;
  subgraphError?: SubgraphErrorPolicy;
};


export type QueryOwnersArgs = {
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<OwnerOrderBy>;
  orderDirection?: Maybe<OrderDirection>;
  where?: Maybe<OwnerFilter>;
  block?: Maybe<BlockHeight>;
  subgraphError?: SubgraphErrorPolicy;
};


export type QueryOwnerPerTokenContractArgs = {
  id: Scalars['ID'];
  block?: Maybe<BlockHeight>;
  subgraphError?: SubgraphErrorPolicy;
};


export type QueryOwnerPerTokenContractsArgs = {
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<OwnerPerTokenContractOrderBy>;
  orderDirection?: Maybe<OrderDirection>;
  where?: Maybe<OwnerPerTokenContractFilter>;
  block?: Maybe<BlockHeight>;
  subgraphError?: SubgraphErrorPolicy;
};


export type QueryMetaArgs = {
  block?: Maybe<BlockHeight>;
};


export type QueryAccountArgs = {
  id: Scalars['ID'];
  block?: Maybe<BlockHeight>;
  subgraphError?: SubgraphErrorPolicy;
};


export type QueryAccountsArgs = {
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<AccountOrderBy>;
  orderDirection?: Maybe<OrderDirection>;
  where?: Maybe<AccountFilter>;
  block?: Maybe<BlockHeight>;
  subgraphError?: SubgraphErrorPolicy;
};


export type QueryTokenRegistryArgs = {
  id: Scalars['ID'];
  block?: Maybe<BlockHeight>;
  subgraphError?: SubgraphErrorPolicy;
};


export type QueryTokenRegistriesArgs = {
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<TokenRegistryOrderBy>;
  orderDirection?: Maybe<OrderDirection>;
  where?: Maybe<TokenRegistryFilter>;
  block?: Maybe<BlockHeight>;
  subgraphError?: SubgraphErrorPolicy;
};


export type QueryBalanceArgs = {
  id: Scalars['ID'];
  block?: Maybe<BlockHeight>;
  subgraphError?: SubgraphErrorPolicy;
};


export type QueryBalancesArgs = {
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<BalanceOrderBy>;
  orderDirection?: Maybe<OrderDirection>;
  where?: Maybe<BalanceFilter>;
  block?: Maybe<BlockHeight>;
  subgraphError?: SubgraphErrorPolicy;
};


export type QueryTransferArgs = {
  id: Scalars['ID'];
  block?: Maybe<BlockHeight>;
  subgraphError?: SubgraphErrorPolicy;
};


export type QueryTransfersArgs = {
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<TransferOrderBy>;
  orderDirection?: Maybe<OrderDirection>;
  where?: Maybe<TransferFilter>;
  block?: Maybe<BlockHeight>;
  subgraphError?: SubgraphErrorPolicy;
};


export type QueryApprovalArgs = {
  id: Scalars['ID'];
  block?: Maybe<BlockHeight>;
  subgraphError?: SubgraphErrorPolicy;
};


export type QueryApprovalsArgs = {
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<ApprovalOrderBy>;
  orderDirection?: Maybe<OrderDirection>;
  where?: Maybe<ApprovalFilter>;
  block?: Maybe<BlockHeight>;
  subgraphError?: SubgraphErrorPolicy;
};


export type QueryDecimalValueArgs = {
  id: Scalars['ID'];
  block?: Maybe<BlockHeight>;
  subgraphError?: SubgraphErrorPolicy;
};


export type QueryDecimalValuesArgs = {
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<DecimalValueOrderBy>;
  orderDirection?: Maybe<OrderDirection>;
  where?: Maybe<DecimalValueFilter>;
  block?: Maybe<BlockHeight>;
  subgraphError?: SubgraphErrorPolicy;
};


export type QueryTransactionArgs = {
  id: Scalars['ID'];
  block?: Maybe<BlockHeight>;
  subgraphError?: SubgraphErrorPolicy;
};


export type QueryTransactionsArgs = {
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<TransactionOrderBy>;
  orderDirection?: Maybe<OrderDirection>;
  where?: Maybe<TransactionFilter>;
  block?: Maybe<BlockHeight>;
  subgraphError?: SubgraphErrorPolicy;
};


export type QueryPersistentStringArrayArgs = {
  id: Scalars['ID'];
  block?: Maybe<BlockHeight>;
  subgraphError?: SubgraphErrorPolicy;
};


export type QueryPersistentStringArraysArgs = {
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<PersistentStringArrayOrderBy>;
  orderDirection?: Maybe<OrderDirection>;
  where?: Maybe<PersistentStringArrayFilter>;
  block?: Maybe<BlockHeight>;
  subgraphError?: SubgraphErrorPolicy;
};


export type QueryPersistentStringArgs = {
  id: Scalars['ID'];
  block?: Maybe<BlockHeight>;
  subgraphError?: SubgraphErrorPolicy;
};


export type QueryPersistentStringsArgs = {
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<PersistentStringOrderBy>;
  orderDirection?: Maybe<OrderDirection>;
  where?: Maybe<PersistentStringFilter>;
  block?: Maybe<BlockHeight>;
  subgraphError?: SubgraphErrorPolicy;
};


export type QueryEventArgs = {
  id: Scalars['ID'];
  block?: Maybe<BlockHeight>;
  subgraphError?: SubgraphErrorPolicy;
};


export type QueryEventsArgs = {
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<EventOrderBy>;
  orderDirection?: Maybe<OrderDirection>;
  where?: Maybe<EventFilter>;
  block?: Maybe<BlockHeight>;
  subgraphError?: SubgraphErrorPolicy;
};

export type Subscription = {
  all?: Maybe<All>;
  alls: Array<All>;
  token?: Maybe<Token>;
  tokens: Array<Token>;
  tokenContract?: Maybe<TokenContract>;
  tokenContracts: Array<TokenContract>;
  owner?: Maybe<Owner>;
  owners: Array<Owner>;
  ownerPerTokenContract?: Maybe<OwnerPerTokenContract>;
  ownerPerTokenContracts: Array<OwnerPerTokenContract>;
  /** Access to subgraph metadata */
  meta?: Maybe<Meta>;
  account?: Maybe<Account>;
  accounts: Array<Account>;
  tokenRegistry?: Maybe<TokenRegistry>;
  tokenRegistries: Array<TokenRegistry>;
  balance?: Maybe<Balance>;
  balances: Array<Balance>;
  transfer?: Maybe<Transfer>;
  transfers: Array<Transfer>;
  approval?: Maybe<Approval>;
  approvals: Array<Approval>;
  decimalValue?: Maybe<DecimalValue>;
  decimalValues: Array<DecimalValue>;
  transaction?: Maybe<Transaction>;
  transactions: Array<Transaction>;
  persistentStringArray?: Maybe<PersistentStringArray>;
  persistentStringArrays: Array<PersistentStringArray>;
  persistentString?: Maybe<PersistentString>;
  persistentStrings: Array<PersistentString>;
  event?: Maybe<Event>;
  events: Array<Event>;
};


export type SubscriptionAllArgs = {
  id: Scalars['ID'];
  block?: Maybe<BlockHeight>;
  subgraphError?: SubgraphErrorPolicy;
};


export type SubscriptionAllsArgs = {
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<AllOrderBy>;
  orderDirection?: Maybe<OrderDirection>;
  where?: Maybe<AllFilter>;
  block?: Maybe<BlockHeight>;
  subgraphError?: SubgraphErrorPolicy;
};


export type SubscriptionTokenArgs = {
  id: Scalars['ID'];
  block?: Maybe<BlockHeight>;
  subgraphError?: SubgraphErrorPolicy;
};


export type SubscriptionTokensArgs = {
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<TokenOrderBy>;
  orderDirection?: Maybe<OrderDirection>;
  where?: Maybe<TokenFilter>;
  block?: Maybe<BlockHeight>;
  subgraphError?: SubgraphErrorPolicy;
};


export type SubscriptionTokenContractArgs = {
  id: Scalars['ID'];
  block?: Maybe<BlockHeight>;
  subgraphError?: SubgraphErrorPolicy;
};


export type SubscriptionTokenContractsArgs = {
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<TokenContractOrderBy>;
  orderDirection?: Maybe<OrderDirection>;
  where?: Maybe<TokenContractFilter>;
  block?: Maybe<BlockHeight>;
  subgraphError?: SubgraphErrorPolicy;
};


export type SubscriptionOwnerArgs = {
  id: Scalars['ID'];
  block?: Maybe<BlockHeight>;
  subgraphError?: SubgraphErrorPolicy;
};


export type SubscriptionOwnersArgs = {
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<OwnerOrderBy>;
  orderDirection?: Maybe<OrderDirection>;
  where?: Maybe<OwnerFilter>;
  block?: Maybe<BlockHeight>;
  subgraphError?: SubgraphErrorPolicy;
};


export type SubscriptionOwnerPerTokenContractArgs = {
  id: Scalars['ID'];
  block?: Maybe<BlockHeight>;
  subgraphError?: SubgraphErrorPolicy;
};


export type SubscriptionOwnerPerTokenContractsArgs = {
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<OwnerPerTokenContractOrderBy>;
  orderDirection?: Maybe<OrderDirection>;
  where?: Maybe<OwnerPerTokenContractFilter>;
  block?: Maybe<BlockHeight>;
  subgraphError?: SubgraphErrorPolicy;
};


export type SubscriptionMetaArgs = {
  block?: Maybe<BlockHeight>;
};


export type SubscriptionAccountArgs = {
  id: Scalars['ID'];
  block?: Maybe<BlockHeight>;
  subgraphError?: SubgraphErrorPolicy;
};


export type SubscriptionAccountsArgs = {
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<AccountOrderBy>;
  orderDirection?: Maybe<OrderDirection>;
  where?: Maybe<AccountFilter>;
  block?: Maybe<BlockHeight>;
  subgraphError?: SubgraphErrorPolicy;
};


export type SubscriptionTokenRegistryArgs = {
  id: Scalars['ID'];
  block?: Maybe<BlockHeight>;
  subgraphError?: SubgraphErrorPolicy;
};


export type SubscriptionTokenRegistriesArgs = {
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<TokenRegistryOrderBy>;
  orderDirection?: Maybe<OrderDirection>;
  where?: Maybe<TokenRegistryFilter>;
  block?: Maybe<BlockHeight>;
  subgraphError?: SubgraphErrorPolicy;
};


export type SubscriptionBalanceArgs = {
  id: Scalars['ID'];
  block?: Maybe<BlockHeight>;
  subgraphError?: SubgraphErrorPolicy;
};


export type SubscriptionBalancesArgs = {
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<BalanceOrderBy>;
  orderDirection?: Maybe<OrderDirection>;
  where?: Maybe<BalanceFilter>;
  block?: Maybe<BlockHeight>;
  subgraphError?: SubgraphErrorPolicy;
};


export type SubscriptionTransferArgs = {
  id: Scalars['ID'];
  block?: Maybe<BlockHeight>;
  subgraphError?: SubgraphErrorPolicy;
};


export type SubscriptionTransfersArgs = {
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<TransferOrderBy>;
  orderDirection?: Maybe<OrderDirection>;
  where?: Maybe<TransferFilter>;
  block?: Maybe<BlockHeight>;
  subgraphError?: SubgraphErrorPolicy;
};


export type SubscriptionApprovalArgs = {
  id: Scalars['ID'];
  block?: Maybe<BlockHeight>;
  subgraphError?: SubgraphErrorPolicy;
};


export type SubscriptionApprovalsArgs = {
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<ApprovalOrderBy>;
  orderDirection?: Maybe<OrderDirection>;
  where?: Maybe<ApprovalFilter>;
  block?: Maybe<BlockHeight>;
  subgraphError?: SubgraphErrorPolicy;
};


export type SubscriptionDecimalValueArgs = {
  id: Scalars['ID'];
  block?: Maybe<BlockHeight>;
  subgraphError?: SubgraphErrorPolicy;
};


export type SubscriptionDecimalValuesArgs = {
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<DecimalValueOrderBy>;
  orderDirection?: Maybe<OrderDirection>;
  where?: Maybe<DecimalValueFilter>;
  block?: Maybe<BlockHeight>;
  subgraphError?: SubgraphErrorPolicy;
};


export type SubscriptionTransactionArgs = {
  id: Scalars['ID'];
  block?: Maybe<BlockHeight>;
  subgraphError?: SubgraphErrorPolicy;
};


export type SubscriptionTransactionsArgs = {
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<TransactionOrderBy>;
  orderDirection?: Maybe<OrderDirection>;
  where?: Maybe<TransactionFilter>;
  block?: Maybe<BlockHeight>;
  subgraphError?: SubgraphErrorPolicy;
};


export type SubscriptionPersistentStringArrayArgs = {
  id: Scalars['ID'];
  block?: Maybe<BlockHeight>;
  subgraphError?: SubgraphErrorPolicy;
};


export type SubscriptionPersistentStringArraysArgs = {
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<PersistentStringArrayOrderBy>;
  orderDirection?: Maybe<OrderDirection>;
  where?: Maybe<PersistentStringArrayFilter>;
  block?: Maybe<BlockHeight>;
  subgraphError?: SubgraphErrorPolicy;
};


export type SubscriptionPersistentStringArgs = {
  id: Scalars['ID'];
  block?: Maybe<BlockHeight>;
  subgraphError?: SubgraphErrorPolicy;
};


export type SubscriptionPersistentStringsArgs = {
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<PersistentStringOrderBy>;
  orderDirection?: Maybe<OrderDirection>;
  where?: Maybe<PersistentStringFilter>;
  block?: Maybe<BlockHeight>;
  subgraphError?: SubgraphErrorPolicy;
};


export type SubscriptionEventArgs = {
  id: Scalars['ID'];
  block?: Maybe<BlockHeight>;
  subgraphError?: SubgraphErrorPolicy;
};


export type SubscriptionEventsArgs = {
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<EventOrderBy>;
  orderDirection?: Maybe<OrderDirection>;
  where?: Maybe<EventFilter>;
  block?: Maybe<BlockHeight>;
  subgraphError?: SubgraphErrorPolicy;
};

export type All = {
  id: Scalars['ID'];
  numTokenContracts: Scalars['BigInt'];
  numTokens: Scalars['BigInt'];
  numOwners: Scalars['BigInt'];
};

export type AllFilter = {
  id?: Maybe<Scalars['ID']>;
  idNot?: Maybe<Scalars['ID']>;
  idGt?: Maybe<Scalars['ID']>;
  idLt?: Maybe<Scalars['ID']>;
  idGte?: Maybe<Scalars['ID']>;
  idLte?: Maybe<Scalars['ID']>;
  idIn?: Maybe<Array<Scalars['ID']>>;
  idNotIn?: Maybe<Array<Scalars['ID']>>;
  numTokenContracts?: Maybe<Scalars['BigInt']>;
  numTokenContractsNot?: Maybe<Scalars['BigInt']>;
  numTokenContractsGt?: Maybe<Scalars['BigInt']>;
  numTokenContractsLt?: Maybe<Scalars['BigInt']>;
  numTokenContractsGte?: Maybe<Scalars['BigInt']>;
  numTokenContractsLte?: Maybe<Scalars['BigInt']>;
  numTokenContractsIn?: Maybe<Array<Scalars['BigInt']>>;
  numTokenContractsNotIn?: Maybe<Array<Scalars['BigInt']>>;
  numTokens?: Maybe<Scalars['BigInt']>;
  numTokensNot?: Maybe<Scalars['BigInt']>;
  numTokensGt?: Maybe<Scalars['BigInt']>;
  numTokensLt?: Maybe<Scalars['BigInt']>;
  numTokensGte?: Maybe<Scalars['BigInt']>;
  numTokensLte?: Maybe<Scalars['BigInt']>;
  numTokensIn?: Maybe<Array<Scalars['BigInt']>>;
  numTokensNotIn?: Maybe<Array<Scalars['BigInt']>>;
  numOwners?: Maybe<Scalars['BigInt']>;
  numOwnersNot?: Maybe<Scalars['BigInt']>;
  numOwnersGt?: Maybe<Scalars['BigInt']>;
  numOwnersLt?: Maybe<Scalars['BigInt']>;
  numOwnersGte?: Maybe<Scalars['BigInt']>;
  numOwnersLte?: Maybe<Scalars['BigInt']>;
  numOwnersIn?: Maybe<Array<Scalars['BigInt']>>;
  numOwnersNotIn?: Maybe<Array<Scalars['BigInt']>>;
  /** Filter for the block changed event. */
  changeBlock?: Maybe<BlockChangedFilter>;
};

export enum AllOrderBy {
  id = 'id',
  numTokenContracts = 'numTokenContracts',
  numTokens = 'numTokens',
  numOwners = 'numOwners'
}



export type BlockChangedFilter = {
  numberGte: Scalars['Int'];
};

export type BlockHeight = {
  hash?: Maybe<Scalars['Bytes']>;
  number?: Maybe<Scalars['Int']>;
  numberGte?: Maybe<Scalars['Int']>;
};


/** Defines the order direction, either ascending or descending */
export enum OrderDirection {
  asc = 'asc',
  desc = 'desc'
}

export type Owner = {
  id: Scalars['ID'];
  tokens: Array<Token>;
  numTokens: Scalars['BigInt'];
};


export type OwnerTokensArgs = {
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<TokenOrderBy>;
  orderDirection?: Maybe<OrderDirection>;
  where?: Maybe<TokenFilter>;
};

export type OwnerPerTokenContract = {
  id: Scalars['ID'];
  owner: Owner;
  contract: TokenContract;
  numTokens: Scalars['BigInt'];
};

export type OwnerPerTokenContractFilter = {
  id?: Maybe<Scalars['ID']>;
  idNot?: Maybe<Scalars['ID']>;
  idGt?: Maybe<Scalars['ID']>;
  idLt?: Maybe<Scalars['ID']>;
  idGte?: Maybe<Scalars['ID']>;
  idLte?: Maybe<Scalars['ID']>;
  idIn?: Maybe<Array<Scalars['ID']>>;
  idNotIn?: Maybe<Array<Scalars['ID']>>;
  owner?: Maybe<OwnerFilter>;
  ownerNot?: Maybe<Scalars['String']>;
  ownerGt?: Maybe<Scalars['String']>;
  ownerLt?: Maybe<Scalars['String']>;
  ownerGte?: Maybe<Scalars['String']>;
  ownerLte?: Maybe<Scalars['String']>;
  ownerIn?: Maybe<Array<Scalars['String']>>;
  ownerNotIn?: Maybe<Array<Scalars['String']>>;
  ownerContains?: Maybe<Scalars['String']>;
  ownerContainsNocase?: Maybe<Scalars['String']>;
  ownerNotContains?: Maybe<Scalars['String']>;
  ownerNotContainsNocase?: Maybe<Scalars['String']>;
  ownerStartsWith?: Maybe<Scalars['String']>;
  ownerStartsWithNocase?: Maybe<Scalars['String']>;
  ownerNotStartsWith?: Maybe<Scalars['String']>;
  ownerNotStartsWithNocase?: Maybe<Scalars['String']>;
  ownerEndsWith?: Maybe<Scalars['String']>;
  ownerEndsWithNocase?: Maybe<Scalars['String']>;
  ownerNotEndsWith?: Maybe<Scalars['String']>;
  ownerNotEndsWithNocase?: Maybe<Scalars['String']>;
  contract?: Maybe<TokenContractFilter>;
  contractNot?: Maybe<Scalars['String']>;
  contractGt?: Maybe<Scalars['String']>;
  contractLt?: Maybe<Scalars['String']>;
  contractGte?: Maybe<Scalars['String']>;
  contractLte?: Maybe<Scalars['String']>;
  contractIn?: Maybe<Array<Scalars['String']>>;
  contractNotIn?: Maybe<Array<Scalars['String']>>;
  contractContains?: Maybe<Scalars['String']>;
  contractContainsNocase?: Maybe<Scalars['String']>;
  contractNotContains?: Maybe<Scalars['String']>;
  contractNotContainsNocase?: Maybe<Scalars['String']>;
  contractStartsWith?: Maybe<Scalars['String']>;
  contractStartsWithNocase?: Maybe<Scalars['String']>;
  contractNotStartsWith?: Maybe<Scalars['String']>;
  contractNotStartsWithNocase?: Maybe<Scalars['String']>;
  contractEndsWith?: Maybe<Scalars['String']>;
  contractEndsWithNocase?: Maybe<Scalars['String']>;
  contractNotEndsWith?: Maybe<Scalars['String']>;
  contractNotEndsWithNocase?: Maybe<Scalars['String']>;
  numTokens?: Maybe<Scalars['BigInt']>;
  numTokensNot?: Maybe<Scalars['BigInt']>;
  numTokensGt?: Maybe<Scalars['BigInt']>;
  numTokensLt?: Maybe<Scalars['BigInt']>;
  numTokensGte?: Maybe<Scalars['BigInt']>;
  numTokensLte?: Maybe<Scalars['BigInt']>;
  numTokensIn?: Maybe<Array<Scalars['BigInt']>>;
  numTokensNotIn?: Maybe<Array<Scalars['BigInt']>>;
  /** Filter for the block changed event. */
  changeBlock?: Maybe<BlockChangedFilter>;
};

export enum OwnerPerTokenContractOrderBy {
  id = 'id',
  owner = 'owner',
  contract = 'contract',
  numTokens = 'numTokens'
}

export type OwnerFilter = {
  id?: Maybe<Scalars['ID']>;
  idNot?: Maybe<Scalars['ID']>;
  idGt?: Maybe<Scalars['ID']>;
  idLt?: Maybe<Scalars['ID']>;
  idGte?: Maybe<Scalars['ID']>;
  idLte?: Maybe<Scalars['ID']>;
  idIn?: Maybe<Array<Scalars['ID']>>;
  idNotIn?: Maybe<Array<Scalars['ID']>>;
  tokens?: Maybe<TokenFilter>;
  numTokens?: Maybe<Scalars['BigInt']>;
  numTokensNot?: Maybe<Scalars['BigInt']>;
  numTokensGt?: Maybe<Scalars['BigInt']>;
  numTokensLt?: Maybe<Scalars['BigInt']>;
  numTokensGte?: Maybe<Scalars['BigInt']>;
  numTokensLte?: Maybe<Scalars['BigInt']>;
  numTokensIn?: Maybe<Array<Scalars['BigInt']>>;
  numTokensNotIn?: Maybe<Array<Scalars['BigInt']>>;
  /** Filter for the block changed event. */
  changeBlock?: Maybe<BlockChangedFilter>;
};

export enum OwnerOrderBy {
  id = 'id',
  tokens = 'tokens',
  numTokens = 'numTokens'
}

export type Token = {
  id: Scalars['ID'];
  contract: TokenContract;
  tokenId: Scalars['BigInt'];
  owner: Owner;
  mintTime: Scalars['BigInt'];
  tokenUri: Scalars['String'];
  registry: TokenRegistry;
  identifier: Scalars['BigInt'];
  uri?: Maybe<Scalars['String']>;
  totalSupply: Scalars['BigInt'];
  balances: Array<Balance>;
  transfers: Array<Transfer>;
  approvals: Array<Approval>;
  standard: Standard;
};


export type TokenBalancesArgs = {
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<BalanceOrderBy>;
  orderDirection?: Maybe<OrderDirection>;
  where?: Maybe<BalanceFilter>;
};


export type TokenTransfersArgs = {
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<TransferOrderBy>;
  orderDirection?: Maybe<OrderDirection>;
  where?: Maybe<TransferFilter>;
};


export type TokenApprovalsArgs = {
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<ApprovalOrderBy>;
  orderDirection?: Maybe<OrderDirection>;
  where?: Maybe<ApprovalFilter>;
};

export type TokenContract = {
  id: Scalars['ID'];
  name?: Maybe<Scalars['String']>;
  symbol?: Maybe<Scalars['String']>;
  doAllAddressesOwnTheirIdByDefault: Scalars['Boolean'];
  supportsEip721Metadata: Scalars['Boolean'];
  tokens: Array<Token>;
  numTokens: Scalars['BigInt'];
  numOwners: Scalars['BigInt'];
};


export type TokenContractTokensArgs = {
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<TokenOrderBy>;
  orderDirection?: Maybe<OrderDirection>;
  where?: Maybe<TokenFilter>;
};

export type TokenContractFilter = {
  id?: Maybe<Scalars['ID']>;
  idNot?: Maybe<Scalars['ID']>;
  idGt?: Maybe<Scalars['ID']>;
  idLt?: Maybe<Scalars['ID']>;
  idGte?: Maybe<Scalars['ID']>;
  idLte?: Maybe<Scalars['ID']>;
  idIn?: Maybe<Array<Scalars['ID']>>;
  idNotIn?: Maybe<Array<Scalars['ID']>>;
  name?: Maybe<Scalars['String']>;
  nameNot?: Maybe<Scalars['String']>;
  nameGt?: Maybe<Scalars['String']>;
  nameLt?: Maybe<Scalars['String']>;
  nameGte?: Maybe<Scalars['String']>;
  nameLte?: Maybe<Scalars['String']>;
  nameIn?: Maybe<Array<Scalars['String']>>;
  nameNotIn?: Maybe<Array<Scalars['String']>>;
  nameContains?: Maybe<Scalars['String']>;
  nameContainsNocase?: Maybe<Scalars['String']>;
  nameNotContains?: Maybe<Scalars['String']>;
  nameNotContainsNocase?: Maybe<Scalars['String']>;
  nameStartsWith?: Maybe<Scalars['String']>;
  nameStartsWithNocase?: Maybe<Scalars['String']>;
  nameNotStartsWith?: Maybe<Scalars['String']>;
  nameNotStartsWithNocase?: Maybe<Scalars['String']>;
  nameEndsWith?: Maybe<Scalars['String']>;
  nameEndsWithNocase?: Maybe<Scalars['String']>;
  nameNotEndsWith?: Maybe<Scalars['String']>;
  nameNotEndsWithNocase?: Maybe<Scalars['String']>;
  symbol?: Maybe<Scalars['String']>;
  symbolNot?: Maybe<Scalars['String']>;
  symbolGt?: Maybe<Scalars['String']>;
  symbolLt?: Maybe<Scalars['String']>;
  symbolGte?: Maybe<Scalars['String']>;
  symbolLte?: Maybe<Scalars['String']>;
  symbolIn?: Maybe<Array<Scalars['String']>>;
  symbolNotIn?: Maybe<Array<Scalars['String']>>;
  symbolContains?: Maybe<Scalars['String']>;
  symbolContainsNocase?: Maybe<Scalars['String']>;
  symbolNotContains?: Maybe<Scalars['String']>;
  symbolNotContainsNocase?: Maybe<Scalars['String']>;
  symbolStartsWith?: Maybe<Scalars['String']>;
  symbolStartsWithNocase?: Maybe<Scalars['String']>;
  symbolNotStartsWith?: Maybe<Scalars['String']>;
  symbolNotStartsWithNocase?: Maybe<Scalars['String']>;
  symbolEndsWith?: Maybe<Scalars['String']>;
  symbolEndsWithNocase?: Maybe<Scalars['String']>;
  symbolNotEndsWith?: Maybe<Scalars['String']>;
  symbolNotEndsWithNocase?: Maybe<Scalars['String']>;
  doAllAddressesOwnTheirIdByDefault?: Maybe<Scalars['Boolean']>;
  doAllAddressesOwnTheirIdByDefaultNot?: Maybe<Scalars['Boolean']>;
  doAllAddressesOwnTheirIdByDefaultIn?: Maybe<Array<Scalars['Boolean']>>;
  doAllAddressesOwnTheirIdByDefaultNotIn?: Maybe<Array<Scalars['Boolean']>>;
  supportsEip721Metadata?: Maybe<Scalars['Boolean']>;
  supportsEip721MetadataNot?: Maybe<Scalars['Boolean']>;
  supportsEip721MetadataIn?: Maybe<Array<Scalars['Boolean']>>;
  supportsEip721MetadataNotIn?: Maybe<Array<Scalars['Boolean']>>;
  tokens?: Maybe<TokenFilter>;
  numTokens?: Maybe<Scalars['BigInt']>;
  numTokensNot?: Maybe<Scalars['BigInt']>;
  numTokensGt?: Maybe<Scalars['BigInt']>;
  numTokensLt?: Maybe<Scalars['BigInt']>;
  numTokensGte?: Maybe<Scalars['BigInt']>;
  numTokensLte?: Maybe<Scalars['BigInt']>;
  numTokensIn?: Maybe<Array<Scalars['BigInt']>>;
  numTokensNotIn?: Maybe<Array<Scalars['BigInt']>>;
  numOwners?: Maybe<Scalars['BigInt']>;
  numOwnersNot?: Maybe<Scalars['BigInt']>;
  numOwnersGt?: Maybe<Scalars['BigInt']>;
  numOwnersLt?: Maybe<Scalars['BigInt']>;
  numOwnersGte?: Maybe<Scalars['BigInt']>;
  numOwnersLte?: Maybe<Scalars['BigInt']>;
  numOwnersIn?: Maybe<Array<Scalars['BigInt']>>;
  numOwnersNotIn?: Maybe<Array<Scalars['BigInt']>>;
  /** Filter for the block changed event. */
  changeBlock?: Maybe<BlockChangedFilter>;
};

export enum TokenContractOrderBy {
  id = 'id',
  name = 'name',
  symbol = 'symbol',
  doAllAddressesOwnTheirIdByDefault = 'doAllAddressesOwnTheirIdByDefault',
  supportsEip721Metadata = 'supportsEIP721Metadata',
  tokens = 'tokens',
  numTokens = 'numTokens',
  numOwners = 'numOwners'
}

export type TokenFilter = {
  id?: Maybe<Scalars['ID']>;
  idNot?: Maybe<Scalars['ID']>;
  idGt?: Maybe<Scalars['ID']>;
  idLt?: Maybe<Scalars['ID']>;
  idGte?: Maybe<Scalars['ID']>;
  idLte?: Maybe<Scalars['ID']>;
  idIn?: Maybe<Array<Scalars['ID']>>;
  idNotIn?: Maybe<Array<Scalars['ID']>>;
  contract?: Maybe<TokenContractFilter>;
  contractNot?: Maybe<Scalars['String']>;
  contractGt?: Maybe<Scalars['String']>;
  contractLt?: Maybe<Scalars['String']>;
  contractGte?: Maybe<Scalars['String']>;
  contractLte?: Maybe<Scalars['String']>;
  contractIn?: Maybe<Array<Scalars['String']>>;
  contractNotIn?: Maybe<Array<Scalars['String']>>;
  contractContains?: Maybe<Scalars['String']>;
  contractContainsNocase?: Maybe<Scalars['String']>;
  contractNotContains?: Maybe<Scalars['String']>;
  contractNotContainsNocase?: Maybe<Scalars['String']>;
  contractStartsWith?: Maybe<Scalars['String']>;
  contractStartsWithNocase?: Maybe<Scalars['String']>;
  contractNotStartsWith?: Maybe<Scalars['String']>;
  contractNotStartsWithNocase?: Maybe<Scalars['String']>;
  contractEndsWith?: Maybe<Scalars['String']>;
  contractEndsWithNocase?: Maybe<Scalars['String']>;
  contractNotEndsWith?: Maybe<Scalars['String']>;
  contractNotEndsWithNocase?: Maybe<Scalars['String']>;
  tokenId?: Maybe<Scalars['BigInt']>;
  tokenIdNot?: Maybe<Scalars['BigInt']>;
  tokenIdGt?: Maybe<Scalars['BigInt']>;
  tokenIdLt?: Maybe<Scalars['BigInt']>;
  tokenIdGte?: Maybe<Scalars['BigInt']>;
  tokenIdLte?: Maybe<Scalars['BigInt']>;
  tokenIdIn?: Maybe<Array<Scalars['BigInt']>>;
  tokenIdNotIn?: Maybe<Array<Scalars['BigInt']>>;
  owner?: Maybe<OwnerFilter>;
  ownerNot?: Maybe<Scalars['String']>;
  ownerGt?: Maybe<Scalars['String']>;
  ownerLt?: Maybe<Scalars['String']>;
  ownerGte?: Maybe<Scalars['String']>;
  ownerLte?: Maybe<Scalars['String']>;
  ownerIn?: Maybe<Array<Scalars['String']>>;
  ownerNotIn?: Maybe<Array<Scalars['String']>>;
  ownerContains?: Maybe<Scalars['String']>;
  ownerContainsNocase?: Maybe<Scalars['String']>;
  ownerNotContains?: Maybe<Scalars['String']>;
  ownerNotContainsNocase?: Maybe<Scalars['String']>;
  ownerStartsWith?: Maybe<Scalars['String']>;
  ownerStartsWithNocase?: Maybe<Scalars['String']>;
  ownerNotStartsWith?: Maybe<Scalars['String']>;
  ownerNotStartsWithNocase?: Maybe<Scalars['String']>;
  ownerEndsWith?: Maybe<Scalars['String']>;
  ownerEndsWithNocase?: Maybe<Scalars['String']>;
  ownerNotEndsWith?: Maybe<Scalars['String']>;
  ownerNotEndsWithNocase?: Maybe<Scalars['String']>;
  mintTime?: Maybe<Scalars['BigInt']>;
  mintTimeNot?: Maybe<Scalars['BigInt']>;
  mintTimeGt?: Maybe<Scalars['BigInt']>;
  mintTimeLt?: Maybe<Scalars['BigInt']>;
  mintTimeGte?: Maybe<Scalars['BigInt']>;
  mintTimeLte?: Maybe<Scalars['BigInt']>;
  mintTimeIn?: Maybe<Array<Scalars['BigInt']>>;
  mintTimeNotIn?: Maybe<Array<Scalars['BigInt']>>;
  tokenUri?: Maybe<Scalars['String']>;
  tokenUriNot?: Maybe<Scalars['String']>;
  tokenUriGt?: Maybe<Scalars['String']>;
  tokenUriLt?: Maybe<Scalars['String']>;
  tokenUriGte?: Maybe<Scalars['String']>;
  tokenUriLte?: Maybe<Scalars['String']>;
  tokenUriIn?: Maybe<Array<Scalars['String']>>;
  tokenUriNotIn?: Maybe<Array<Scalars['String']>>;
  tokenUriContains?: Maybe<Scalars['String']>;
  tokenUriContainsNocase?: Maybe<Scalars['String']>;
  tokenUriNotContains?: Maybe<Scalars['String']>;
  tokenUriNotContainsNocase?: Maybe<Scalars['String']>;
  tokenUriStartsWith?: Maybe<Scalars['String']>;
  tokenUriStartsWithNocase?: Maybe<Scalars['String']>;
  tokenUriNotStartsWith?: Maybe<Scalars['String']>;
  tokenUriNotStartsWithNocase?: Maybe<Scalars['String']>;
  tokenUriEndsWith?: Maybe<Scalars['String']>;
  tokenUriEndsWithNocase?: Maybe<Scalars['String']>;
  tokenUriNotEndsWith?: Maybe<Scalars['String']>;
  tokenUriNotEndsWithNocase?: Maybe<Scalars['String']>;
  /** Filter for the block changed event. */
  changeBlock?: Maybe<BlockChangedFilter>;
  registry?: Maybe<TokenRegistryFilter>;
  registryNot?: Maybe<Scalars['String']>;
  registryGt?: Maybe<Scalars['String']>;
  registryLt?: Maybe<Scalars['String']>;
  registryGte?: Maybe<Scalars['String']>;
  registryLte?: Maybe<Scalars['String']>;
  registryIn?: Maybe<Array<Scalars['String']>>;
  registryNotIn?: Maybe<Array<Scalars['String']>>;
  registryContains?: Maybe<Scalars['String']>;
  registryContainsNocase?: Maybe<Scalars['String']>;
  registryNotContains?: Maybe<Scalars['String']>;
  registryNotContainsNocase?: Maybe<Scalars['String']>;
  registryStartsWith?: Maybe<Scalars['String']>;
  registryStartsWithNocase?: Maybe<Scalars['String']>;
  registryNotStartsWith?: Maybe<Scalars['String']>;
  registryNotStartsWithNocase?: Maybe<Scalars['String']>;
  registryEndsWith?: Maybe<Scalars['String']>;
  registryEndsWithNocase?: Maybe<Scalars['String']>;
  registryNotEndsWith?: Maybe<Scalars['String']>;
  registryNotEndsWithNocase?: Maybe<Scalars['String']>;
  identifier?: Maybe<Scalars['BigInt']>;
  identifierNot?: Maybe<Scalars['BigInt']>;
  identifierGt?: Maybe<Scalars['BigInt']>;
  identifierLt?: Maybe<Scalars['BigInt']>;
  identifierGte?: Maybe<Scalars['BigInt']>;
  identifierLte?: Maybe<Scalars['BigInt']>;
  identifierIn?: Maybe<Array<Scalars['BigInt']>>;
  identifierNotIn?: Maybe<Array<Scalars['BigInt']>>;
  uri?: Maybe<Scalars['String']>;
  uriNot?: Maybe<Scalars['String']>;
  uriGt?: Maybe<Scalars['String']>;
  uriLt?: Maybe<Scalars['String']>;
  uriGte?: Maybe<Scalars['String']>;
  uriLte?: Maybe<Scalars['String']>;
  uriIn?: Maybe<Array<Scalars['String']>>;
  uriNotIn?: Maybe<Array<Scalars['String']>>;
  uriContains?: Maybe<Scalars['String']>;
  uriContainsNocase?: Maybe<Scalars['String']>;
  uriNotContains?: Maybe<Scalars['String']>;
  uriNotContainsNocase?: Maybe<Scalars['String']>;
  uriStartsWith?: Maybe<Scalars['String']>;
  uriStartsWithNocase?: Maybe<Scalars['String']>;
  uriNotStartsWith?: Maybe<Scalars['String']>;
  uriNotStartsWithNocase?: Maybe<Scalars['String']>;
  uriEndsWith?: Maybe<Scalars['String']>;
  uriEndsWithNocase?: Maybe<Scalars['String']>;
  uriNotEndsWith?: Maybe<Scalars['String']>;
  uriNotEndsWithNocase?: Maybe<Scalars['String']>;
  totalSupply?: Maybe<Scalars['BigInt']>;
  totalSupplyNot?: Maybe<Scalars['BigInt']>;
  totalSupplyGt?: Maybe<Scalars['BigInt']>;
  totalSupplyLt?: Maybe<Scalars['BigInt']>;
  totalSupplyGte?: Maybe<Scalars['BigInt']>;
  totalSupplyLte?: Maybe<Scalars['BigInt']>;
  totalSupplyIn?: Maybe<Array<Scalars['BigInt']>>;
  totalSupplyNotIn?: Maybe<Array<Scalars['BigInt']>>;
  balances?: Maybe<BalanceFilter>;
  transfers?: Maybe<TransferFilter>;
  approvals?: Maybe<ApprovalFilter>;
};

export enum TokenOrderBy {
  id = 'id',
  contract = 'contract',
  tokenId = 'tokenID',
  owner = 'owner',
  mintTime = 'mintTime',
  tokenUri = 'tokenURI',
  registry = 'registry',
  identifier = 'identifier',
  uri = 'URI',
  totalSupply = 'totalSupply',
  balances = 'balances',
  transfers = 'transfers',
  approvals = 'approvals'
}

export type Block = {
  /** The hash of the block */
  hash?: Maybe<Scalars['Bytes']>;
  /** The block number */
  number: Scalars['Int'];
  /** Integer representation of the timestamp stored in blocks for the chain */
  timestamp?: Maybe<Scalars['Int']>;
};

/** The type for the top-level _meta field */
export type Meta = {
  /**
   * Information about a specific subgraph block. The hash of the block
   * will be null if the _meta field has a block constraint that asks for
   * a block number. It will be filled if the _meta field has no block constraint
   * and therefore asks for the latest  block
   */
  block: Block;
  /** The deployment ID */
  deployment: Scalars['String'];
  /** If `true`, the subgraph encountered indexing errors at some past block */
  hasIndexingErrors: Scalars['Boolean'];
};

export enum SubgraphErrorPolicy {
  /** Data will be returned even if the subgraph has indexing errors */
  allow = 'allow',
  /** If the subgraph has indexing errors, data will be omitted. The default. */
  deny = 'deny'
}

export type Account = {
  id: Scalars['ID'];
  balances: Array<Balance>;
  transfersOperator: Array<Transfer>;
  transfersFrom: Array<Transfer>;
  transfersTo: Array<Transfer>;
  approvalsOwner: Array<Approval>;
  approvalsSpender: Array<Approval>;
};


export type AccountBalancesArgs = {
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<BalanceOrderBy>;
  orderDirection?: Maybe<OrderDirection>;
  where?: Maybe<BalanceFilter>;
};


export type AccountTransfersOperatorArgs = {
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<TransferOrderBy>;
  orderDirection?: Maybe<OrderDirection>;
  where?: Maybe<TransferFilter>;
};


export type AccountTransfersFromArgs = {
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<TransferOrderBy>;
  orderDirection?: Maybe<OrderDirection>;
  where?: Maybe<TransferFilter>;
};


export type AccountTransfersToArgs = {
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<TransferOrderBy>;
  orderDirection?: Maybe<OrderDirection>;
  where?: Maybe<TransferFilter>;
};


export type AccountApprovalsOwnerArgs = {
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<ApprovalOrderBy>;
  orderDirection?: Maybe<OrderDirection>;
  where?: Maybe<ApprovalFilter>;
};


export type AccountApprovalsSpenderArgs = {
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<ApprovalOrderBy>;
  orderDirection?: Maybe<OrderDirection>;
  where?: Maybe<ApprovalFilter>;
};

export type AccountFilter = {
  id?: Maybe<Scalars['ID']>;
  idNot?: Maybe<Scalars['ID']>;
  idGt?: Maybe<Scalars['ID']>;
  idLt?: Maybe<Scalars['ID']>;
  idGte?: Maybe<Scalars['ID']>;
  idLte?: Maybe<Scalars['ID']>;
  idIn?: Maybe<Array<Scalars['ID']>>;
  idNotIn?: Maybe<Array<Scalars['ID']>>;
  balances?: Maybe<BalanceFilter>;
  transfersOperator?: Maybe<TransferFilter>;
  transfersFrom?: Maybe<TransferFilter>;
  transfersTo?: Maybe<TransferFilter>;
  approvalsOwner?: Maybe<ApprovalFilter>;
  approvalsSpender?: Maybe<ApprovalFilter>;
  /** Filter for the block changed event. */
  changeBlock?: Maybe<BlockChangedFilter>;
};

export enum AccountOrderBy {
  id = 'id',
  balances = 'balances',
  transfersOperator = 'transfersOperator',
  transfersFrom = 'transfersFrom',
  transfersTo = 'transfersTo',
  approvalsOwner = 'approvalsOwner',
  approvalsSpender = 'approvalsSpender'
}

export type Approval = Event & {
  id: Scalars['ID'];
  transaction: Transaction;
  timestamp: Scalars['BigInt'];
  token: Token;
  owner: Account;
  spender: Account;
  value: Scalars['BigInt'];
};

export type ApprovalFilter = {
  id?: Maybe<Scalars['ID']>;
  idNot?: Maybe<Scalars['ID']>;
  idGt?: Maybe<Scalars['ID']>;
  idLt?: Maybe<Scalars['ID']>;
  idGte?: Maybe<Scalars['ID']>;
  idLte?: Maybe<Scalars['ID']>;
  idIn?: Maybe<Array<Scalars['ID']>>;
  idNotIn?: Maybe<Array<Scalars['ID']>>;
  transaction?: Maybe<TransactionFilter>;
  transactionNot?: Maybe<Scalars['String']>;
  transactionGt?: Maybe<Scalars['String']>;
  transactionLt?: Maybe<Scalars['String']>;
  transactionGte?: Maybe<Scalars['String']>;
  transactionLte?: Maybe<Scalars['String']>;
  transactionIn?: Maybe<Array<Scalars['String']>>;
  transactionNotIn?: Maybe<Array<Scalars['String']>>;
  transactionContains?: Maybe<Scalars['String']>;
  transactionContainsNocase?: Maybe<Scalars['String']>;
  transactionNotContains?: Maybe<Scalars['String']>;
  transactionNotContainsNocase?: Maybe<Scalars['String']>;
  transactionStartsWith?: Maybe<Scalars['String']>;
  transactionStartsWithNocase?: Maybe<Scalars['String']>;
  transactionNotStartsWith?: Maybe<Scalars['String']>;
  transactionNotStartsWithNocase?: Maybe<Scalars['String']>;
  transactionEndsWith?: Maybe<Scalars['String']>;
  transactionEndsWithNocase?: Maybe<Scalars['String']>;
  transactionNotEndsWith?: Maybe<Scalars['String']>;
  transactionNotEndsWithNocase?: Maybe<Scalars['String']>;
  timestamp?: Maybe<Scalars['BigInt']>;
  timestampNot?: Maybe<Scalars['BigInt']>;
  timestampGt?: Maybe<Scalars['BigInt']>;
  timestampLt?: Maybe<Scalars['BigInt']>;
  timestampGte?: Maybe<Scalars['BigInt']>;
  timestampLte?: Maybe<Scalars['BigInt']>;
  timestampIn?: Maybe<Array<Scalars['BigInt']>>;
  timestampNotIn?: Maybe<Array<Scalars['BigInt']>>;
  token?: Maybe<TokenFilter>;
  tokenNot?: Maybe<Scalars['String']>;
  tokenGt?: Maybe<Scalars['String']>;
  tokenLt?: Maybe<Scalars['String']>;
  tokenGte?: Maybe<Scalars['String']>;
  tokenLte?: Maybe<Scalars['String']>;
  tokenIn?: Maybe<Array<Scalars['String']>>;
  tokenNotIn?: Maybe<Array<Scalars['String']>>;
  tokenContains?: Maybe<Scalars['String']>;
  tokenContainsNocase?: Maybe<Scalars['String']>;
  tokenNotContains?: Maybe<Scalars['String']>;
  tokenNotContainsNocase?: Maybe<Scalars['String']>;
  tokenStartsWith?: Maybe<Scalars['String']>;
  tokenStartsWithNocase?: Maybe<Scalars['String']>;
  tokenNotStartsWith?: Maybe<Scalars['String']>;
  tokenNotStartsWithNocase?: Maybe<Scalars['String']>;
  tokenEndsWith?: Maybe<Scalars['String']>;
  tokenEndsWithNocase?: Maybe<Scalars['String']>;
  tokenNotEndsWith?: Maybe<Scalars['String']>;
  tokenNotEndsWithNocase?: Maybe<Scalars['String']>;
  owner?: Maybe<AccountFilter>;
  ownerNot?: Maybe<Scalars['String']>;
  ownerGt?: Maybe<Scalars['String']>;
  ownerLt?: Maybe<Scalars['String']>;
  ownerGte?: Maybe<Scalars['String']>;
  ownerLte?: Maybe<Scalars['String']>;
  ownerIn?: Maybe<Array<Scalars['String']>>;
  ownerNotIn?: Maybe<Array<Scalars['String']>>;
  ownerContains?: Maybe<Scalars['String']>;
  ownerContainsNocase?: Maybe<Scalars['String']>;
  ownerNotContains?: Maybe<Scalars['String']>;
  ownerNotContainsNocase?: Maybe<Scalars['String']>;
  ownerStartsWith?: Maybe<Scalars['String']>;
  ownerStartsWithNocase?: Maybe<Scalars['String']>;
  ownerNotStartsWith?: Maybe<Scalars['String']>;
  ownerNotStartsWithNocase?: Maybe<Scalars['String']>;
  ownerEndsWith?: Maybe<Scalars['String']>;
  ownerEndsWithNocase?: Maybe<Scalars['String']>;
  ownerNotEndsWith?: Maybe<Scalars['String']>;
  ownerNotEndsWithNocase?: Maybe<Scalars['String']>;
  spender?: Maybe<AccountFilter>;
  spenderNot?: Maybe<Scalars['String']>;
  spenderGt?: Maybe<Scalars['String']>;
  spenderLt?: Maybe<Scalars['String']>;
  spenderGte?: Maybe<Scalars['String']>;
  spenderLte?: Maybe<Scalars['String']>;
  spenderIn?: Maybe<Array<Scalars['String']>>;
  spenderNotIn?: Maybe<Array<Scalars['String']>>;
  spenderContains?: Maybe<Scalars['String']>;
  spenderContainsNocase?: Maybe<Scalars['String']>;
  spenderNotContains?: Maybe<Scalars['String']>;
  spenderNotContainsNocase?: Maybe<Scalars['String']>;
  spenderStartsWith?: Maybe<Scalars['String']>;
  spenderStartsWithNocase?: Maybe<Scalars['String']>;
  spenderNotStartsWith?: Maybe<Scalars['String']>;
  spenderNotStartsWithNocase?: Maybe<Scalars['String']>;
  spenderEndsWith?: Maybe<Scalars['String']>;
  spenderEndsWithNocase?: Maybe<Scalars['String']>;
  spenderNotEndsWith?: Maybe<Scalars['String']>;
  spenderNotEndsWithNocase?: Maybe<Scalars['String']>;
  value?: Maybe<Scalars['BigInt']>;
  valueNot?: Maybe<Scalars['BigInt']>;
  valueGt?: Maybe<Scalars['BigInt']>;
  valueLt?: Maybe<Scalars['BigInt']>;
  valueGte?: Maybe<Scalars['BigInt']>;
  valueLte?: Maybe<Scalars['BigInt']>;
  valueIn?: Maybe<Array<Scalars['BigInt']>>;
  valueNotIn?: Maybe<Array<Scalars['BigInt']>>;
  /** Filter for the block changed event. */
  changeBlock?: Maybe<BlockChangedFilter>;
};

export enum ApprovalOrderBy {
  id = 'id',
  transaction = 'transaction',
  timestamp = 'timestamp',
  token = 'token',
  owner = 'owner',
  spender = 'spender',
  value = 'value'
}

export type Balance = {
  id: Scalars['ID'];
  token: Token;
  account: Account;
  value: Scalars['BigInt'];
  transfersFrom: Array<Transfer>;
  transfersTo: Array<Transfer>;
};


export type BalanceTransfersFromArgs = {
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<TransferOrderBy>;
  orderDirection?: Maybe<OrderDirection>;
  where?: Maybe<TransferFilter>;
};


export type BalanceTransfersToArgs = {
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<TransferOrderBy>;
  orderDirection?: Maybe<OrderDirection>;
  where?: Maybe<TransferFilter>;
};

export type BalanceFilter = {
  id?: Maybe<Scalars['ID']>;
  idNot?: Maybe<Scalars['ID']>;
  idGt?: Maybe<Scalars['ID']>;
  idLt?: Maybe<Scalars['ID']>;
  idGte?: Maybe<Scalars['ID']>;
  idLte?: Maybe<Scalars['ID']>;
  idIn?: Maybe<Array<Scalars['ID']>>;
  idNotIn?: Maybe<Array<Scalars['ID']>>;
  token?: Maybe<TokenFilter>;
  tokenNot?: Maybe<Scalars['String']>;
  tokenGt?: Maybe<Scalars['String']>;
  tokenLt?: Maybe<Scalars['String']>;
  tokenGte?: Maybe<Scalars['String']>;
  tokenLte?: Maybe<Scalars['String']>;
  tokenIn?: Maybe<Array<Scalars['String']>>;
  tokenNotIn?: Maybe<Array<Scalars['String']>>;
  tokenContains?: Maybe<Scalars['String']>;
  tokenContainsNocase?: Maybe<Scalars['String']>;
  tokenNotContains?: Maybe<Scalars['String']>;
  tokenNotContainsNocase?: Maybe<Scalars['String']>;
  tokenStartsWith?: Maybe<Scalars['String']>;
  tokenStartsWithNocase?: Maybe<Scalars['String']>;
  tokenNotStartsWith?: Maybe<Scalars['String']>;
  tokenNotStartsWithNocase?: Maybe<Scalars['String']>;
  tokenEndsWith?: Maybe<Scalars['String']>;
  tokenEndsWithNocase?: Maybe<Scalars['String']>;
  tokenNotEndsWith?: Maybe<Scalars['String']>;
  tokenNotEndsWithNocase?: Maybe<Scalars['String']>;
  account?: Maybe<AccountFilter>;
  accountNot?: Maybe<Scalars['String']>;
  accountGt?: Maybe<Scalars['String']>;
  accountLt?: Maybe<Scalars['String']>;
  accountGte?: Maybe<Scalars['String']>;
  accountLte?: Maybe<Scalars['String']>;
  accountIn?: Maybe<Array<Scalars['String']>>;
  accountNotIn?: Maybe<Array<Scalars['String']>>;
  accountContains?: Maybe<Scalars['String']>;
  accountContainsNocase?: Maybe<Scalars['String']>;
  accountNotContains?: Maybe<Scalars['String']>;
  accountNotContainsNocase?: Maybe<Scalars['String']>;
  accountStartsWith?: Maybe<Scalars['String']>;
  accountStartsWithNocase?: Maybe<Scalars['String']>;
  accountNotStartsWith?: Maybe<Scalars['String']>;
  accountNotStartsWithNocase?: Maybe<Scalars['String']>;
  accountEndsWith?: Maybe<Scalars['String']>;
  accountEndsWithNocase?: Maybe<Scalars['String']>;
  accountNotEndsWith?: Maybe<Scalars['String']>;
  accountNotEndsWithNocase?: Maybe<Scalars['String']>;
  value?: Maybe<Scalars['BigInt']>;
  valueNot?: Maybe<Scalars['BigInt']>;
  valueGt?: Maybe<Scalars['BigInt']>;
  valueLt?: Maybe<Scalars['BigInt']>;
  valueGte?: Maybe<Scalars['BigInt']>;
  valueLte?: Maybe<Scalars['BigInt']>;
  valueIn?: Maybe<Array<Scalars['BigInt']>>;
  valueNotIn?: Maybe<Array<Scalars['BigInt']>>;
  transfersFrom?: Maybe<TransferFilter>;
  transfersTo?: Maybe<TransferFilter>;
  /** Filter for the block changed event. */
  changeBlock?: Maybe<BlockChangedFilter>;
};

export enum BalanceOrderBy {
  id = 'id',
  token = 'token',
  account = 'account',
  value = 'value',
  transfersFrom = 'transfersFrom',
  transfersTo = 'transfersTo'
}

export type DecimalValue = {
  id: Scalars['ID'];
  value: Scalars['BigDecimal'];
  exact: Scalars['BigInt'];
  decimals: Scalars['Int'];
};

export type DecimalValueFilter = {
  id?: Maybe<Scalars['ID']>;
  idNot?: Maybe<Scalars['ID']>;
  idGt?: Maybe<Scalars['ID']>;
  idLt?: Maybe<Scalars['ID']>;
  idGte?: Maybe<Scalars['ID']>;
  idLte?: Maybe<Scalars['ID']>;
  idIn?: Maybe<Array<Scalars['ID']>>;
  idNotIn?: Maybe<Array<Scalars['ID']>>;
  value?: Maybe<Scalars['BigDecimal']>;
  valueNot?: Maybe<Scalars['BigDecimal']>;
  valueGt?: Maybe<Scalars['BigDecimal']>;
  valueLt?: Maybe<Scalars['BigDecimal']>;
  valueGte?: Maybe<Scalars['BigDecimal']>;
  valueLte?: Maybe<Scalars['BigDecimal']>;
  valueIn?: Maybe<Array<Scalars['BigDecimal']>>;
  valueNotIn?: Maybe<Array<Scalars['BigDecimal']>>;
  exact?: Maybe<Scalars['BigInt']>;
  exactNot?: Maybe<Scalars['BigInt']>;
  exactGt?: Maybe<Scalars['BigInt']>;
  exactLt?: Maybe<Scalars['BigInt']>;
  exactGte?: Maybe<Scalars['BigInt']>;
  exactLte?: Maybe<Scalars['BigInt']>;
  exactIn?: Maybe<Array<Scalars['BigInt']>>;
  exactNotIn?: Maybe<Array<Scalars['BigInt']>>;
  decimals?: Maybe<Scalars['Int']>;
  decimalsNot?: Maybe<Scalars['Int']>;
  decimalsGt?: Maybe<Scalars['Int']>;
  decimalsLt?: Maybe<Scalars['Int']>;
  decimalsGte?: Maybe<Scalars['Int']>;
  decimalsLte?: Maybe<Scalars['Int']>;
  decimalsIn?: Maybe<Array<Scalars['Int']>>;
  decimalsNotIn?: Maybe<Array<Scalars['Int']>>;
  /** Filter for the block changed event. */
  changeBlock?: Maybe<BlockChangedFilter>;
};

export enum DecimalValueOrderBy {
  id = 'id',
  value = 'value',
  exact = 'exact',
  decimals = 'decimals'
}

export type Event = {
  id: Scalars['ID'];
  transaction: Transaction;
  timestamp: Scalars['BigInt'];
};

export type EventFilter = {
  id?: Maybe<Scalars['ID']>;
  idNot?: Maybe<Scalars['ID']>;
  idGt?: Maybe<Scalars['ID']>;
  idLt?: Maybe<Scalars['ID']>;
  idGte?: Maybe<Scalars['ID']>;
  idLte?: Maybe<Scalars['ID']>;
  idIn?: Maybe<Array<Scalars['ID']>>;
  idNotIn?: Maybe<Array<Scalars['ID']>>;
  transaction?: Maybe<TransactionFilter>;
  transactionNot?: Maybe<Scalars['String']>;
  transactionGt?: Maybe<Scalars['String']>;
  transactionLt?: Maybe<Scalars['String']>;
  transactionGte?: Maybe<Scalars['String']>;
  transactionLte?: Maybe<Scalars['String']>;
  transactionIn?: Maybe<Array<Scalars['String']>>;
  transactionNotIn?: Maybe<Array<Scalars['String']>>;
  transactionContains?: Maybe<Scalars['String']>;
  transactionContainsNocase?: Maybe<Scalars['String']>;
  transactionNotContains?: Maybe<Scalars['String']>;
  transactionNotContainsNocase?: Maybe<Scalars['String']>;
  transactionStartsWith?: Maybe<Scalars['String']>;
  transactionStartsWithNocase?: Maybe<Scalars['String']>;
  transactionNotStartsWith?: Maybe<Scalars['String']>;
  transactionNotStartsWithNocase?: Maybe<Scalars['String']>;
  transactionEndsWith?: Maybe<Scalars['String']>;
  transactionEndsWithNocase?: Maybe<Scalars['String']>;
  transactionNotEndsWith?: Maybe<Scalars['String']>;
  transactionNotEndsWithNocase?: Maybe<Scalars['String']>;
  timestamp?: Maybe<Scalars['BigInt']>;
  timestampNot?: Maybe<Scalars['BigInt']>;
  timestampGt?: Maybe<Scalars['BigInt']>;
  timestampLt?: Maybe<Scalars['BigInt']>;
  timestampGte?: Maybe<Scalars['BigInt']>;
  timestampLte?: Maybe<Scalars['BigInt']>;
  timestampIn?: Maybe<Array<Scalars['BigInt']>>;
  timestampNotIn?: Maybe<Array<Scalars['BigInt']>>;
  /** Filter for the block changed event. */
  changeBlock?: Maybe<BlockChangedFilter>;
};

export enum EventOrderBy {
  id = 'id',
  transaction = 'transaction',
  timestamp = 'timestamp'
}

export type PersistentString = {
  id: Scalars['ID'];
  value: Scalars['String'];
};

export type PersistentStringArray = {
  id: Scalars['ID'];
  values: Array<Scalars['String']>;
};

export type PersistentStringArrayFilter = {
  id?: Maybe<Scalars['ID']>;
  idNot?: Maybe<Scalars['ID']>;
  idGt?: Maybe<Scalars['ID']>;
  idLt?: Maybe<Scalars['ID']>;
  idGte?: Maybe<Scalars['ID']>;
  idLte?: Maybe<Scalars['ID']>;
  idIn?: Maybe<Array<Scalars['ID']>>;
  idNotIn?: Maybe<Array<Scalars['ID']>>;
  values?: Maybe<Array<Scalars['String']>>;
  valuesNot?: Maybe<Array<Scalars['String']>>;
  valuesContains?: Maybe<Array<Scalars['String']>>;
  valuesContainsNocase?: Maybe<Array<Scalars['String']>>;
  valuesNotContains?: Maybe<Array<Scalars['String']>>;
  valuesNotContainsNocase?: Maybe<Array<Scalars['String']>>;
  /** Filter for the block changed event. */
  changeBlock?: Maybe<BlockChangedFilter>;
};

export enum PersistentStringArrayOrderBy {
  id = 'id',
  values = 'values'
}

export type PersistentStringFilter = {
  id?: Maybe<Scalars['ID']>;
  idNot?: Maybe<Scalars['ID']>;
  idGt?: Maybe<Scalars['ID']>;
  idLt?: Maybe<Scalars['ID']>;
  idGte?: Maybe<Scalars['ID']>;
  idLte?: Maybe<Scalars['ID']>;
  idIn?: Maybe<Array<Scalars['ID']>>;
  idNotIn?: Maybe<Array<Scalars['ID']>>;
  value?: Maybe<Scalars['String']>;
  valueNot?: Maybe<Scalars['String']>;
  valueGt?: Maybe<Scalars['String']>;
  valueLt?: Maybe<Scalars['String']>;
  valueGte?: Maybe<Scalars['String']>;
  valueLte?: Maybe<Scalars['String']>;
  valueIn?: Maybe<Array<Scalars['String']>>;
  valueNotIn?: Maybe<Array<Scalars['String']>>;
  valueContains?: Maybe<Scalars['String']>;
  valueContainsNocase?: Maybe<Scalars['String']>;
  valueNotContains?: Maybe<Scalars['String']>;
  valueNotContainsNocase?: Maybe<Scalars['String']>;
  valueStartsWith?: Maybe<Scalars['String']>;
  valueStartsWithNocase?: Maybe<Scalars['String']>;
  valueNotStartsWith?: Maybe<Scalars['String']>;
  valueNotStartsWithNocase?: Maybe<Scalars['String']>;
  valueEndsWith?: Maybe<Scalars['String']>;
  valueEndsWithNocase?: Maybe<Scalars['String']>;
  valueNotEndsWith?: Maybe<Scalars['String']>;
  valueNotEndsWithNocase?: Maybe<Scalars['String']>;
  /** Filter for the block changed event. */
  changeBlock?: Maybe<BlockChangedFilter>;
};

export enum PersistentStringOrderBy {
  id = 'id',
  value = 'value'
}

export type TokenRegistry = {
  id: Scalars['ID'];
  tokens: Array<Token>;
};


export type TokenRegistryTokensArgs = {
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<TokenOrderBy>;
  orderDirection?: Maybe<OrderDirection>;
  where?: Maybe<TokenFilter>;
};

export type TokenRegistryFilter = {
  id?: Maybe<Scalars['ID']>;
  idNot?: Maybe<Scalars['ID']>;
  idGt?: Maybe<Scalars['ID']>;
  idLt?: Maybe<Scalars['ID']>;
  idGte?: Maybe<Scalars['ID']>;
  idLte?: Maybe<Scalars['ID']>;
  idIn?: Maybe<Array<Scalars['ID']>>;
  idNotIn?: Maybe<Array<Scalars['ID']>>;
  tokens?: Maybe<TokenFilter>;
  /** Filter for the block changed event. */
  changeBlock?: Maybe<BlockChangedFilter>;
};

export enum TokenRegistryOrderBy {
  id = 'id',
  tokens = 'tokens'
}

export type Transaction = {
  id: Scalars['ID'];
  timestamp: Scalars['BigInt'];
  blockNumber: Scalars['BigInt'];
  events: Array<Event>;
};


export type TransactionEventsArgs = {
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<EventOrderBy>;
  orderDirection?: Maybe<OrderDirection>;
  where?: Maybe<EventFilter>;
};

export type TransactionFilter = {
  id?: Maybe<Scalars['ID']>;
  idNot?: Maybe<Scalars['ID']>;
  idGt?: Maybe<Scalars['ID']>;
  idLt?: Maybe<Scalars['ID']>;
  idGte?: Maybe<Scalars['ID']>;
  idLte?: Maybe<Scalars['ID']>;
  idIn?: Maybe<Array<Scalars['ID']>>;
  idNotIn?: Maybe<Array<Scalars['ID']>>;
  timestamp?: Maybe<Scalars['BigInt']>;
  timestampNot?: Maybe<Scalars['BigInt']>;
  timestampGt?: Maybe<Scalars['BigInt']>;
  timestampLt?: Maybe<Scalars['BigInt']>;
  timestampGte?: Maybe<Scalars['BigInt']>;
  timestampLte?: Maybe<Scalars['BigInt']>;
  timestampIn?: Maybe<Array<Scalars['BigInt']>>;
  timestampNotIn?: Maybe<Array<Scalars['BigInt']>>;
  blockNumber?: Maybe<Scalars['BigInt']>;
  blockNumberNot?: Maybe<Scalars['BigInt']>;
  blockNumberGt?: Maybe<Scalars['BigInt']>;
  blockNumberLt?: Maybe<Scalars['BigInt']>;
  blockNumberGte?: Maybe<Scalars['BigInt']>;
  blockNumberLte?: Maybe<Scalars['BigInt']>;
  blockNumberIn?: Maybe<Array<Scalars['BigInt']>>;
  blockNumberNotIn?: Maybe<Array<Scalars['BigInt']>>;
  events?: Maybe<EventFilter>;
  /** Filter for the block changed event. */
  changeBlock?: Maybe<BlockChangedFilter>;
};

export enum TransactionOrderBy {
  id = 'id',
  timestamp = 'timestamp',
  blockNumber = 'blockNumber',
  events = 'events'
}

export type Transfer = Event & {
  id: Scalars['ID'];
  transaction: Transaction;
  timestamp: Scalars['BigInt'];
  token: Token;
  operator: Account;
  from: Account;
  fromBalance?: Maybe<Balance>;
  to: Account;
  toBalance?: Maybe<Balance>;
  value: Scalars['BigInt'];
};

export type TransferFilter = {
  id?: Maybe<Scalars['ID']>;
  idNot?: Maybe<Scalars['ID']>;
  idGt?: Maybe<Scalars['ID']>;
  idLt?: Maybe<Scalars['ID']>;
  idGte?: Maybe<Scalars['ID']>;
  idLte?: Maybe<Scalars['ID']>;
  idIn?: Maybe<Array<Scalars['ID']>>;
  idNotIn?: Maybe<Array<Scalars['ID']>>;
  transaction?: Maybe<TransactionFilter>;
  transactionNot?: Maybe<Scalars['String']>;
  transactionGt?: Maybe<Scalars['String']>;
  transactionLt?: Maybe<Scalars['String']>;
  transactionGte?: Maybe<Scalars['String']>;
  transactionLte?: Maybe<Scalars['String']>;
  transactionIn?: Maybe<Array<Scalars['String']>>;
  transactionNotIn?: Maybe<Array<Scalars['String']>>;
  transactionContains?: Maybe<Scalars['String']>;
  transactionContainsNocase?: Maybe<Scalars['String']>;
  transactionNotContains?: Maybe<Scalars['String']>;
  transactionNotContainsNocase?: Maybe<Scalars['String']>;
  transactionStartsWith?: Maybe<Scalars['String']>;
  transactionStartsWithNocase?: Maybe<Scalars['String']>;
  transactionNotStartsWith?: Maybe<Scalars['String']>;
  transactionNotStartsWithNocase?: Maybe<Scalars['String']>;
  transactionEndsWith?: Maybe<Scalars['String']>;
  transactionEndsWithNocase?: Maybe<Scalars['String']>;
  transactionNotEndsWith?: Maybe<Scalars['String']>;
  transactionNotEndsWithNocase?: Maybe<Scalars['String']>;
  timestamp?: Maybe<Scalars['BigInt']>;
  timestampNot?: Maybe<Scalars['BigInt']>;
  timestampGt?: Maybe<Scalars['BigInt']>;
  timestampLt?: Maybe<Scalars['BigInt']>;
  timestampGte?: Maybe<Scalars['BigInt']>;
  timestampLte?: Maybe<Scalars['BigInt']>;
  timestampIn?: Maybe<Array<Scalars['BigInt']>>;
  timestampNotIn?: Maybe<Array<Scalars['BigInt']>>;
  token?: Maybe<TokenFilter>;
  tokenNot?: Maybe<Scalars['String']>;
  tokenGt?: Maybe<Scalars['String']>;
  tokenLt?: Maybe<Scalars['String']>;
  tokenGte?: Maybe<Scalars['String']>;
  tokenLte?: Maybe<Scalars['String']>;
  tokenIn?: Maybe<Array<Scalars['String']>>;
  tokenNotIn?: Maybe<Array<Scalars['String']>>;
  tokenContains?: Maybe<Scalars['String']>;
  tokenContainsNocase?: Maybe<Scalars['String']>;
  tokenNotContains?: Maybe<Scalars['String']>;
  tokenNotContainsNocase?: Maybe<Scalars['String']>;
  tokenStartsWith?: Maybe<Scalars['String']>;
  tokenStartsWithNocase?: Maybe<Scalars['String']>;
  tokenNotStartsWith?: Maybe<Scalars['String']>;
  tokenNotStartsWithNocase?: Maybe<Scalars['String']>;
  tokenEndsWith?: Maybe<Scalars['String']>;
  tokenEndsWithNocase?: Maybe<Scalars['String']>;
  tokenNotEndsWith?: Maybe<Scalars['String']>;
  tokenNotEndsWithNocase?: Maybe<Scalars['String']>;
  operator?: Maybe<AccountFilter>;
  operatorNot?: Maybe<Scalars['String']>;
  operatorGt?: Maybe<Scalars['String']>;
  operatorLt?: Maybe<Scalars['String']>;
  operatorGte?: Maybe<Scalars['String']>;
  operatorLte?: Maybe<Scalars['String']>;
  operatorIn?: Maybe<Array<Scalars['String']>>;
  operatorNotIn?: Maybe<Array<Scalars['String']>>;
  operatorContains?: Maybe<Scalars['String']>;
  operatorContainsNocase?: Maybe<Scalars['String']>;
  operatorNotContains?: Maybe<Scalars['String']>;
  operatorNotContainsNocase?: Maybe<Scalars['String']>;
  operatorStartsWith?: Maybe<Scalars['String']>;
  operatorStartsWithNocase?: Maybe<Scalars['String']>;
  operatorNotStartsWith?: Maybe<Scalars['String']>;
  operatorNotStartsWithNocase?: Maybe<Scalars['String']>;
  operatorEndsWith?: Maybe<Scalars['String']>;
  operatorEndsWithNocase?: Maybe<Scalars['String']>;
  operatorNotEndsWith?: Maybe<Scalars['String']>;
  operatorNotEndsWithNocase?: Maybe<Scalars['String']>;
  from?: Maybe<AccountFilter>;
  fromNot?: Maybe<Scalars['String']>;
  fromGt?: Maybe<Scalars['String']>;
  fromLt?: Maybe<Scalars['String']>;
  fromGte?: Maybe<Scalars['String']>;
  fromLte?: Maybe<Scalars['String']>;
  fromIn?: Maybe<Array<Scalars['String']>>;
  fromNotIn?: Maybe<Array<Scalars['String']>>;
  fromContains?: Maybe<Scalars['String']>;
  fromContainsNocase?: Maybe<Scalars['String']>;
  fromNotContains?: Maybe<Scalars['String']>;
  fromNotContainsNocase?: Maybe<Scalars['String']>;
  fromStartsWith?: Maybe<Scalars['String']>;
  fromStartsWithNocase?: Maybe<Scalars['String']>;
  fromNotStartsWith?: Maybe<Scalars['String']>;
  fromNotStartsWithNocase?: Maybe<Scalars['String']>;
  fromEndsWith?: Maybe<Scalars['String']>;
  fromEndsWithNocase?: Maybe<Scalars['String']>;
  fromNotEndsWith?: Maybe<Scalars['String']>;
  fromNotEndsWithNocase?: Maybe<Scalars['String']>;
  fromBalance?: Maybe<BalanceFilter>;
  fromBalanceNot?: Maybe<Scalars['String']>;
  fromBalanceGt?: Maybe<Scalars['String']>;
  fromBalanceLt?: Maybe<Scalars['String']>;
  fromBalanceGte?: Maybe<Scalars['String']>;
  fromBalanceLte?: Maybe<Scalars['String']>;
  fromBalanceIn?: Maybe<Array<Scalars['String']>>;
  fromBalanceNotIn?: Maybe<Array<Scalars['String']>>;
  fromBalanceContains?: Maybe<Scalars['String']>;
  fromBalanceContainsNocase?: Maybe<Scalars['String']>;
  fromBalanceNotContains?: Maybe<Scalars['String']>;
  fromBalanceNotContainsNocase?: Maybe<Scalars['String']>;
  fromBalanceStartsWith?: Maybe<Scalars['String']>;
  fromBalanceStartsWithNocase?: Maybe<Scalars['String']>;
  fromBalanceNotStartsWith?: Maybe<Scalars['String']>;
  fromBalanceNotStartsWithNocase?: Maybe<Scalars['String']>;
  fromBalanceEndsWith?: Maybe<Scalars['String']>;
  fromBalanceEndsWithNocase?: Maybe<Scalars['String']>;
  fromBalanceNotEndsWith?: Maybe<Scalars['String']>;
  fromBalanceNotEndsWithNocase?: Maybe<Scalars['String']>;
  to?: Maybe<AccountFilter>;
  toNot?: Maybe<Scalars['String']>;
  toGt?: Maybe<Scalars['String']>;
  toLt?: Maybe<Scalars['String']>;
  toGte?: Maybe<Scalars['String']>;
  toLte?: Maybe<Scalars['String']>;
  toIn?: Maybe<Array<Scalars['String']>>;
  toNotIn?: Maybe<Array<Scalars['String']>>;
  toContains?: Maybe<Scalars['String']>;
  toContainsNocase?: Maybe<Scalars['String']>;
  toNotContains?: Maybe<Scalars['String']>;
  toNotContainsNocase?: Maybe<Scalars['String']>;
  toStartsWith?: Maybe<Scalars['String']>;
  toStartsWithNocase?: Maybe<Scalars['String']>;
  toNotStartsWith?: Maybe<Scalars['String']>;
  toNotStartsWithNocase?: Maybe<Scalars['String']>;
  toEndsWith?: Maybe<Scalars['String']>;
  toEndsWithNocase?: Maybe<Scalars['String']>;
  toNotEndsWith?: Maybe<Scalars['String']>;
  toNotEndsWithNocase?: Maybe<Scalars['String']>;
  toBalance?: Maybe<BalanceFilter>;
  toBalanceNot?: Maybe<Scalars['String']>;
  toBalanceGt?: Maybe<Scalars['String']>;
  toBalanceLt?: Maybe<Scalars['String']>;
  toBalanceGte?: Maybe<Scalars['String']>;
  toBalanceLte?: Maybe<Scalars['String']>;
  toBalanceIn?: Maybe<Array<Scalars['String']>>;
  toBalanceNotIn?: Maybe<Array<Scalars['String']>>;
  toBalanceContains?: Maybe<Scalars['String']>;
  toBalanceContainsNocase?: Maybe<Scalars['String']>;
  toBalanceNotContains?: Maybe<Scalars['String']>;
  toBalanceNotContainsNocase?: Maybe<Scalars['String']>;
  toBalanceStartsWith?: Maybe<Scalars['String']>;
  toBalanceStartsWithNocase?: Maybe<Scalars['String']>;
  toBalanceNotStartsWith?: Maybe<Scalars['String']>;
  toBalanceNotStartsWithNocase?: Maybe<Scalars['String']>;
  toBalanceEndsWith?: Maybe<Scalars['String']>;
  toBalanceEndsWithNocase?: Maybe<Scalars['String']>;
  toBalanceNotEndsWith?: Maybe<Scalars['String']>;
  toBalanceNotEndsWithNocase?: Maybe<Scalars['String']>;
  value?: Maybe<Scalars['BigInt']>;
  valueNot?: Maybe<Scalars['BigInt']>;
  valueGt?: Maybe<Scalars['BigInt']>;
  valueLt?: Maybe<Scalars['BigInt']>;
  valueGte?: Maybe<Scalars['BigInt']>;
  valueLte?: Maybe<Scalars['BigInt']>;
  valueIn?: Maybe<Array<Scalars['BigInt']>>;
  valueNotIn?: Maybe<Array<Scalars['BigInt']>>;
  /** Filter for the block changed event. */
  changeBlock?: Maybe<BlockChangedFilter>;
};

export enum TransferOrderBy {
  id = 'id',
  transaction = 'transaction',
  timestamp = 'timestamp',
  token = 'token',
  operator = 'operator',
  from = 'from',
  fromBalance = 'fromBalance',
  to = 'to',
  toBalance = 'toBalance',
  value = 'value'
}

export enum Standard {
  erc721 = 'erc721',
  erc1155 = 'erc1155'
}

export type WithIndex<TObject> = TObject & Record<string, any>;
export type ResolversObject<TObject> = WithIndex<TObject>;

export type ResolverTypeWrapper<T> = Promise<T> | T;


export type LegacyStitchingResolver<TResult, TParent, TContext, TArgs> = {
  fragment: string;
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};

export type NewStitchingResolver<TResult, TParent, TContext, TArgs> = {
  selectionSet: string;
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};
export type StitchingResolver<TResult, TParent, TContext, TArgs> = LegacyStitchingResolver<TResult, TParent, TContext, TArgs> | NewStitchingResolver<TResult, TParent, TContext, TArgs>;
export type Resolver<TResult, TParent = {}, TContext = {}, TArgs = {}> =
  | ResolverFn<TResult, TParent, TContext, TArgs>
  | StitchingResolver<TResult, TParent, TContext, TArgs>;

export type ResolverFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => Promise<TResult> | TResult;

export type SubscriptionSubscribeFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => AsyncIterator<TResult> | Promise<AsyncIterator<TResult>>;

export type SubscriptionResolveFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

export interface SubscriptionSubscriberObject<TResult, TKey extends string, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<{ [key in TKey]: TResult }, TParent, TContext, TArgs>;
  resolve?: SubscriptionResolveFn<TResult, { [key in TKey]: TResult }, TContext, TArgs>;
}

export interface SubscriptionResolverObject<TResult, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<any, TParent, TContext, TArgs>;
  resolve: SubscriptionResolveFn<TResult, any, TContext, TArgs>;
}

export type SubscriptionObject<TResult, TKey extends string, TParent, TContext, TArgs> =
  | SubscriptionSubscriberObject<TResult, TKey, TParent, TContext, TArgs>
  | SubscriptionResolverObject<TResult, TParent, TContext, TArgs>;

export type SubscriptionResolver<TResult, TKey extends string, TParent = {}, TContext = {}, TArgs = {}> =
  | ((...args: any[]) => SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>)
  | SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>;

export type TypeResolveFn<TTypes, TParent = {}, TContext = {}> = (
  parent: TParent,
  context: TContext,
  info: GraphQLResolveInfo
) => Maybe<TTypes> | Promise<Maybe<TTypes>>;

export type IsTypeOfResolverFn<T = {}, TContext = {}> = (obj: T, context: TContext, info: GraphQLResolveInfo) => boolean | Promise<boolean>;

export type NextResolverFn<T> = () => Promise<T>;

export type DirectiveResolverFn<TResult = {}, TParent = {}, TContext = {}, TArgs = {}> = (
  next: NextResolverFn<TResult>,
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

/** Mapping between all available schema types and the resolvers types */
export type ResolversTypes = ResolversObject<{
  Query: ResolverTypeWrapper<{}>;
  Subscription: ResolverTypeWrapper<{}>;
  All: ResolverTypeWrapper<All>;
  AllFilter: AllFilter;
  AllOrderBy: AllOrderBy;
  BigDecimal: ResolverTypeWrapper<Scalars['BigDecimal']>;
  BigInt: ResolverTypeWrapper<Scalars['BigInt']>;
  BlockChangedFilter: BlockChangedFilter;
  BlockHeight: BlockHeight;
  Boolean: ResolverTypeWrapper<Scalars['Boolean']>;
  Bytes: ResolverTypeWrapper<Scalars['Bytes']>;
  Float: ResolverTypeWrapper<Scalars['Float']>;
  ID: ResolverTypeWrapper<Scalars['ID']>;
  Int: ResolverTypeWrapper<Scalars['Int']>;
  OrderDirection: OrderDirection;
  Owner: ResolverTypeWrapper<Owner>;
  OwnerPerTokenContract: ResolverTypeWrapper<OwnerPerTokenContract>;
  OwnerPerTokenContractFilter: OwnerPerTokenContractFilter;
  OwnerPerTokenContractOrderBy: OwnerPerTokenContractOrderBy;
  OwnerFilter: OwnerFilter;
  OwnerOrderBy: OwnerOrderBy;
  String: ResolverTypeWrapper<Scalars['String']>;
  Token: ResolverTypeWrapper<Token>;
  TokenContract: ResolverTypeWrapper<TokenContract>;
  TokenContractFilter: TokenContractFilter;
  TokenContractOrderBy: TokenContractOrderBy;
  TokenFilter: TokenFilter;
  TokenOrderBy: TokenOrderBy;
  Block: ResolverTypeWrapper<Block>;
  Meta: ResolverTypeWrapper<Meta>;
  SubgraphErrorPolicy: SubgraphErrorPolicy;
  Account: ResolverTypeWrapper<Account>;
  AccountFilter: AccountFilter;
  AccountOrderBy: AccountOrderBy;
  Approval: ResolverTypeWrapper<Approval>;
  ApprovalFilter: ApprovalFilter;
  ApprovalOrderBy: ApprovalOrderBy;
  Balance: ResolverTypeWrapper<Balance>;
  BalanceFilter: BalanceFilter;
  BalanceOrderBy: BalanceOrderBy;
  DecimalValue: ResolverTypeWrapper<DecimalValue>;
  DecimalValueFilter: DecimalValueFilter;
  DecimalValueOrderBy: DecimalValueOrderBy;
  Event: ResolversTypes['Approval'] | ResolversTypes['Transfer'];
  EventFilter: EventFilter;
  EventOrderBy: EventOrderBy;
  PersistentString: ResolverTypeWrapper<PersistentString>;
  PersistentStringArray: ResolverTypeWrapper<PersistentStringArray>;
  PersistentStringArrayFilter: PersistentStringArrayFilter;
  PersistentStringArrayOrderBy: PersistentStringArrayOrderBy;
  PersistentStringFilter: PersistentStringFilter;
  PersistentStringOrderBy: PersistentStringOrderBy;
  TokenRegistry: ResolverTypeWrapper<TokenRegistry>;
  TokenRegistryFilter: TokenRegistryFilter;
  TokenRegistryOrderBy: TokenRegistryOrderBy;
  Transaction: ResolverTypeWrapper<Transaction>;
  TransactionFilter: TransactionFilter;
  TransactionOrderBy: TransactionOrderBy;
  Transfer: ResolverTypeWrapper<Transfer>;
  TransferFilter: TransferFilter;
  TransferOrderBy: TransferOrderBy;
  Standard: Standard;
}>;

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = ResolversObject<{
  Query: {};
  Subscription: {};
  All: All;
  AllFilter: AllFilter;
  BigDecimal: Scalars['BigDecimal'];
  BigInt: Scalars['BigInt'];
  BlockChangedFilter: BlockChangedFilter;
  BlockHeight: BlockHeight;
  Boolean: Scalars['Boolean'];
  Bytes: Scalars['Bytes'];
  Float: Scalars['Float'];
  ID: Scalars['ID'];
  Int: Scalars['Int'];
  Owner: Owner;
  OwnerPerTokenContract: OwnerPerTokenContract;
  OwnerPerTokenContractFilter: OwnerPerTokenContractFilter;
  OwnerFilter: OwnerFilter;
  String: Scalars['String'];
  Token: Token;
  TokenContract: TokenContract;
  TokenContractFilter: TokenContractFilter;
  TokenFilter: TokenFilter;
  Block: Block;
  Meta: Meta;
  Account: Account;
  AccountFilter: AccountFilter;
  Approval: Approval;
  ApprovalFilter: ApprovalFilter;
  Balance: Balance;
  BalanceFilter: BalanceFilter;
  DecimalValue: DecimalValue;
  DecimalValueFilter: DecimalValueFilter;
  Event: ResolversParentTypes['Approval'] | ResolversParentTypes['Transfer'];
  EventFilter: EventFilter;
  PersistentString: PersistentString;
  PersistentStringArray: PersistentStringArray;
  PersistentStringArrayFilter: PersistentStringArrayFilter;
  PersistentStringFilter: PersistentStringFilter;
  TokenRegistry: TokenRegistry;
  TokenRegistryFilter: TokenRegistryFilter;
  Transaction: Transaction;
  TransactionFilter: TransactionFilter;
  Transfer: Transfer;
  TransferFilter: TransferFilter;
}>;

export type QueryResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['Query'] = ResolversParentTypes['Query']> = ResolversObject<{
  all?: Resolver<Maybe<ResolversTypes['All']>, ParentType, ContextType, RequireFields<QueryAllArgs, 'id' | 'subgraphError'>>;
  alls?: Resolver<Array<ResolversTypes['All']>, ParentType, ContextType, RequireFields<QueryAllsArgs, 'skip' | 'first' | 'subgraphError'>>;
  token?: Resolver<Maybe<ResolversTypes['Token']>, ParentType, ContextType, RequireFields<QueryTokenArgs, 'id' | 'subgraphError'>>;
  tokens?: Resolver<Array<ResolversTypes['Token']>, ParentType, ContextType, RequireFields<QueryTokensArgs, 'skip' | 'first' | 'subgraphError'>>;
  tokenContract?: Resolver<Maybe<ResolversTypes['TokenContract']>, ParentType, ContextType, RequireFields<QueryTokenContractArgs, 'id' | 'subgraphError'>>;
  tokenContracts?: Resolver<Array<ResolversTypes['TokenContract']>, ParentType, ContextType, RequireFields<QueryTokenContractsArgs, 'skip' | 'first' | 'subgraphError'>>;
  owner?: Resolver<Maybe<ResolversTypes['Owner']>, ParentType, ContextType, RequireFields<QueryOwnerArgs, 'id' | 'subgraphError'>>;
  owners?: Resolver<Array<ResolversTypes['Owner']>, ParentType, ContextType, RequireFields<QueryOwnersArgs, 'skip' | 'first' | 'subgraphError'>>;
  ownerPerTokenContract?: Resolver<Maybe<ResolversTypes['OwnerPerTokenContract']>, ParentType, ContextType, RequireFields<QueryOwnerPerTokenContractArgs, 'id' | 'subgraphError'>>;
  ownerPerTokenContracts?: Resolver<Array<ResolversTypes['OwnerPerTokenContract']>, ParentType, ContextType, RequireFields<QueryOwnerPerTokenContractsArgs, 'skip' | 'first' | 'subgraphError'>>;
  meta?: Resolver<Maybe<ResolversTypes['Meta']>, ParentType, ContextType, RequireFields<QueryMetaArgs, never>>;
  account?: Resolver<Maybe<ResolversTypes['Account']>, ParentType, ContextType, RequireFields<QueryAccountArgs, 'id' | 'subgraphError'>>;
  accounts?: Resolver<Array<ResolversTypes['Account']>, ParentType, ContextType, RequireFields<QueryAccountsArgs, 'skip' | 'first' | 'subgraphError'>>;
  tokenRegistry?: Resolver<Maybe<ResolversTypes['TokenRegistry']>, ParentType, ContextType, RequireFields<QueryTokenRegistryArgs, 'id' | 'subgraphError'>>;
  tokenRegistries?: Resolver<Array<ResolversTypes['TokenRegistry']>, ParentType, ContextType, RequireFields<QueryTokenRegistriesArgs, 'skip' | 'first' | 'subgraphError'>>;
  balance?: Resolver<Maybe<ResolversTypes['Balance']>, ParentType, ContextType, RequireFields<QueryBalanceArgs, 'id' | 'subgraphError'>>;
  balances?: Resolver<Array<ResolversTypes['Balance']>, ParentType, ContextType, RequireFields<QueryBalancesArgs, 'skip' | 'first' | 'subgraphError'>>;
  transfer?: Resolver<Maybe<ResolversTypes['Transfer']>, ParentType, ContextType, RequireFields<QueryTransferArgs, 'id' | 'subgraphError'>>;
  transfers?: Resolver<Array<ResolversTypes['Transfer']>, ParentType, ContextType, RequireFields<QueryTransfersArgs, 'skip' | 'first' | 'subgraphError'>>;
  approval?: Resolver<Maybe<ResolversTypes['Approval']>, ParentType, ContextType, RequireFields<QueryApprovalArgs, 'id' | 'subgraphError'>>;
  approvals?: Resolver<Array<ResolversTypes['Approval']>, ParentType, ContextType, RequireFields<QueryApprovalsArgs, 'skip' | 'first' | 'subgraphError'>>;
  decimalValue?: Resolver<Maybe<ResolversTypes['DecimalValue']>, ParentType, ContextType, RequireFields<QueryDecimalValueArgs, 'id' | 'subgraphError'>>;
  decimalValues?: Resolver<Array<ResolversTypes['DecimalValue']>, ParentType, ContextType, RequireFields<QueryDecimalValuesArgs, 'skip' | 'first' | 'subgraphError'>>;
  transaction?: Resolver<Maybe<ResolversTypes['Transaction']>, ParentType, ContextType, RequireFields<QueryTransactionArgs, 'id' | 'subgraphError'>>;
  transactions?: Resolver<Array<ResolversTypes['Transaction']>, ParentType, ContextType, RequireFields<QueryTransactionsArgs, 'skip' | 'first' | 'subgraphError'>>;
  persistentStringArray?: Resolver<Maybe<ResolversTypes['PersistentStringArray']>, ParentType, ContextType, RequireFields<QueryPersistentStringArrayArgs, 'id' | 'subgraphError'>>;
  persistentStringArrays?: Resolver<Array<ResolversTypes['PersistentStringArray']>, ParentType, ContextType, RequireFields<QueryPersistentStringArraysArgs, 'skip' | 'first' | 'subgraphError'>>;
  persistentString?: Resolver<Maybe<ResolversTypes['PersistentString']>, ParentType, ContextType, RequireFields<QueryPersistentStringArgs, 'id' | 'subgraphError'>>;
  persistentStrings?: Resolver<Array<ResolversTypes['PersistentString']>, ParentType, ContextType, RequireFields<QueryPersistentStringsArgs, 'skip' | 'first' | 'subgraphError'>>;
  event?: Resolver<Maybe<ResolversTypes['Event']>, ParentType, ContextType, RequireFields<QueryEventArgs, 'id' | 'subgraphError'>>;
  events?: Resolver<Array<ResolversTypes['Event']>, ParentType, ContextType, RequireFields<QueryEventsArgs, 'skip' | 'first' | 'subgraphError'>>;
}>;

export type SubscriptionResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['Subscription'] = ResolversParentTypes['Subscription']> = ResolversObject<{
  all?: SubscriptionResolver<Maybe<ResolversTypes['All']>, "all", ParentType, ContextType, RequireFields<SubscriptionAllArgs, 'id' | 'subgraphError'>>;
  alls?: SubscriptionResolver<Array<ResolversTypes['All']>, "alls", ParentType, ContextType, RequireFields<SubscriptionAllsArgs, 'skip' | 'first' | 'subgraphError'>>;
  token?: SubscriptionResolver<Maybe<ResolversTypes['Token']>, "token", ParentType, ContextType, RequireFields<SubscriptionTokenArgs, 'id' | 'subgraphError'>>;
  tokens?: SubscriptionResolver<Array<ResolversTypes['Token']>, "tokens", ParentType, ContextType, RequireFields<SubscriptionTokensArgs, 'skip' | 'first' | 'subgraphError'>>;
  tokenContract?: SubscriptionResolver<Maybe<ResolversTypes['TokenContract']>, "tokenContract", ParentType, ContextType, RequireFields<SubscriptionTokenContractArgs, 'id' | 'subgraphError'>>;
  tokenContracts?: SubscriptionResolver<Array<ResolversTypes['TokenContract']>, "tokenContracts", ParentType, ContextType, RequireFields<SubscriptionTokenContractsArgs, 'skip' | 'first' | 'subgraphError'>>;
  owner?: SubscriptionResolver<Maybe<ResolversTypes['Owner']>, "owner", ParentType, ContextType, RequireFields<SubscriptionOwnerArgs, 'id' | 'subgraphError'>>;
  owners?: SubscriptionResolver<Array<ResolversTypes['Owner']>, "owners", ParentType, ContextType, RequireFields<SubscriptionOwnersArgs, 'skip' | 'first' | 'subgraphError'>>;
  ownerPerTokenContract?: SubscriptionResolver<Maybe<ResolversTypes['OwnerPerTokenContract']>, "ownerPerTokenContract", ParentType, ContextType, RequireFields<SubscriptionOwnerPerTokenContractArgs, 'id' | 'subgraphError'>>;
  ownerPerTokenContracts?: SubscriptionResolver<Array<ResolversTypes['OwnerPerTokenContract']>, "ownerPerTokenContracts", ParentType, ContextType, RequireFields<SubscriptionOwnerPerTokenContractsArgs, 'skip' | 'first' | 'subgraphError'>>;
  meta?: SubscriptionResolver<Maybe<ResolversTypes['Meta']>, "meta", ParentType, ContextType, RequireFields<SubscriptionMetaArgs, never>>;
  account?: SubscriptionResolver<Maybe<ResolversTypes['Account']>, "account", ParentType, ContextType, RequireFields<SubscriptionAccountArgs, 'id' | 'subgraphError'>>;
  accounts?: SubscriptionResolver<Array<ResolversTypes['Account']>, "accounts", ParentType, ContextType, RequireFields<SubscriptionAccountsArgs, 'skip' | 'first' | 'subgraphError'>>;
  tokenRegistry?: SubscriptionResolver<Maybe<ResolversTypes['TokenRegistry']>, "tokenRegistry", ParentType, ContextType, RequireFields<SubscriptionTokenRegistryArgs, 'id' | 'subgraphError'>>;
  tokenRegistries?: SubscriptionResolver<Array<ResolversTypes['TokenRegistry']>, "tokenRegistries", ParentType, ContextType, RequireFields<SubscriptionTokenRegistriesArgs, 'skip' | 'first' | 'subgraphError'>>;
  balance?: SubscriptionResolver<Maybe<ResolversTypes['Balance']>, "balance", ParentType, ContextType, RequireFields<SubscriptionBalanceArgs, 'id' | 'subgraphError'>>;
  balances?: SubscriptionResolver<Array<ResolversTypes['Balance']>, "balances", ParentType, ContextType, RequireFields<SubscriptionBalancesArgs, 'skip' | 'first' | 'subgraphError'>>;
  transfer?: SubscriptionResolver<Maybe<ResolversTypes['Transfer']>, "transfer", ParentType, ContextType, RequireFields<SubscriptionTransferArgs, 'id' | 'subgraphError'>>;
  transfers?: SubscriptionResolver<Array<ResolversTypes['Transfer']>, "transfers", ParentType, ContextType, RequireFields<SubscriptionTransfersArgs, 'skip' | 'first' | 'subgraphError'>>;
  approval?: SubscriptionResolver<Maybe<ResolversTypes['Approval']>, "approval", ParentType, ContextType, RequireFields<SubscriptionApprovalArgs, 'id' | 'subgraphError'>>;
  approvals?: SubscriptionResolver<Array<ResolversTypes['Approval']>, "approvals", ParentType, ContextType, RequireFields<SubscriptionApprovalsArgs, 'skip' | 'first' | 'subgraphError'>>;
  decimalValue?: SubscriptionResolver<Maybe<ResolversTypes['DecimalValue']>, "decimalValue", ParentType, ContextType, RequireFields<SubscriptionDecimalValueArgs, 'id' | 'subgraphError'>>;
  decimalValues?: SubscriptionResolver<Array<ResolversTypes['DecimalValue']>, "decimalValues", ParentType, ContextType, RequireFields<SubscriptionDecimalValuesArgs, 'skip' | 'first' | 'subgraphError'>>;
  transaction?: SubscriptionResolver<Maybe<ResolversTypes['Transaction']>, "transaction", ParentType, ContextType, RequireFields<SubscriptionTransactionArgs, 'id' | 'subgraphError'>>;
  transactions?: SubscriptionResolver<Array<ResolversTypes['Transaction']>, "transactions", ParentType, ContextType, RequireFields<SubscriptionTransactionsArgs, 'skip' | 'first' | 'subgraphError'>>;
  persistentStringArray?: SubscriptionResolver<Maybe<ResolversTypes['PersistentStringArray']>, "persistentStringArray", ParentType, ContextType, RequireFields<SubscriptionPersistentStringArrayArgs, 'id' | 'subgraphError'>>;
  persistentStringArrays?: SubscriptionResolver<Array<ResolversTypes['PersistentStringArray']>, "persistentStringArrays", ParentType, ContextType, RequireFields<SubscriptionPersistentStringArraysArgs, 'skip' | 'first' | 'subgraphError'>>;
  persistentString?: SubscriptionResolver<Maybe<ResolversTypes['PersistentString']>, "persistentString", ParentType, ContextType, RequireFields<SubscriptionPersistentStringArgs, 'id' | 'subgraphError'>>;
  persistentStrings?: SubscriptionResolver<Array<ResolversTypes['PersistentString']>, "persistentStrings", ParentType, ContextType, RequireFields<SubscriptionPersistentStringsArgs, 'skip' | 'first' | 'subgraphError'>>;
  event?: SubscriptionResolver<Maybe<ResolversTypes['Event']>, "event", ParentType, ContextType, RequireFields<SubscriptionEventArgs, 'id' | 'subgraphError'>>;
  events?: SubscriptionResolver<Array<ResolversTypes['Event']>, "events", ParentType, ContextType, RequireFields<SubscriptionEventsArgs, 'skip' | 'first' | 'subgraphError'>>;
}>;

export type AllResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['All'] = ResolversParentTypes['All']> = ResolversObject<{
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  numTokenContracts?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  numTokens?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  numOwners?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export interface BigDecimalScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['BigDecimal'], any> {
  name: 'BigDecimal';
}

export interface BigIntScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['BigInt'], any> {
  name: 'BigInt';
}

export interface BytesScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['Bytes'], any> {
  name: 'Bytes';
}

export type OwnerResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['Owner'] = ResolversParentTypes['Owner']> = ResolversObject<{
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  tokens?: Resolver<Array<ResolversTypes['Token']>, ParentType, ContextType, RequireFields<OwnerTokensArgs, 'skip' | 'first'>>;
  numTokens?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type OwnerPerTokenContractResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['OwnerPerTokenContract'] = ResolversParentTypes['OwnerPerTokenContract']> = ResolversObject<{
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  owner?: Resolver<ResolversTypes['Owner'], ParentType, ContextType>;
  contract?: Resolver<ResolversTypes['TokenContract'], ParentType, ContextType>;
  numTokens?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type TokenResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['Token'] = ResolversParentTypes['Token']> = ResolversObject<{
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  contract?: Resolver<ResolversTypes['TokenContract'], ParentType, ContextType>;
  tokenId?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  owner?: Resolver<ResolversTypes['Owner'], ParentType, ContextType>;
  mintTime?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  tokenUri?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  registry?: Resolver<ResolversTypes['TokenRegistry'], ParentType, ContextType>;
  identifier?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  uri?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  totalSupply?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  balances?: Resolver<Array<ResolversTypes['Balance']>, ParentType, ContextType, RequireFields<TokenBalancesArgs, 'skip' | 'first'>>;
  transfers?: Resolver<Array<ResolversTypes['Transfer']>, ParentType, ContextType, RequireFields<TokenTransfersArgs, 'skip' | 'first'>>;
  approvals?: Resolver<Array<ResolversTypes['Approval']>, ParentType, ContextType, RequireFields<TokenApprovalsArgs, 'skip' | 'first'>>;
  standard?: Resolver<ResolversTypes['Standard'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type TokenContractResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['TokenContract'] = ResolversParentTypes['TokenContract']> = ResolversObject<{
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  symbol?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  doAllAddressesOwnTheirIdByDefault?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  supportsEip721Metadata?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  tokens?: Resolver<Array<ResolversTypes['Token']>, ParentType, ContextType, RequireFields<TokenContractTokensArgs, 'skip' | 'first'>>;
  numTokens?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  numOwners?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type TokenContractOrderByResolvers = { id: 'undefined', name: 'undefined', symbol: 'undefined', doAllAddressesOwnTheirIdByDefault: 'undefined', supportsEip721Metadata: 'supportsEIP721Metadata', tokens: 'undefined', numTokens: 'undefined', numOwners: 'undefined' };

export type TokenOrderByResolvers = { id: 'undefined', contract: 'undefined', tokenId: 'tokenID', owner: 'undefined', mintTime: 'undefined', tokenUri: 'tokenURI', registry: 'undefined', identifier: 'undefined', uri: 'URI', totalSupply: 'undefined', balances: 'undefined', transfers: 'undefined', approvals: 'undefined' };

export type BlockResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['Block'] = ResolversParentTypes['Block']> = ResolversObject<{
  hash?: Resolver<Maybe<ResolversTypes['Bytes']>, ParentType, ContextType>;
  number?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  timestamp?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type MetaResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['Meta'] = ResolversParentTypes['Meta']> = ResolversObject<{
  block?: Resolver<ResolversTypes['Block'], ParentType, ContextType>;
  deployment?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  hasIndexingErrors?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type AccountResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['Account'] = ResolversParentTypes['Account']> = ResolversObject<{
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  balances?: Resolver<Array<ResolversTypes['Balance']>, ParentType, ContextType, RequireFields<AccountBalancesArgs, 'skip' | 'first'>>;
  transfersOperator?: Resolver<Array<ResolversTypes['Transfer']>, ParentType, ContextType, RequireFields<AccountTransfersOperatorArgs, 'skip' | 'first'>>;
  transfersFrom?: Resolver<Array<ResolversTypes['Transfer']>, ParentType, ContextType, RequireFields<AccountTransfersFromArgs, 'skip' | 'first'>>;
  transfersTo?: Resolver<Array<ResolversTypes['Transfer']>, ParentType, ContextType, RequireFields<AccountTransfersToArgs, 'skip' | 'first'>>;
  approvalsOwner?: Resolver<Array<ResolversTypes['Approval']>, ParentType, ContextType, RequireFields<AccountApprovalsOwnerArgs, 'skip' | 'first'>>;
  approvalsSpender?: Resolver<Array<ResolversTypes['Approval']>, ParentType, ContextType, RequireFields<AccountApprovalsSpenderArgs, 'skip' | 'first'>>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type ApprovalResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['Approval'] = ResolversParentTypes['Approval']> = ResolversObject<{
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  transaction?: Resolver<ResolversTypes['Transaction'], ParentType, ContextType>;
  timestamp?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  token?: Resolver<ResolversTypes['Token'], ParentType, ContextType>;
  owner?: Resolver<ResolversTypes['Account'], ParentType, ContextType>;
  spender?: Resolver<ResolversTypes['Account'], ParentType, ContextType>;
  value?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type BalanceResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['Balance'] = ResolversParentTypes['Balance']> = ResolversObject<{
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  token?: Resolver<ResolversTypes['Token'], ParentType, ContextType>;
  account?: Resolver<ResolversTypes['Account'], ParentType, ContextType>;
  value?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  transfersFrom?: Resolver<Array<ResolversTypes['Transfer']>, ParentType, ContextType, RequireFields<BalanceTransfersFromArgs, 'skip' | 'first'>>;
  transfersTo?: Resolver<Array<ResolversTypes['Transfer']>, ParentType, ContextType, RequireFields<BalanceTransfersToArgs, 'skip' | 'first'>>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type DecimalValueResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['DecimalValue'] = ResolversParentTypes['DecimalValue']> = ResolversObject<{
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  value?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>;
  exact?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  decimals?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type EventResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['Event'] = ResolversParentTypes['Event']> = ResolversObject<{
  __resolveType: TypeResolveFn<'Approval' | 'Transfer', ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  transaction?: Resolver<ResolversTypes['Transaction'], ParentType, ContextType>;
  timestamp?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
}>;

export type PersistentStringResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['PersistentString'] = ResolversParentTypes['PersistentString']> = ResolversObject<{
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  value?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type PersistentStringArrayResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['PersistentStringArray'] = ResolversParentTypes['PersistentStringArray']> = ResolversObject<{
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  values?: Resolver<Array<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type TokenRegistryResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['TokenRegistry'] = ResolversParentTypes['TokenRegistry']> = ResolversObject<{
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  tokens?: Resolver<Array<ResolversTypes['Token']>, ParentType, ContextType, RequireFields<TokenRegistryTokensArgs, 'skip' | 'first'>>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type TransactionResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['Transaction'] = ResolversParentTypes['Transaction']> = ResolversObject<{
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  timestamp?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  blockNumber?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  events?: Resolver<Array<ResolversTypes['Event']>, ParentType, ContextType, RequireFields<TransactionEventsArgs, 'skip' | 'first'>>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type TransferResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['Transfer'] = ResolversParentTypes['Transfer']> = ResolversObject<{
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  transaction?: Resolver<ResolversTypes['Transaction'], ParentType, ContextType>;
  timestamp?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  token?: Resolver<ResolversTypes['Token'], ParentType, ContextType>;
  operator?: Resolver<ResolversTypes['Account'], ParentType, ContextType>;
  from?: Resolver<ResolversTypes['Account'], ParentType, ContextType>;
  fromBalance?: Resolver<Maybe<ResolversTypes['Balance']>, ParentType, ContextType>;
  to?: Resolver<ResolversTypes['Account'], ParentType, ContextType>;
  toBalance?: Resolver<Maybe<ResolversTypes['Balance']>, ParentType, ContextType>;
  value?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type Resolvers<ContextType = MeshContext> = ResolversObject<{
  Query?: QueryResolvers<ContextType>;
  Subscription?: SubscriptionResolvers<ContextType>;
  All?: AllResolvers<ContextType>;
  BigDecimal?: GraphQLScalarType;
  BigInt?: GraphQLScalarType;
  Bytes?: GraphQLScalarType;
  Owner?: OwnerResolvers<ContextType>;
  OwnerPerTokenContract?: OwnerPerTokenContractResolvers<ContextType>;
  Token?: TokenResolvers<ContextType>;
  TokenContract?: TokenContractResolvers<ContextType>;
  TokenContractOrderBy?: TokenContractOrderByResolvers;
  TokenOrderBy?: TokenOrderByResolvers;
  Block?: BlockResolvers<ContextType>;
  Meta?: MetaResolvers<ContextType>;
  Account?: AccountResolvers<ContextType>;
  Approval?: ApprovalResolvers<ContextType>;
  Balance?: BalanceResolvers<ContextType>;
  DecimalValue?: DecimalValueResolvers<ContextType>;
  Event?: EventResolvers<ContextType>;
  PersistentString?: PersistentStringResolvers<ContextType>;
  PersistentStringArray?: PersistentStringArrayResolvers<ContextType>;
  TokenRegistry?: TokenRegistryResolvers<ContextType>;
  Transaction?: TransactionResolvers<ContextType>;
  Transfer?: TransferResolvers<ContextType>;
}>;


/**
 * @deprecated
 * Use "Resolvers" root object instead. If you wish to get "IResolvers", add "typesPrefix: I" to your config.
 */
export type IResolvers<ContextType = MeshContext> = Resolvers<ContextType>;

import { MeshContext as BaseMeshContext, ProjectionOptions } from '@graphql-mesh/runtime';

export type Eip721Sdk = {
  all: (args: QueryAllArgs, projectionOptions?: ProjectionOptions) => Promise<Query['all']>,
  alls: (args: QueryAllsArgs, projectionOptions?: ProjectionOptions) => Promise<Query['alls']>,
  token: (args: QueryTokenArgs, projectionOptions?: ProjectionOptions) => Promise<Query['token']>,
  tokens: (args: QueryTokensArgs, projectionOptions?: ProjectionOptions) => Promise<Query['tokens']>,
  tokenContract: (args: QueryTokenContractArgs, projectionOptions?: ProjectionOptions) => Promise<Query['tokenContract']>,
  tokenContracts: (args: QueryTokenContractsArgs, projectionOptions?: ProjectionOptions) => Promise<Query['tokenContracts']>,
  owner: (args: QueryOwnerArgs, projectionOptions?: ProjectionOptions) => Promise<Query['owner']>,
  owners: (args: QueryOwnersArgs, projectionOptions?: ProjectionOptions) => Promise<Query['owners']>,
  ownerPerTokenContract: (args: QueryOwnerPerTokenContractArgs, projectionOptions?: ProjectionOptions) => Promise<Query['ownerPerTokenContract']>,
  ownerPerTokenContracts: (args: QueryOwnerPerTokenContractsArgs, projectionOptions?: ProjectionOptions) => Promise<Query['ownerPerTokenContracts']>,
  _meta: (args: Query_MetaArgs, projectionOptions?: ProjectionOptions) => Promise<Query['_meta']>
};

export type QueryEip721Sdk = {
  all: (args: QueryAllArgs, projectionOptions?: ProjectionOptions) => Promise<Query['all']>,
  alls: (args: QueryAllsArgs, projectionOptions?: ProjectionOptions) => Promise<Query['alls']>,
  token: (args: QueryTokenArgs, projectionOptions?: ProjectionOptions) => Promise<Query['token']>,
  tokens: (args: QueryTokensArgs, projectionOptions?: ProjectionOptions) => Promise<Query['tokens']>,
  tokenContract: (args: QueryTokenContractArgs, projectionOptions?: ProjectionOptions) => Promise<Query['tokenContract']>,
  tokenContracts: (args: QueryTokenContractsArgs, projectionOptions?: ProjectionOptions) => Promise<Query['tokenContracts']>,
  owner: (args: QueryOwnerArgs, projectionOptions?: ProjectionOptions) => Promise<Query['owner']>,
  owners: (args: QueryOwnersArgs, projectionOptions?: ProjectionOptions) => Promise<Query['owners']>,
  ownerPerTokenContract: (args: QueryOwnerPerTokenContractArgs, projectionOptions?: ProjectionOptions) => Promise<Query['ownerPerTokenContract']>,
  ownerPerTokenContracts: (args: QueryOwnerPerTokenContractsArgs, projectionOptions?: ProjectionOptions) => Promise<Query['ownerPerTokenContracts']>,
  _meta: (args: Query_MetaArgs, projectionOptions?: ProjectionOptions) => Promise<Query['_meta']>
};

export type MutationEip721Sdk = {

};

export type SubscriptionEip721Sdk = {
  all: (args: SubscriptionAllArgs, projectionOptions?: ProjectionOptions) => Promise<Subscription['all']>,
  alls: (args: SubscriptionAllsArgs, projectionOptions?: ProjectionOptions) => Promise<Subscription['alls']>,
  token: (args: SubscriptionTokenArgs, projectionOptions?: ProjectionOptions) => Promise<Subscription['token']>,
  tokens: (args: SubscriptionTokensArgs, projectionOptions?: ProjectionOptions) => Promise<Subscription['tokens']>,
  tokenContract: (args: SubscriptionTokenContractArgs, projectionOptions?: ProjectionOptions) => Promise<Subscription['tokenContract']>,
  tokenContracts: (args: SubscriptionTokenContractsArgs, projectionOptions?: ProjectionOptions) => Promise<Subscription['tokenContracts']>,
  owner: (args: SubscriptionOwnerArgs, projectionOptions?: ProjectionOptions) => Promise<Subscription['owner']>,
  owners: (args: SubscriptionOwnersArgs, projectionOptions?: ProjectionOptions) => Promise<Subscription['owners']>,
  ownerPerTokenContract: (args: SubscriptionOwnerPerTokenContractArgs, projectionOptions?: ProjectionOptions) => Promise<Subscription['ownerPerTokenContract']>,
  ownerPerTokenContracts: (args: SubscriptionOwnerPerTokenContractsArgs, projectionOptions?: ProjectionOptions) => Promise<Subscription['ownerPerTokenContracts']>,
  _meta: (args: Subscription_MetaArgs, projectionOptions?: ProjectionOptions) => Promise<Subscription['_meta']>
};

export type Eip1155Sdk = {
  account: (args: QueryAccountArgs, projectionOptions?: ProjectionOptions) => Promise<Query['account']>,
  accounts: (args: QueryAccountsArgs, projectionOptions?: ProjectionOptions) => Promise<Query['accounts']>,
  tokenRegistry: (args: QueryTokenRegistryArgs, projectionOptions?: ProjectionOptions) => Promise<Query['tokenRegistry']>,
  tokenRegistries: (args: QueryTokenRegistriesArgs, projectionOptions?: ProjectionOptions) => Promise<Query['tokenRegistries']>,
  token: (args: QueryTokenArgs, projectionOptions?: ProjectionOptions) => Promise<Query['token']>,
  tokens: (args: QueryTokensArgs, projectionOptions?: ProjectionOptions) => Promise<Query['tokens']>,
  balance: (args: QueryBalanceArgs, projectionOptions?: ProjectionOptions) => Promise<Query['balance']>,
  balances: (args: QueryBalancesArgs, projectionOptions?: ProjectionOptions) => Promise<Query['balances']>,
  transfer: (args: QueryTransferArgs, projectionOptions?: ProjectionOptions) => Promise<Query['transfer']>,
  transfers: (args: QueryTransfersArgs, projectionOptions?: ProjectionOptions) => Promise<Query['transfers']>,
  approval: (args: QueryApprovalArgs, projectionOptions?: ProjectionOptions) => Promise<Query['approval']>,
  approvals: (args: QueryApprovalsArgs, projectionOptions?: ProjectionOptions) => Promise<Query['approvals']>,
  decimalValue: (args: QueryDecimalValueArgs, projectionOptions?: ProjectionOptions) => Promise<Query['decimalValue']>,
  decimalValues: (args: QueryDecimalValuesArgs, projectionOptions?: ProjectionOptions) => Promise<Query['decimalValues']>,
  transaction: (args: QueryTransactionArgs, projectionOptions?: ProjectionOptions) => Promise<Query['transaction']>,
  transactions: (args: QueryTransactionsArgs, projectionOptions?: ProjectionOptions) => Promise<Query['transactions']>,
  persistentStringArray: (args: QueryPersistentStringArrayArgs, projectionOptions?: ProjectionOptions) => Promise<Query['persistentStringArray']>,
  persistentStringArrays: (args: QueryPersistentStringArraysArgs, projectionOptions?: ProjectionOptions) => Promise<Query['persistentStringArrays']>,
  persistentString: (args: QueryPersistentStringArgs, projectionOptions?: ProjectionOptions) => Promise<Query['persistentString']>,
  persistentStrings: (args: QueryPersistentStringsArgs, projectionOptions?: ProjectionOptions) => Promise<Query['persistentStrings']>,
  event: (args: QueryEventArgs, projectionOptions?: ProjectionOptions) => Promise<Query['event']>,
  events: (args: QueryEventsArgs, projectionOptions?: ProjectionOptions) => Promise<Query['events']>,
  _meta: (args: Query_MetaArgs, projectionOptions?: ProjectionOptions) => Promise<Query['_meta']>
};

export type QueryEip1155Sdk = {
  account: (args: QueryAccountArgs, projectionOptions?: ProjectionOptions) => Promise<Query['account']>,
  accounts: (args: QueryAccountsArgs, projectionOptions?: ProjectionOptions) => Promise<Query['accounts']>,
  tokenRegistry: (args: QueryTokenRegistryArgs, projectionOptions?: ProjectionOptions) => Promise<Query['tokenRegistry']>,
  tokenRegistries: (args: QueryTokenRegistriesArgs, projectionOptions?: ProjectionOptions) => Promise<Query['tokenRegistries']>,
  token: (args: QueryTokenArgs, projectionOptions?: ProjectionOptions) => Promise<Query['token']>,
  tokens: (args: QueryTokensArgs, projectionOptions?: ProjectionOptions) => Promise<Query['tokens']>,
  balance: (args: QueryBalanceArgs, projectionOptions?: ProjectionOptions) => Promise<Query['balance']>,
  balances: (args: QueryBalancesArgs, projectionOptions?: ProjectionOptions) => Promise<Query['balances']>,
  transfer: (args: QueryTransferArgs, projectionOptions?: ProjectionOptions) => Promise<Query['transfer']>,
  transfers: (args: QueryTransfersArgs, projectionOptions?: ProjectionOptions) => Promise<Query['transfers']>,
  approval: (args: QueryApprovalArgs, projectionOptions?: ProjectionOptions) => Promise<Query['approval']>,
  approvals: (args: QueryApprovalsArgs, projectionOptions?: ProjectionOptions) => Promise<Query['approvals']>,
  decimalValue: (args: QueryDecimalValueArgs, projectionOptions?: ProjectionOptions) => Promise<Query['decimalValue']>,
  decimalValues: (args: QueryDecimalValuesArgs, projectionOptions?: ProjectionOptions) => Promise<Query['decimalValues']>,
  transaction: (args: QueryTransactionArgs, projectionOptions?: ProjectionOptions) => Promise<Query['transaction']>,
  transactions: (args: QueryTransactionsArgs, projectionOptions?: ProjectionOptions) => Promise<Query['transactions']>,
  persistentStringArray: (args: QueryPersistentStringArrayArgs, projectionOptions?: ProjectionOptions) => Promise<Query['persistentStringArray']>,
  persistentStringArrays: (args: QueryPersistentStringArraysArgs, projectionOptions?: ProjectionOptions) => Promise<Query['persistentStringArrays']>,
  persistentString: (args: QueryPersistentStringArgs, projectionOptions?: ProjectionOptions) => Promise<Query['persistentString']>,
  persistentStrings: (args: QueryPersistentStringsArgs, projectionOptions?: ProjectionOptions) => Promise<Query['persistentStrings']>,
  event: (args: QueryEventArgs, projectionOptions?: ProjectionOptions) => Promise<Query['event']>,
  events: (args: QueryEventsArgs, projectionOptions?: ProjectionOptions) => Promise<Query['events']>,
  _meta: (args: Query_MetaArgs, projectionOptions?: ProjectionOptions) => Promise<Query['_meta']>
};

export type MutationEip1155Sdk = {

};

export type SubscriptionEip1155Sdk = {
  account: (args: SubscriptionAccountArgs, projectionOptions?: ProjectionOptions) => Promise<Subscription['account']>,
  accounts: (args: SubscriptionAccountsArgs, projectionOptions?: ProjectionOptions) => Promise<Subscription['accounts']>,
  tokenRegistry: (args: SubscriptionTokenRegistryArgs, projectionOptions?: ProjectionOptions) => Promise<Subscription['tokenRegistry']>,
  tokenRegistries: (args: SubscriptionTokenRegistriesArgs, projectionOptions?: ProjectionOptions) => Promise<Subscription['tokenRegistries']>,
  token: (args: SubscriptionTokenArgs, projectionOptions?: ProjectionOptions) => Promise<Subscription['token']>,
  tokens: (args: SubscriptionTokensArgs, projectionOptions?: ProjectionOptions) => Promise<Subscription['tokens']>,
  balance: (args: SubscriptionBalanceArgs, projectionOptions?: ProjectionOptions) => Promise<Subscription['balance']>,
  balances: (args: SubscriptionBalancesArgs, projectionOptions?: ProjectionOptions) => Promise<Subscription['balances']>,
  transfer: (args: SubscriptionTransferArgs, projectionOptions?: ProjectionOptions) => Promise<Subscription['transfer']>,
  transfers: (args: SubscriptionTransfersArgs, projectionOptions?: ProjectionOptions) => Promise<Subscription['transfers']>,
  approval: (args: SubscriptionApprovalArgs, projectionOptions?: ProjectionOptions) => Promise<Subscription['approval']>,
  approvals: (args: SubscriptionApprovalsArgs, projectionOptions?: ProjectionOptions) => Promise<Subscription['approvals']>,
  decimalValue: (args: SubscriptionDecimalValueArgs, projectionOptions?: ProjectionOptions) => Promise<Subscription['decimalValue']>,
  decimalValues: (args: SubscriptionDecimalValuesArgs, projectionOptions?: ProjectionOptions) => Promise<Subscription['decimalValues']>,
  transaction: (args: SubscriptionTransactionArgs, projectionOptions?: ProjectionOptions) => Promise<Subscription['transaction']>,
  transactions: (args: SubscriptionTransactionsArgs, projectionOptions?: ProjectionOptions) => Promise<Subscription['transactions']>,
  persistentStringArray: (args: SubscriptionPersistentStringArrayArgs, projectionOptions?: ProjectionOptions) => Promise<Subscription['persistentStringArray']>,
  persistentStringArrays: (args: SubscriptionPersistentStringArraysArgs, projectionOptions?: ProjectionOptions) => Promise<Subscription['persistentStringArrays']>,
  persistentString: (args: SubscriptionPersistentStringArgs, projectionOptions?: ProjectionOptions) => Promise<Subscription['persistentString']>,
  persistentStrings: (args: SubscriptionPersistentStringsArgs, projectionOptions?: ProjectionOptions) => Promise<Subscription['persistentStrings']>,
  event: (args: SubscriptionEventArgs, projectionOptions?: ProjectionOptions) => Promise<Subscription['event']>,
  events: (args: SubscriptionEventsArgs, projectionOptions?: ProjectionOptions) => Promise<Subscription['events']>,
  _meta: (args: Subscription_MetaArgs, projectionOptions?: ProjectionOptions) => Promise<Subscription['_meta']>
};

export type Eip721Context = { 
      ["EIP721"]: { api: Eip721Sdk, apiQuery: QueryEip721Sdk, apiMutation: MutationEip721Sdk, apiSubscription: SubscriptionEip721Sdk }, 
    };

export type Eip1155Context = { 
      ["EIP1155"]: { api: Eip1155Sdk, apiQuery: QueryEip1155Sdk, apiMutation: MutationEip1155Sdk, apiSubscription: SubscriptionEip1155Sdk }, 
    };

export type MeshContext = Eip721Context & Eip1155Context & BaseMeshContext;