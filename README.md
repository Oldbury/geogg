# Geogg
## Front End Demo
https://user-images.githubusercontent.com/10517525/120548755-9e44ba80-c3ea-11eb-948b-8da2dbe3ae62.mov
### Initial state
<img width="1466" alt="Screenshot 2021-06-02 at 21 31 28" src="https://user-images.githubusercontent.com/10517525/120548130-e6afa880-c3e9-11eb-9b15-154003eea0e8.png">

### Example Results
<img width="1466" alt="Screenshot 2021-06-02 at 21 31 49" src="https://user-images.githubusercontent.com/10517525/120548171-f29b6a80-c3e9-11eb-86a7-77fd7378a535.png">
<img width="1466" alt="Screenshot 2021-06-02 at 21 32 03" src="https://user-images.githubusercontent.com/10517525/120548196-fb8c3c00-c3e9-11eb-9d58-ff7288d7768f.png">

# Documentation
## Running locally
1. Clone the project
2. In the root directory run 'yarn heroku-postbuild' or cd to both server and geogg and run `yarn install`
`"heroku-postbuild": "yarn install && cd server && yarn install && cd ../geogg && yarn && yarn build"`
3. In the root directory run `yarn dev` to start the server and frontend concurrently 
4. To test navigate to geogg/geogg and run `yarn test`
## Structure
### Frontend
- The frontend is written in ReactJS and Typescript, utilising TailwindCSS for styling
- Jest is used for testing and can be ran using 'yarn test'
- The file structure is split into small components for readability and maintaining /debugging purposes
- For example, the search component contains the raw results in JSON format, which then passes the results to the ResultsList component which maps through the results and returns a ResultsCard components to display each individual location

### Backend
- The backend is a simple NodeJS with ExpressJS Middleware and a Sqlite database for storing all locations data
- There is a route defined '/locations?q=query'
- When performing a get request it querys the database for the names of any locations that contain the search term
- The results are sorted server side and returned shortest name first as theoretically this would be the closest name match
