#!/bin/bash
yarn
yarn knex migrate:latest --env production
yarn start