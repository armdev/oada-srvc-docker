ARG NODE_VERSION=latest
FROM mhart/alpine-node:${NODE_VERSION}

RUN apk add --no-cache bash
COPY ./entrypoint.sh /entrypoint.sh
RUN chmod u+x /entrypoint.sh

# Make librdkafka work
ENV WITH_SASL=0
ENV BUILD_LIBRDKAFKA=0
RUN apk add --upgrade --no-cache \
    libressl2.5-libcrypto --repository http://dl-3.alpinelinux.org/alpine/edge/main/ --allow-untrusted \
    libressl2.5-libssl --repository http://dl-3.alpinelinux.org/alpine/edge/main/ --allow-untrusted \
    librdkafka-dev --repository http://dl-3.alpinelinux.org/alpine/edge/community/ --allow-untrusted

WORKDIR /code/token-lookup

CMD /entrypoint.sh
