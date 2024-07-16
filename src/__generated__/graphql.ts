/* eslint-disable */
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  /**
   * The `DateTime` scalar type represents a DateTime
   * value as specified by
   * [iso8601](https://en.wikipedia.org/wiki/ISO_8601).
   */
  DateTime: { input: any; output: any; }
  /** The `Decimal` scalar type represents a python Decimal. */
  Decimal: { input: any; output: any; }
  /**
   * Allows use of a JSON String for input / output from the GraphQL schema.
   *
   * Use of this type is *not recommended* as you lose the benefits of having a defined, static
   * schema (one of the key benefits of GraphQL).
   */
  JSONString: { input: any; output: any; }
  /**
   * Create scalar that ignores normal serialization/deserialization, since
   * that will be handled by the multipart request spec
   */
  Upload: { input: any; output: any; }
};

export type BarCodeType = Node & {
  __typename?: 'BarCodeType';
  archived: Scalars['Boolean']['output'];
  barcodeValue: Scalars['String']['output'];
  category: CategoryType;
  characteristic?: Maybe<Scalars['JSONString']['output']>;
  cost?: Maybe<Scalars['Float']['output']>;
  createdAt: Scalars['DateTime']['output'];
  deleted: Scalars['Boolean']['output'];
  description?: Maybe<Scalars['String']['output']>;
  discountedPrice?: Maybe<Scalars['Float']['output']>;
  id: Scalars['ID']['output'];
  images?: Maybe<Array<Maybe<ImageType>>>;
  items?: Maybe<ItemTypeConnection>;
  mute: Scalars['Boolean']['output'];
  sellingPrice: Scalars['Float']['output'];
  sizes?: Maybe<SizeTypeConnection>;
  slug: Scalars['String']['output'];
  storage: StorageType;
  tags?: Maybe<Scalars['String']['output']>;
  title: Scalars['String']['output'];
};


export type BarCodeTypeItemsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
};


export type BarCodeTypeSizesArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
};

export type BarCodeTypeConnection = {
  __typename?: 'BarCodeTypeConnection';
  /** Contains the nodes in this connection. */
  edges: Array<Maybe<BarCodeTypeEdge>>;
  /** Pagination data for this connection. */
  pageInfo: PageInfo;
};

/** A Relay edge containing a `BarCodeType` and its cursor. */
export type BarCodeTypeEdge = {
  __typename?: 'BarCodeTypeEdge';
  /** A cursor for use in pagination */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge */
  node?: Maybe<BarCodeType>;
};

export type BarcodeInput = {
  barcodeValue?: InputMaybe<Scalars['String']['input']>;
  categoryId: Scalars['ID']['input'];
  characteristic: Scalars['JSONString']['input'];
  cost?: InputMaybe<Scalars['Decimal']['input']>;
  description: Scalars['String']['input'];
  discountedPrice?: InputMaybe<Scalars['Decimal']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  images: Array<InputMaybe<ImageInput>>;
  sellingPrice: Scalars['Decimal']['input'];
  shopId: Scalars['ID']['input'];
  sizes: Array<InputMaybe<SizeInput>>;
  storageId: Scalars['ID']['input'];
  tags?: InputMaybe<Scalars['String']['input']>;
  title: Scalars['String']['input'];
};

export type CategoryType = Node & {
  __typename?: 'CategoryType';
  barcodes?: Maybe<BarCodeTypeConnection>;
  children?: Maybe<CategoryTypeConnection>;
  icon?: Maybe<Scalars['String']['output']>;
  icon1?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  inTrend: Scalars['Boolean']['output'];
  isActive: Scalars['Boolean']['output'];
  level: Scalars['Int']['output'];
  lft: Scalars['Int']['output'];
  name: Scalars['String']['output'];
  parent?: Maybe<CategoryType>;
  prioritization: Scalars['Int']['output'];
  rght: Scalars['Int']['output'];
  sizes?: Maybe<SizeTypeConnection>;
  slug: Scalars['String']['output'];
  treeId: Scalars['Int']['output'];
};


export type CategoryTypeBarcodesArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
};


export type CategoryTypeChildrenArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
};


export type CategoryTypeSizesArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
};

export type CategoryTypeConnection = {
  __typename?: 'CategoryTypeConnection';
  /** Contains the nodes in this connection. */
  edges: Array<Maybe<CategoryTypeEdge>>;
  /** Pagination data for this connection. */
  pageInfo: PageInfo;
};

/** A Relay edge containing a `CategoryType` and its cursor. */
export type CategoryTypeEdge = {
  __typename?: 'CategoryTypeEdge';
  /** A cursor for use in pagination */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge */
  node?: Maybe<CategoryType>;
};

export type CreateBarcode = {
  __typename?: 'CreateBarcode';
  barcode?: Maybe<BarCodeType>;
};

export type ImageInput = {
  url: Scalars['String']['input'];
};

export type ImageType = {
  __typename?: 'ImageType';
  barcode: BarCodeType;
  id: Scalars['ID']['output'];
  url?: Maybe<Scalars['String']['output']>;
};

export type ItemType = Node & {
  __typename?: 'ItemType';
  barcode: BarCodeType;
  createdAt: Scalars['DateTime']['output'];
  id: Scalars['ID']['output'];
  size: SizeType;
};

export type ItemTypeConnection = {
  __typename?: 'ItemTypeConnection';
  /** Contains the nodes in this connection. */
  edges: Array<Maybe<ItemTypeEdge>>;
  /** Pagination data for this connection. */
  pageInfo: PageInfo;
};

/** A Relay edge containing a `ItemType` and its cursor. */
export type ItemTypeEdge = {
  __typename?: 'ItemTypeEdge';
  /** A cursor for use in pagination */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge */
  node?: Maybe<ItemType>;
};

export type Mutation = {
  __typename?: 'Mutation';
  createBarcode?: Maybe<CreateBarcode>;
  uploadBarcodeImages?: Maybe<UploadBarcodeImages>;
};


export type MutationCreateBarcodeArgs = {
  input: BarcodeInput;
};


export type MutationUploadBarcodeImagesArgs = {
  files: Array<InputMaybe<Scalars['Upload']['input']>>;
};

/** An object with an ID */
export type Node = {
  /** The ID of the object. */
  id: Scalars['ID']['output'];
};

/** The Relay compliant `PageInfo` type, containing data necessary to paginate this connection. */
export type PageInfo = {
  __typename?: 'PageInfo';
  /** When paginating forwards, the cursor to continue. */
  endCursor?: Maybe<Scalars['String']['output']>;
  /** When paginating forwards, are there more items? */
  hasNextPage: Scalars['Boolean']['output'];
  /** When paginating backwards, are there more items? */
  hasPreviousPage: Scalars['Boolean']['output'];
  /** When paginating backwards, the cursor to continue. */
  startCursor?: Maybe<Scalars['String']['output']>;
};

export type Query = {
  __typename?: 'Query';
  barcode?: Maybe<BarCodeType>;
  barcodes?: Maybe<BarCodeTypeConnection>;
  categories?: Maybe<CategoryTypeConnection>;
  category?: Maybe<CategoryType>;
  item?: Maybe<ItemType>;
  items?: Maybe<ItemTypeConnection>;
  shop?: Maybe<ShopType>;
  shops?: Maybe<ShopTypeConnection>;
  size?: Maybe<SizeType>;
  sizes?: Maybe<SizeTypeConnection>;
  storage?: Maybe<StorageType>;
  storages?: Maybe<StorageTypeConnection>;
};


export type QueryBarcodeArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
};


export type QueryBarcodesArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  barcodeValue?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  category?: InputMaybe<Scalars['ID']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  sellingPrice?: InputMaybe<Scalars['Float']['input']>;
  slug?: InputMaybe<Scalars['String']['input']>;
  storage?: InputMaybe<Scalars['ID']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
};


export type QueryCategoriesArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  inTrend?: InputMaybe<Scalars['Boolean']['input']>;
  isActive?: InputMaybe<Scalars['Boolean']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  slug?: InputMaybe<Scalars['String']['input']>;
};


export type QueryCategoryArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
};


export type QueryItemArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
};


export type QueryItemsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  barcode?: InputMaybe<Scalars['ID']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  size?: InputMaybe<Scalars['ID']['input']>;
};


export type QueryShopArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
};


export type QueryShopsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  email?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  marketActive?: InputMaybe<Scalars['Boolean']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  phone?: InputMaybe<Scalars['String']['input']>;
  user?: InputMaybe<Scalars['ID']['input']>;
  verified?: InputMaybe<Scalars['Boolean']['input']>;
};


export type QuerySizeArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
};


export type QuerySizesArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  category?: InputMaybe<Scalars['ID']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
};


export type QueryStorageArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
};


export type QueryStoragesArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  shop?: InputMaybe<Scalars['ID']['input']>;
};

export type ShopType = Node & {
  __typename?: 'ShopType';
  active: Scalars['Boolean']['output'];
  address?: Maybe<Scalars['String']['output']>;
  createdAt: Scalars['DateTime']['output'];
  deliveryPrice: Scalars['Int']['output'];
  description?: Maybe<Scalars['String']['output']>;
  email?: Maybe<Scalars['String']['output']>;
  freeDelivery: Scalars['Int']['output'];
  icon?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  marketActive: Scalars['Boolean']['output'];
  name: Scalars['String']['output'];
  phone?: Maybe<Scalars['String']['output']>;
  rate: Scalars['Float']['output'];
  selfDelivery: Scalars['Boolean']['output'];
  slug?: Maybe<Scalars['String']['output']>;
  storages?: Maybe<StorageTypeConnection>;
  verified: Scalars['Boolean']['output'];
  workTime?: Maybe<Scalars['String']['output']>;
};


export type ShopTypeStoragesArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
};

export type ShopTypeConnection = {
  __typename?: 'ShopTypeConnection';
  /** Contains the nodes in this connection. */
  edges: Array<Maybe<ShopTypeEdge>>;
  /** Pagination data for this connection. */
  pageInfo: PageInfo;
};

/** A Relay edge containing a `ShopType` and its cursor. */
export type ShopTypeEdge = {
  __typename?: 'ShopTypeEdge';
  /** A cursor for use in pagination */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge */
  node?: Maybe<ShopType>;
};

export type SizeInput = {
  name: Scalars['String']['input'];
  value: Scalars['String']['input'];
};

export type SizeType = Node & {
  __typename?: 'SizeType';
  barcodes?: Maybe<BarCodeTypeConnection>;
  category: CategoryType;
  id: Scalars['ID']['output'];
  items?: Maybe<ItemTypeConnection>;
  name: Scalars['String']['output'];
  value: Scalars['Int']['output'];
};


export type SizeTypeBarcodesArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
};


export type SizeTypeItemsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
};

export type SizeTypeConnection = {
  __typename?: 'SizeTypeConnection';
  /** Contains the nodes in this connection. */
  edges: Array<Maybe<SizeTypeEdge>>;
  /** Pagination data for this connection. */
  pageInfo: PageInfo;
};

/** A Relay edge containing a `SizeType` and its cursor. */
export type SizeTypeEdge = {
  __typename?: 'SizeTypeEdge';
  /** A cursor for use in pagination */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge */
  node?: Maybe<SizeType>;
};

export type StorageType = Node & {
  __typename?: 'StorageType';
  barcodes?: Maybe<BarCodeTypeConnection>;
  createdAt: Scalars['DateTime']['output'];
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
  shop: ShopType;
  slug?: Maybe<Scalars['String']['output']>;
};


export type StorageTypeBarcodesArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
};

export type StorageTypeConnection = {
  __typename?: 'StorageTypeConnection';
  /** Contains the nodes in this connection. */
  edges: Array<Maybe<StorageTypeEdge>>;
  /** Pagination data for this connection. */
  pageInfo: PageInfo;
};

/** A Relay edge containing a `StorageType` and its cursor. */
export type StorageTypeEdge = {
  __typename?: 'StorageTypeEdge';
  /** A cursor for use in pagination */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge */
  node?: Maybe<StorageType>;
};

export type UploadBarcodeImages = {
  __typename?: 'UploadBarcodeImages';
  success?: Maybe<Scalars['Boolean']['output']>;
  urls?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
};

export type BarcodeQueryVariables = Exact<{ [key: string]: never; }>;


export type BarcodeQuery = { __typename?: 'Query', barcode?: { __typename?: 'BarCodeType', id: string, barcodeValue: string, title: string, description?: string | null, deleted: boolean, sellingPrice: number, slug: string, archived: boolean, createdAt: any, mute: boolean, discountedPrice?: number | null, cost?: number | null, tags?: string | null, characteristic?: any | null, category: { __typename?: 'CategoryType', id: string, name: string, slug: string, icon?: string | null, icon1?: string | null, isActive: boolean, prioritization: number, inTrend: boolean, lft: number, rght: number, treeId: number, level: number, parent?: { __typename?: 'CategoryType', id: string, name: string, slug: string, icon?: string | null, icon1?: string | null, isActive: boolean, prioritization: number, inTrend: boolean, lft: number, rght: number, treeId: number, level: number } | null }, images?: Array<{ __typename?: 'ImageType', id: string, url?: string | null } | null> | null, sizes?: { __typename?: 'SizeTypeConnection', edges: Array<{ __typename?: 'SizeTypeEdge', node?: { __typename?: 'SizeType', id: string, name: string, value: number } | null } | null> } | null } | null };


export const BarcodeDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"Barcode"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"barcode"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"IntValue","value":"365"}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"barcodeValue"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"deleted"}},{"kind":"Field","name":{"kind":"Name","value":"sellingPrice"}},{"kind":"Field","name":{"kind":"Name","value":"slug"}},{"kind":"Field","name":{"kind":"Name","value":"archived"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"mute"}},{"kind":"Field","name":{"kind":"Name","value":"discountedPrice"}},{"kind":"Field","name":{"kind":"Name","value":"cost"}},{"kind":"Field","name":{"kind":"Name","value":"tags"}},{"kind":"Field","name":{"kind":"Name","value":"characteristic"}},{"kind":"Field","name":{"kind":"Name","value":"category"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"slug"}},{"kind":"Field","name":{"kind":"Name","value":"icon"}},{"kind":"Field","name":{"kind":"Name","value":"icon1"}},{"kind":"Field","name":{"kind":"Name","value":"isActive"}},{"kind":"Field","name":{"kind":"Name","value":"prioritization"}},{"kind":"Field","name":{"kind":"Name","value":"inTrend"}},{"kind":"Field","name":{"kind":"Name","value":"lft"}},{"kind":"Field","name":{"kind":"Name","value":"rght"}},{"kind":"Field","name":{"kind":"Name","value":"treeId"}},{"kind":"Field","name":{"kind":"Name","value":"level"}},{"kind":"Field","name":{"kind":"Name","value":"parent"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"slug"}},{"kind":"Field","name":{"kind":"Name","value":"icon"}},{"kind":"Field","name":{"kind":"Name","value":"icon1"}},{"kind":"Field","name":{"kind":"Name","value":"isActive"}},{"kind":"Field","name":{"kind":"Name","value":"prioritization"}},{"kind":"Field","name":{"kind":"Name","value":"inTrend"}},{"kind":"Field","name":{"kind":"Name","value":"lft"}},{"kind":"Field","name":{"kind":"Name","value":"rght"}},{"kind":"Field","name":{"kind":"Name","value":"treeId"}},{"kind":"Field","name":{"kind":"Name","value":"level"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"images"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"url"}}]}},{"kind":"Field","name":{"kind":"Name","value":"sizes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"edges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"value"}}]}}]}}]}}]}}]}}]} as unknown as DocumentNode<BarcodeQuery, BarcodeQueryVariables>;