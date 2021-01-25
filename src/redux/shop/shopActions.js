import shopActionsTypes from './shopTypes';

export const updateCollections = (collectionsMap) => ({
  type: shopActionsTypes.UPDATE_COLLECTIONS,
  payload: collectionsMap,
});
