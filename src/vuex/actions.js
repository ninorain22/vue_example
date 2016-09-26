function makeAction (type) {
  return ({ dispatch }, ...args) => dispatch(type, ...args)
}

export const initTimeEntries = makeAction('INIT_TIME_ENTRIES')

export const updateTime = makeAction('UPDATE_TIME')

export const deleteTime = makeAction('DELETE_TIME')
