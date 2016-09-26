/**
 * Created by pc on 2016/9/26.
 */

export const timeEntries = (state) => {
  return state.timeEntries
}

export const totalTime = (state) => {
  let time = 0
  for (var value of state.timeEntries) {
    time += parseFloat(value.total_time)
  }
  return time
}
