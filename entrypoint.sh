#!/bin/sh
# Entrypoint untuk setup Firebase token dari environment variable

if [ -n "$FIREBASE_REFRESH_TOKEN" ]; then
  mkdir -p /root/.config/configstore
  cat > /root/.config/configstore/firebase-tools.json <<EOF
{
  "tokens": {
    "refresh_token": "$FIREBASE_REFRESH_TOKEN"
  },
  "user": {
    "email": "${FIREBASE_EMAIL:-}"
  }
}
EOF
fi

exec "$@"