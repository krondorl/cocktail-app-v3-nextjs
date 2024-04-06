FROM node:20.11-alpine
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
LABEL maintainer="Adam Burucs"
LABEL description="Cocktail App v3 Next.js"

# This is needed for proper running of Angular
# https://stackoverflow.com/questions/46778868/ng-serve-not-working-in-docker-container
CMD ["npm","run","dev"]

#
# Build and run
# docker buildx build -t cocktail-app-v3-nextjs:v01 .
# docker run -p 3000:3000 cocktail-app-v3-nextjs:v01