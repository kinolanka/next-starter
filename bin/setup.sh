#!/bin/bash

set -e

# First time setup script

husky install

chmod +x .husky/pre-commit; git add .husky/pre-commit

cp .env.local.example .env.local
