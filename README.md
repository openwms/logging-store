# logging-store
[![Codacy status][codacy-image]][codacy-url]
[![Build status][travis-image]][travis-url]
[![License][license-image]][license-url]

[codacy-image]: https://www.codacy.com/project/badge/fe2c9325e1f34ecfb8dbc79012e2c719
[codacy-url]: https://www.codacy.com/public/marzelwidmer/logging-store
[travis-image]: https://img.shields.io/travis/marzelwidmer/logging-store.svg?style=flat-square
[travis-url]: https://travis-ci.org/marzelwidmer/logging-store
[license-image]: http://img.shields.io/:license-Apache2.0-blue.svg?style=flat-square
[license-url]: LICENSE



# POST a Log Message
```
curl -X POST  -H "Accept: Application/json" -H "Content-Type: application/json" http://localhost:8080/services/rest/log -d '{
  "clientApplikation":"SPA1",
  "clientVersion":"1.0.1",
  "correlationId": "11212",
  "debugInformation":"Hello World",
  "faultMessage":"Message Hello World",
  "faultCode":"289-36",
  "faultType":"SYSTEM_UMGEBUNG",
  "severity":"DEBUG"
}'
```
# built
```
mvn package
```
# built with oracle databaase support
```
mvn package -Poracle
```
# Start App with default profile
```
  java -jar target/logging-store-0.0.1-SNAPSHOT.jar &
```

# Shutdown App on development environment
```
  curl -X POST localhost:8080/shutdown
```


# Start App with development profile
```
  java -jar  -Dspring.profiles.active=development target/logging-store-0.0.1-SNAPSHOT.jar &
```


# Start App with test profile
```
  java -jar  -Dspring.profiles.active=test target/logging-store-0.0.1-SNAPSHOT.jar &
```

# Start App with integration profile
```
  java -jar  -Dspring.profiles.active=integration target/logging-store-0.0.1-SNAPSHOT.jar &
```


# Start App with preProduction profile
```
  java -jar  -Dspring.profiles.active=preproduction target/logging-store-0.0.1-SNAPSHOT.jar &
```


# Start App with production profile
```
  java -jar  -Dspring.profiles.active=production target/logging-store-0.0.1-SNAPSHOT.jar &
```