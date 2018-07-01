## Install
```
npm install
```

## Start
```
gulp
```

## Deploy
```
npm run deploy
```

## API Endpoints
* **POST /register** : registers a user.
* **POST /login** : authenticates a user.

* **GET /:username/blogs** : gets all the blogs for a user.
* **GET /:username/blogs/count** : gets the blog count of a user
* **GET /:username/blogs/:blogid** : gets info for a single blog.
* **POST /:username/blogs/:blogid** : creates a blog
* **PUT /:username/blogs/:blogid** : updates a blog.
* **DELETE /:username/blogs/:blogid** : deletes a blog.
