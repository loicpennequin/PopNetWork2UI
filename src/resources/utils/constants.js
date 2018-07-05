export default {
    API_URL : process.env.NODE_ENV === "production"
        ? "https://pop-network-api.herokuapp.com"
        : "http://localhost:8000",
    SUPPORTED_LANGUAGES : [
        { i18nLabel : 'fr', flagCode: 'fr'},
        { i18nLabel : 'en', flagCode: 'gb'},
    ],
    CLOUD_NAME : "hvpcct1ed"
}
