import wretch           from 'wretch';
import { dedupe }       from 'wretch-middlewares';
import constants        from './constants.js';

let w = wretch(constants.API_URL + '/api')
    .middlewares([
        dedupe()
    ])
    .options({ credentials: "include", mode: "cors" })
    .auth(`Bearer ${localStorage.getItem('token')}`)
    .resolve(resolver =>
        resolver
        .notFound( async (error, req) => {
            // TODO
            return { error : 404 };
        })
        .unauthorized( async (error, req) => {
            // TODO
            return { error : 401 };
        })
        .error( 422, error => JSON.parse(Object.values(error)[0]))
        .json()
    );

export default {
    get : url =>
        w
        .url(url)
        .get(),
    post : (url, body) =>
        w
        .url(url)
        .json(body)
        .post(),
    put : (url, body) =>
        w
        .url(url)
        .json(body)
        .put(),
    delete : url =>
        w
        .url(url)
        .delete()
}
