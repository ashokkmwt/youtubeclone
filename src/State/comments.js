import create from 'zustand';
import { devtools, persist } from 'zustand/middleware';

const commentsStore = set => ({
    comments: [],
    // look in console that which type of data is being sent in comments. if it is array then give comments' initial value an array. 
    // if it is an Object then use -- comments: {}
    
    _fetchComments: (comment) => set(state => {
        return { comments: comment };
    })
})

    const useCommentsStore = create(
        devtools(
            persist(commentsStore, {
                name: 'comments',
                getStorage: () => window.localStorage,
                onRehydrateStorage: () => (state, error) => {
                    if (state) {
                        state.setHydrated();
                    }
                },
            }),
        ),
    );

    export default useCommentsStore;