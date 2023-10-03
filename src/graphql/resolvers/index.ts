import { QueryResolvers } from '../../types/types';

import { DataSource } from '../dataSource';

const getAppetizers: QueryResolvers['getAppetizers'] = () => {
  return DataSource.appetizers;
};

const getEntrees: QueryResolvers['getEntrees'] = () => {
  return DataSource.entrees;
};

const getSandwiches: QueryResolvers['getSandwiches'] = () => {
  return DataSource.sandwiches;
};

const getSoupSaladCombos: QueryResolvers['getSoupSaladCombos'] = () => {
  return DataSource.soupSaladCombos;
};

const getFajitas: QueryResolvers['getFajitas'] = () => {
  return DataSource.fajitas;
};

const getTacos: QueryResolvers['getTacos'] = () => {
  return DataSource.tacos;
};

const getEnchiladas: QueryResolvers['getEnchiladas'] = () => {
  return DataSource.enchiladas;
};

const getQuiches: QueryResolvers['getQuiches'] = () => {
  return DataSource.quiches;
};

const getGreenSalads: QueryResolvers['getGreenSalads'] = () => {
  return DataSource.greenSalads;
};

const resolvers = {
  Query: {
    getAppetizers,
    getEntrees,
    getSandwiches,
    getSoupSaladCombos,
    getFajitas,
    getTacos,
    getEnchiladas,
    getQuiches,
    getGreenSalads,
  },
};

export { resolvers };
