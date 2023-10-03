import { GraphQLResolveInfo } from 'graphql';
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
};

export type Appetizer = {
  __typename?: 'Appetizer';
  id: Scalars['ID']['output'];
  item: Item;
};

export type Enchilada = {
  __typename?: 'Enchilada';
  description: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  price: EnchiladaPriceOptions;
};

export type EnchiladaPriceOptions = {
  __typename?: 'EnchiladaPriceOptions';
  dos?: Maybe<Scalars['Float']['output']>;
  tres?: Maybe<Scalars['Float']['output']>;
  uno?: Maybe<Scalars['Float']['output']>;
};

export type Entree = {
  __typename?: 'Entree';
  id: Scalars['ID']['output'];
  item: Item;
};

export type Fajita = {
  __typename?: 'Fajita';
  description: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  ingredients: Array<Scalars['String']['output']>;
  price: Scalars['Float']['output'];
};

export type GreenSalad = {
  __typename?: 'GreenSalad';
  id: Scalars['ID']['output'];
  ingredients: Array<Scalars['String']['output']>;
  price: Scalars['Float']['output'];
};

export type Item = {
  __typename?: 'Item';
  description?: Maybe<Scalars['String']['output']>;
  name: Scalars['String']['output'];
  price: Scalars['Float']['output'];
};

export type Query = {
  __typename?: 'Query';
  getAppetizers: Array<Appetizer>;
  getEnchiladas: Array<Enchilada>;
  getEntrees: Array<Entree>;
  getFajitas: Array<Fajita>;
  getGreenSalads: Array<GreenSalad>;
  getQuiches: Array<Quiche>;
  getSandwiches: Array<Sandwich>;
  getSoupSaladCombos: Array<SoupSaladCombo>;
  getTacos: Array<Taco>;
};

export type Quiche = {
  __typename?: 'Quiche';
  choices: Array<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  ingredients: Array<Scalars['String']['output']>;
  price: Scalars['Float']['output'];
};

export type Sandwich = {
  __typename?: 'Sandwich';
  breadChoices: Array<Scalars['String']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
  price: SandwichPriceOptions;
  type: Scalars['String']['output'];
};

export type SandwichPriceOptions = {
  __typename?: 'SandwichPriceOptions';
  full?: Maybe<Scalars['Float']['output']>;
  half?: Maybe<Scalars['Float']['output']>;
};

export type SoupSaladCombo = {
  __typename?: 'SoupSaladCombo';
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
  price: Scalars['Float']['output'];
  saladVariants?: Maybe<Array<Scalars['String']['output']>>;
  soupVariants: Array<Scalars['String']['output']>;
};

export type Taco = {
  __typename?: 'Taco';
  description: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  ingredients: Array<Scalars['String']['output']>;
  price: Scalars['Float']['output'];
};



export type ResolverTypeWrapper<T> = Promise<T> | T;


export type ResolverWithResolve<TResult, TParent, TContext, TArgs> = {
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};
export type Resolver<TResult, TParent = {}, TContext = {}, TArgs = {}> = ResolverFn<TResult, TParent, TContext, TArgs> | ResolverWithResolve<TResult, TParent, TContext, TArgs>;

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
) => AsyncIterable<TResult> | Promise<AsyncIterable<TResult>>;

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
export type ResolversTypes = {
  Appetizer: ResolverTypeWrapper<Appetizer>;
  Boolean: ResolverTypeWrapper<Scalars['Boolean']['output']>;
  Enchilada: ResolverTypeWrapper<Enchilada>;
  EnchiladaPriceOptions: ResolverTypeWrapper<EnchiladaPriceOptions>;
  Entree: ResolverTypeWrapper<Entree>;
  Fajita: ResolverTypeWrapper<Fajita>;
  Float: ResolverTypeWrapper<Scalars['Float']['output']>;
  GreenSalad: ResolverTypeWrapper<GreenSalad>;
  ID: ResolverTypeWrapper<Scalars['ID']['output']>;
  Item: ResolverTypeWrapper<Item>;
  Query: ResolverTypeWrapper<{}>;
  Quiche: ResolverTypeWrapper<Quiche>;
  Sandwich: ResolverTypeWrapper<Sandwich>;
  SandwichPriceOptions: ResolverTypeWrapper<SandwichPriceOptions>;
  SoupSaladCombo: ResolverTypeWrapper<SoupSaladCombo>;
  String: ResolverTypeWrapper<Scalars['String']['output']>;
  Taco: ResolverTypeWrapper<Taco>;
};

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = {
  Appetizer: Appetizer;
  Boolean: Scalars['Boolean']['output'];
  Enchilada: Enchilada;
  EnchiladaPriceOptions: EnchiladaPriceOptions;
  Entree: Entree;
  Fajita: Fajita;
  Float: Scalars['Float']['output'];
  GreenSalad: GreenSalad;
  ID: Scalars['ID']['output'];
  Item: Item;
  Query: {};
  Quiche: Quiche;
  Sandwich: Sandwich;
  SandwichPriceOptions: SandwichPriceOptions;
  SoupSaladCombo: SoupSaladCombo;
  String: Scalars['String']['output'];
  Taco: Taco;
};

export type AppetizerResolvers<ContextType = any, ParentType extends ResolversParentTypes['Appetizer'] = ResolversParentTypes['Appetizer']> = {
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  item?: Resolver<ResolversTypes['Item'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type EnchiladaResolvers<ContextType = any, ParentType extends ResolversParentTypes['Enchilada'] = ResolversParentTypes['Enchilada']> = {
  description?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  price?: Resolver<ResolversTypes['EnchiladaPriceOptions'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type EnchiladaPriceOptionsResolvers<ContextType = any, ParentType extends ResolversParentTypes['EnchiladaPriceOptions'] = ResolversParentTypes['EnchiladaPriceOptions']> = {
  dos?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  tres?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  uno?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type EntreeResolvers<ContextType = any, ParentType extends ResolversParentTypes['Entree'] = ResolversParentTypes['Entree']> = {
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  item?: Resolver<ResolversTypes['Item'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type FajitaResolvers<ContextType = any, ParentType extends ResolversParentTypes['Fajita'] = ResolversParentTypes['Fajita']> = {
  description?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  ingredients?: Resolver<Array<ResolversTypes['String']>, ParentType, ContextType>;
  price?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type GreenSaladResolvers<ContextType = any, ParentType extends ResolversParentTypes['GreenSalad'] = ResolversParentTypes['GreenSalad']> = {
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  ingredients?: Resolver<Array<ResolversTypes['String']>, ParentType, ContextType>;
  price?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ItemResolvers<ContextType = any, ParentType extends ResolversParentTypes['Item'] = ResolversParentTypes['Item']> = {
  description?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  price?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type QueryResolvers<ContextType = any, ParentType extends ResolversParentTypes['Query'] = ResolversParentTypes['Query']> = {
  getAppetizers?: Resolver<Array<ResolversTypes['Appetizer']>, ParentType, ContextType>;
  getEnchiladas?: Resolver<Array<ResolversTypes['Enchilada']>, ParentType, ContextType>;
  getEntrees?: Resolver<Array<ResolversTypes['Entree']>, ParentType, ContextType>;
  getFajitas?: Resolver<Array<ResolversTypes['Fajita']>, ParentType, ContextType>;
  getGreenSalads?: Resolver<Array<ResolversTypes['GreenSalad']>, ParentType, ContextType>;
  getQuiches?: Resolver<Array<ResolversTypes['Quiche']>, ParentType, ContextType>;
  getSandwiches?: Resolver<Array<ResolversTypes['Sandwich']>, ParentType, ContextType>;
  getSoupSaladCombos?: Resolver<Array<ResolversTypes['SoupSaladCombo']>, ParentType, ContextType>;
  getTacos?: Resolver<Array<ResolversTypes['Taco']>, ParentType, ContextType>;
};

export type QuicheResolvers<ContextType = any, ParentType extends ResolversParentTypes['Quiche'] = ResolversParentTypes['Quiche']> = {
  choices?: Resolver<Array<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  ingredients?: Resolver<Array<ResolversTypes['String']>, ParentType, ContextType>;
  price?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type SandwichResolvers<ContextType = any, ParentType extends ResolversParentTypes['Sandwich'] = ResolversParentTypes['Sandwich']> = {
  breadChoices?: Resolver<Array<ResolversTypes['String']>, ParentType, ContextType>;
  description?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  price?: Resolver<ResolversTypes['SandwichPriceOptions'], ParentType, ContextType>;
  type?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type SandwichPriceOptionsResolvers<ContextType = any, ParentType extends ResolversParentTypes['SandwichPriceOptions'] = ResolversParentTypes['SandwichPriceOptions']> = {
  full?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  half?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type SoupSaladComboResolvers<ContextType = any, ParentType extends ResolversParentTypes['SoupSaladCombo'] = ResolversParentTypes['SoupSaladCombo']> = {
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  price?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  saladVariants?: Resolver<Maybe<Array<ResolversTypes['String']>>, ParentType, ContextType>;
  soupVariants?: Resolver<Array<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type TacoResolvers<ContextType = any, ParentType extends ResolversParentTypes['Taco'] = ResolversParentTypes['Taco']> = {
  description?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  ingredients?: Resolver<Array<ResolversTypes['String']>, ParentType, ContextType>;
  price?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Resolvers<ContextType = any> = {
  Appetizer?: AppetizerResolvers<ContextType>;
  Enchilada?: EnchiladaResolvers<ContextType>;
  EnchiladaPriceOptions?: EnchiladaPriceOptionsResolvers<ContextType>;
  Entree?: EntreeResolvers<ContextType>;
  Fajita?: FajitaResolvers<ContextType>;
  GreenSalad?: GreenSaladResolvers<ContextType>;
  Item?: ItemResolvers<ContextType>;
  Query?: QueryResolvers<ContextType>;
  Quiche?: QuicheResolvers<ContextType>;
  Sandwich?: SandwichResolvers<ContextType>;
  SandwichPriceOptions?: SandwichPriceOptionsResolvers<ContextType>;
  SoupSaladCombo?: SoupSaladComboResolvers<ContextType>;
  Taco?: TacoResolvers<ContextType>;
};

