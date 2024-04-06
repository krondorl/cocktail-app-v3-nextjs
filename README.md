# Cocktail App v3

![Cocktail](doc_img/cocktails-64px.png "Cocktail")

The project can retrieve information about drinks and cocktails from [TheCocktailDB](https://www.thecocktaildb.com/).

There are two modules in this project:

- Get a random cocktail on reload and on clicking
- Search for a specific cocktail by name

Cocktail App v3 is a remake of my earlier [Cocktail App v2](https://github.com/krondorl/cocktail-app-v2).

## New version

Tech specs:

- built with **Next.js**, which is a meta-framework for React
- **full stack TypeScript** and TypeScript React code
- API calls are now made with **fetch** instead of Axios
- can be used as a Docker container

## Exercise description

Please see [the project details.](EXERCISE.md)

## System Requirements

- Node.js 16.8 or later
- macOS, Windows, or Linux
- Docker (when running as a container)

## Running with Node.js

Please use these commands in order in the project folder:

```
npm install
npm run build
npm run dev
```

## Running with Docker

From the project folder, use these commands:

```
docker buildx build -t cocktail-app-v3-nextjs:v01 .
docker run -p 3000:3000 cocktail-app-v3-nextjs:v01
```

## Screenshot

The app looks like this.

![Intro page](doc_img/intro.png "Intro page")

![Cocktail screen](doc_img/cocktail-page.png "Cocktail screen")

## License

Please read [the license file.](LICENSE)

## Earlier versions

- [Cocktail App v2](https://github.com/krondorl/cocktail-app-v2)
- [Cocktail App](https://github.com/krondorl/cocktail-app)
