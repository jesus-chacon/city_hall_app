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

### Android JDK

```javascript
sudo add-apt-repository ppa:webupd8team/java
sudo apt update
sudo apt install oracle-java8-installer
sudo apt install oracle-java8-set-default
```

### Install Android studio

- Install Java...
```javascript
sudo apt install openjdk-8-jre openjdk-8-jdk
```

AND...

- Download it from the Ubuntu Software Manager

or 

- Execute this command..
```javascript
sudo snap install android-studio --classic
```

- Add the below variables in the file ~/.bashrc, to set the Android home path... 
```javascript
export ANDROID_HOME=$HOME/Android/Sdk
export PATH=$PATH:$ANDROID_HOME/tools
export PATH=$PATH:$ANDROID_HOME/platform-tools
```

### Install cordova / Add Adroid platform

```javascript
sudo npm install -g cordova
```

- In the ionic project folder run...
```javascript
ionic cordova platform add android
```
