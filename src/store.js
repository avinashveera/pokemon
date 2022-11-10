import { configureStore } from "@reduxjs/toolkit"
import Data from "./redux/reducers/DataReducer"


export default configureStore({
    reducer: {
        data: Data
    }
})