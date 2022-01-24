// @ts-nocheck
import _concat from 'lodash/concat';
import createFilter from 'redux-persist-transform-filter';
import expireReducer from 'redux-persist-expire';

export function getReducers(reducersConfig) {
  return Object.keys(reducersConfig).reduce((memo, key) => {
    memo[key] = reducersConfig[key].reducer;

    return memo;
  }, {});
}

export function getPersistedReducersList(reducersConfig) {
  return Object.keys(reducersConfig).reduce((memo, key) => {
    if (reducersConfig[key].persist) {
      memo.push(key);
    }

    return memo;
  }, []);
}

export function getTransforms(reducersConfig) {
  return Object.keys(reducersConfig).reduce((memo, key) => {
    const persist = reducersConfig[key].persist;

    if (persist && persist.transforms) {
      const reducerTransforms = persist.transforms.reduce(
        (memo, { id, config }) => {
          let transformCallback;

          switch (id) {
            case 'filter':
              // https://github.com/edy/redux-persist-transform-filter
              transformCallback = createFilter;
              break;

            case 'expire':
              // https://github.com/kamranahmedse/redux-persist-expire
              transformCallback = expireReducer;
              break;

            default:
              break;
          }

          if (typeof transformCallback === 'function') {
            memo.push(transformCallback(key, config));
          }

          return memo;
        },
        []
      );

      memo = _concat(memo, reducerTransforms);
    }

    return memo;
  }, []);
}
