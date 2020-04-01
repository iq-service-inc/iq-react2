export const action = (type, payload = {}) => ({ type, ...payload })

// 多國語系
export * from './intl'
