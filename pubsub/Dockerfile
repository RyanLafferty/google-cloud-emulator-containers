FROM google/cloud-sdk:alpine

# Set default ENV vars
ENV PUBSUB_PROJECT_ID=default-pubsub-project
ENV PUBSUB_PORT=8085

# Install Java 8 for pubsub emulator
RUN apk --update --no-cache add openjdk8-jre
RUN gcloud components install pubsub-emulator beta

# Volume to persist pubsub data
VOLUME /opt/data

COPY ./entrypoint.sh .

EXPOSE $PUBSUB_PORT

# Start firestore
ENTRYPOINT ["/bin/bash", "/entrypoint.sh"]
