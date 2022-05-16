## May 11 2022
# steps done configuring Flask Api and React "Frontend" app

1 - Create Python virtual enviroment ( using pipenv )
2 - Install Python Flask
3 - Create and start basic Flask web server
4 - Create "/new-image" API endpoint
5 - Retrive random image in the own API from the Unsplash Api
6 - Test new API endpoint with Postman
7 - Change "frontend" app to use new API instead of th Unsplash API ( using CORS )
8 - Install and enabele Pylint linter and Black formatter for Python ( in ".vscode/settings.json" file )

# Save images data in the database

## Implementation Steps :
## Docerizing Images Gallery ##
 1 - Create DockerFiles for the "frontend" and "api" apps
 2 - Configure Docker-compose to start "frontend" and "api" containers
 3 - Add mongo and mongo-express Docker containers

## Create "/images" API endpoint
## Enable GET and POST methods for the "/images" API endpoint
## Save "image" in the database after the client POST request to "/images"
## Test GET and POST "/images" in Postman
## Add save image Button and get all saved images functionality in the "frontend"


# Mongo and Mongo-express setup Summary

- at this stage MongoDB and mongo-express connect to each other, but not connected to API
- configurations are set in docker-compose.yml file

# Communication between Docker containers
# docker-compose create bridge network automatically
## 3000             5050                            8081
## frontend  <--->  api   <--->  mongo   <--->    mongo-express
## 172.22.0.5     172.22.0.3    172.22.0.2        172.22.0.4
##                          docker
##                       172.22.0.0/16            

## to compose containers run in images-galery location -> "docker-compose -d" to compose in deattached mode

# May 15 2022 replased fetch request with axios request
## Was :
##### fetch get request
    // fetch(`${API_URL}/new-image?query=${word}`)
    //   .then((res) => res.json())
    //   .then((data) => {
    //     console.log('adding found image to the state');
    //     setImages([{ ...data, title: word }, ...images]);
    //   })
    //   .catch((err) => {
    //     console.log(err);
    //   });
## Changed to :
##### axios get request
    try {
      const res = await axios.get(`${API_URL}/new-image?query=${word}`);
      console.log('adding found image to the state');
      setImages([{ ...res.data, title: word }, ...images]);
    } catch (error) {
      console.log(error);
    }
    console.log('clearing search from');
