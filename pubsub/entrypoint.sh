#!/bin/bash

# Config gcloud project
gcloud config set project ${PUBSUB_PROJECT_ID}

# Start emulator
gcloud beta emulators pubsub start --host-port=0.0.0.0:${PUBSUB_PORT}

# Run passed CMD
exec "$@"
