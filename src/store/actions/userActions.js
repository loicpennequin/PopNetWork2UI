import UserModel from '../../resources/models/UserModel.js'

export default{
    getCurrentUser : () => async state => ({ currentUser : await UserModel.getSelf() })
}
