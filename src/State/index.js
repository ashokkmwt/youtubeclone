import create from 'zustand';
import { devtools, persist } from 'zustand/middleware';

const videoStore = set => ({
    videos: [],
    currentVideo: {},
    isSideBarVisible: false,
    rcmdVideo:[],

    _fetchVideo: (Video) => set(state => {
        return { videos: Video };
    }),
    toggleSideBar: () => set(state => {
        return { isSideBarVisible: !state.isSideBarVisible };
    }),
    setCurrentVideo: (video) => set(state => {
        return { currentVideo: video };
    }),
    _fetchRcmdVideo: (Video) => set(state => {
        return { rcmdVideo: Video };
    })
});

const useStore = create(
    devtools(
        persist(videoStore, {
            name: 'videos',
            getStorage: () => window.localStorage,
            onRehydrateStorage: () => (state, error) => {
                if (state) {
                    state.setHydrated();
                }
            },
        }),
    ),
);

export default useStore;