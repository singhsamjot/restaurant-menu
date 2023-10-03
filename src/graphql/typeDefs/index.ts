import { gql } from 'apollo-server-express';

const typeDefs = gql`
  type Item {
    name: String!
    description: String
    price: Float!
  }

  type SandwichPriceOptions {
    half: Float
    full: Float
  }

  type EnchiladaPriceOptions {
    uno: Float
    dos: Float
    tres: Float
  }

  type Appetizer {
    id: ID!
    item: Item!
  }

  type Entree {
    id: ID!
    item: Item!
  }

  type Sandwich {
    id: ID!
    name: String!
    type: String!
    description: String
    breadChoices: [String!]!
    price: SandwichPriceOptions!
  }

  type SoupSaladCombo {
    id: ID!
    name: String!
    soupVariants: [String!]!
    saladVariants: [String!]
    price: Float!
  }

  type Fajita {
    id: ID!
    description: String!
    ingredients: [String!]!
    price: Float!
  }

  type Taco {
    id: ID!
    description: String!
    ingredients: [String!]!
    price: Float!
  }

  type Enchilada {
    id: ID!
    description: String!
    price: EnchiladaPriceOptions!
  }

  type Quiche {
    id: ID!
    ingredients: [String!]!
    choices: [String!]!
    price: Float!
  }

  type GreenSalad {
    id: ID!
    ingredients: [String!]!
    price: Float!
  }

  type Query {
    getAppetizers: [Appetizer!]!
    getEntrees: [Entree!]!
    getSandwiches: [Sandwich!]!
    getSoupSaladCombos: [SoupSaladCombo!]!
    getFajitas: [Fajita!]!
    getTacos: [Taco!]!
    getEnchiladas: [Enchilada!]!
    getQuiches: [Quiche!]!
    getGreenSalads: [GreenSalad!]!
  }
`;

export default typeDefs;
