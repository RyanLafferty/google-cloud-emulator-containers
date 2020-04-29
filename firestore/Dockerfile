FROM google/cloud-sdk:alpine

# Set default ENV vars
ENV FIRESTORE_PROJECT_ID=default-firestore-project
ENV FIRESTORE_PORT=8080

# Install Java 8 for Datastore emulator
RUN apk --update --no-cache add openjdk8-jre
RUN gcloud components install cloud-firestore-emulator beta

# Volume to persist Datastore data
VOLUME /opt/data

COPY ./entrypoint.sh .

EXPOSE $FIRESTORE_PORT

# Start firestore
ENTRYPOINT ["/bin/bash", "/entrypoint.sh"]
