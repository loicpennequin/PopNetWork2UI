export default{
    login : () => state => ({ authenticated : true }),
    logout : () => state => ({ authenticated : false }),
}
