#!/usr/bin/env bash
docker run -ti \
    -v "$(pwd)/src:/jiraf/src" \
    -v "$(pwd)/test:/jiraf/test" \
    -v "$(pwd)/package.json:/jiraf/package.json" \
    -e "TERM=xterm-256color" \
    endreymarca/jiraf-testing \
    bash