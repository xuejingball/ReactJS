// The most common use-case for using the low-level <Router> is to synchronize a custom history with a state management lib like Redux or Mobx. 
// Note that this is not required to use state management libs alongside React Router, it's only for deep integration.
import { createBrowserHistory } from 'history'; 
export default createBrowserHistory();