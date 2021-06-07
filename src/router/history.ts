import { createHashHistory, createBrowserHistory, History } from 'history'
const history: History = createBrowserHistory({
  // basename: config.basename,
})
export default history