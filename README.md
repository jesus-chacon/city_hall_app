# City Hall App

Application for a city hall with prisma and ionic

## Requirements

### Server

- install docker
- install docker-compose
- start prisma mysql project
- install prisma --> sudo npm install -g prisma
- deploy prisma server --> prisma deploy
- Create .env file
- config environment
- start --> yarn start or yarn dev

#### Environment --> server/.env

```javascript
PRISMA_PORT=4466
PRISMA_HOST="localhost"
PRISMA_SECRET="go2devs"

SERVER_PORT=5000
SERVER_PLAYGROUND="/playground"
SERVER_GRAPHQL="/graphql"

```

### Client

```javascript
sudo npm install -g ionic
```
### Client CLI --> Generate Components

```javascript
ionic g component components/myComponent --export
```
