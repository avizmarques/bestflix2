# Batflix.

Codaisseur project.
Exercise for learning:

- Git
- React routing.
- fetch
- state lifting.

## Open Movie database.

For our project we are Using the Open Movie database. In our documentation we will refer to the open movie database as OMDB.

### Get a Batman categorie from the Open Movie Database.

http://api.themoviedb.org/3/search/movie?api_key=b8bbda4fdff3d12c92a0ff51ac4cf6d9&query=batman

### Example Of API responses

## single Movie

```javascript
const exampleMovie =
    {
      popularity: 31.439,
      vote_count: 13450,
      video: false,
      poster_path: "/dr6x4GyyegBWtinPBzipY02J2lV.jpg",
      id: 272,
      adult: false,
      backdrop_path: "/9myrRcegWGGp24mpVfkD4zhUfhi.jpg",
      original_language: "en",
      original_title: "Batman Begins",
      genre_ids: [28, 80, 18],
      title: "Batman Begins",
      vote_average: 7.6,
      overview:
        "Driven by tragedy, billionaire Bruce Wayne dedicates his life to uncovering and defeating the corruption that plagues his home, Gotham City.  Unable to work within the system, he instead creates a new identity, a symbol of fear for the criminal underworld - The Batman.",
      release_date: "2005-06-10"
    },
```

## Git

We use the following branch structur

- master
- development
