import { configureStore} from '@reduxjs/toolkit';

export const store = configureStore({
    reduser:{
        tweets: tweetsSlice.reducer,
    }
})