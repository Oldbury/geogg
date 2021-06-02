# geogg
## Front End Demo
https://user-images.githubusercontent.com/10517525/120548755-9e44ba80-c3ea-11eb-948b-8da2dbe3ae62.mov
### Initial state
<img width="1466" alt="Screenshot 2021-06-02 at 21 31 28" src="https://user-images.githubusercontent.com/10517525/120548130-e6afa880-c3e9-11eb-9b15-154003eea0e8.png">

### Example Results
<img width="1466" alt="Screenshot 2021-06-02 at 21 31 49" src="https://user-images.githubusercontent.com/10517525/120548171-f29b6a80-c3e9-11eb-86a7-77fd7378a535.png">
<img width="1466" alt="Screenshot 2021-06-02 at 21 32 03" src="https://user-images.githubusercontent.com/10517525/120548196-fb8c3c00-c3e9-11eb-9d58-ff7288d7768f.png">

# Documentation
## Structure
### Frontend
- The frontend is written in ReactJS and Typescript, utilising TailwindCSS for styling

### Backend
- The backend is a simple NodeJS with ExpressJS Middleware and a Sqlite database for storing all locations data
- There is a route defined '/locations?q=query'
- When performing a get request it querys the database for the names of any locations that contain the search term
- The results are sorted server side and returned shortest name first as theoretically this would be the closest name match
