Multi-Container Docker Application

Task 1: Install Docker

1.Install Docker Desktop

2.Go to the official Docker website:
https://www.docker.com/products/docker-desktop/

3.Download the version for your system:

4.Verify installation in Terminal:

    docker --version
    docker compose version

Task 2: Create docker-compose.yml

1.Create the following folder structure:

    multi-container-app/
    ├── docker-compose.yml
    └── web-data/
    └── index.html

2.Add web-data/index.html

3.Create the docker-compose.yml file:

Task 3: Run the Multi-Container Application

1.Move to folder which consist docker-compose file

    cd Lecture17/multi-container-app

2.Start the application:

    docker compose up -d
    docker compose ps
![Screenshot 2025-05-09 at 11.25.13.png](Screenshot%202025-05-09%20at%2011.25.13.png)

3.Open a browser and go to:
http://localhost:8080
![Screenshot 2025-05-09 at 11.25.31.png](Screenshot%202025-05-09%20at%2011.25.31.png)

You should see the "Hello from Docker!" message.

Task 4: Explore Networks and Volumes

1.Check docker networks and volumes:

    docker network ls
    docker volume ls
![Screenshot 2025-05-09 at 11.26.23.png](Screenshot%202025-05-09%20at%2011.26.23.png)

2.Connect to PostgreSQL container:

Get the container name:

    docker ps

Connect to db bash:

    docker exec -it 56c96dc1c909  bash
![Screenshot 2025-05-12 at 18.01.43.png](Screenshot%202025-05-12%20at%2018.01.43.png)

Exit PostgreSQL:

    exit

Task 5: Scale the Web Service

Scale the web service to 3 replicas:

    docker compose up -d --scale web=3

Check running containers:

    docker compose ps
![Screenshot 2025-05-12 at 17.27.58.png](Screenshot%202025-05-12%20at%2017.27.58.png)

