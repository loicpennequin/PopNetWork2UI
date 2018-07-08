import UserModel from '../../resources/models/UserModel.js'

export default{
    getCurrentProfile : async id => ({ currentProfile : await UserModel.getProfile(id) }),
    addToCurrentProfileFeed : feedItem => state => ({
        currentProfile : {
            ...state.currentProfile,
            publications: [feedItem].concat(state.currentProfile.publications)
        }
    }),
    getCurrentProfileOlderFeed: feedItems => state => ({
        currentProfile : {
            ...state.currentProfile,
            publications: state.currentProfile.publications.concat(feedItems)
        }
    })
}
