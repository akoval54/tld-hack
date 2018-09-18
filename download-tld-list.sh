#!/bin/bash

curl https://tld-list.com/df/tld-list-details.json > src/assets/tld-list.json

cat >src/app/tld-length.ts <<EOL
export const TLD_MIN_LENGTH = 2;
export const TLD_MAX_LENGTH = $(curl -s https://tld-list.com/df/tld-list-basic.txt | wc -L);
EOL
