import { User } from './user'
import {createContext, useContext} from 'react'


function createStores() {
  return {
    user: new User(),
  }
}

const stores = createStores()
const StoresContext = createContext(stores)
const useStores = () => useContext(StoresContext)

export {
  stores,
  useStores,
  StoresContext
}