<p align="center"><a href="https://kutt.it" title="kutt.it"><img src="https://raw.githubusercontent.com/thedevs-network/kutt/9d1c873897c3f5b9a1bd0c74dc5d23f2ed01f2ec/static/images/logo-github.png" alt="Kutt.it"></a></p>

# Kutt.it

**Kutt** is a modern URL shortener with support for custom domains. Shorten URLs, manage your links and view the click rate statistics.

_Contributions and bug reports are welcome._

[https://kutt.it](https://kutt.it)

[![Build Status](https://travis-ci.org/thedevs-network/kutt.svg?branch=v2-beta)](https://travis-ci.org/thedevs-network/kutt)
[![Contributions](https://img.shields.io/badge/contributions-welcome-brightgreen.svg)](https://github.com/thedevs-network/kutt/#contributing)
[![GitHub license](https://img.shields.io/github/license/thedevs-network/kutt.svg)](https://github.com/thedevs-network/kutt/blob/develop/LICENSE)
[![Twitter](https://img.shields.io/twitter/url/https/github.com/thedevs-network/kutt/.svg?style=social)](https://twitter.com/intent/tweet?text=Wow:&url=https%3A%2F%2Fgithub.com%2Fthedevs-network%2Fkutt%2F)

## Migration from v1

The new version of Kutt is here. In version 2, we used TypeScript and we moved from Neo4j to PostgreSQL database in favor of performance and we're working on adding new features.

If you're coming from v1, refer to [MIGRATION.md](MIGRATION.md) to migrate data from Neo4j to PostgreSQL.

## Table of Contents

- [Key Features](#key-features)
- [Stack](#stack)
- [Setup](#setup)
- [Browser Extensions](#browser-extensions)
- [API](#api)
- [Integrations](#integrations)
- [3rd Party Packages](#3rd-party-packages)
- [Donate](#donate)
- [Contributing](#contributing)

## Key Features

- Free and open source.
- Custom domain support.
- Custom URLs for shortened links
- Set password for links.
- Set description for links.
- Expiration time for links.
- Private statistics for shortened URLs.
- View, edit, delete and manage your links.
- Admin account to view, delete and ban links.
- Ability to disable registration and anonymous link creation for private use.
- RESTful API.

## Stack

- Node (Web server)
- Express (Web server framework)
- Passport (Authentication)
- React (UI library)
- Next (Universal/server-side rendered React)
- Easy Peasy (State management)
- styled-components (CSS styling solution library)
- Recharts (Chart library)
- PostgreSQL (database)
- Redis (Cache layer)

## Setup

### Manual

You need to have [Node.js](https://nodejs.org/), [PostgreSQL](https://www.postgresql.org/) and [Redis](https://redis.io/) installed.

1. Clone this repository or [download the latest zip](https://github.com/thedevs-network/kutt/releases).
2. Copy `.example.env` to `.env` and fill it properly ([see below](#configuration)).
3. Install dependencies: `npm install`.
4. Run for development: `npm run dev`.
5. Run for production: `npm run build` then `npm start`.

### Docker

Download the [`docker-compose.yml`](docker-compose.yml) and the [`.docker.env`](.docker.env)-file from the repository and configure the `.docker.env` ([see below](#configuration)). 
To execute Kutt you simply have to run `docker-compose up -d` command and then the app should be ready on port "3000".

The `docker-compose.yml` uses the official kutt docker image available on [Docker Hub](https://hub.docker.com/r/kutt/kutt).

### Configuration

For the minimal configuration the following settings have to be changed in the `.env`-file:

- **DEFAULT_DOMAIN**: The domain of your kutt instance
- **DB_**: The DB credentials (when you use docker-compose you can skip these)
- **ADMIN_EMAILS**: A comma-separated list of the administrator-accounts
- **RECAPTCHA_**: Enter your credentials to use reCaptchas or delete this setting if you don't want to use it
- **MAIL_**: Enter the SMTP-server's credentials (The experience shows SSL works better than STARTTLS; The mail config is required to easily create accounts, see [this comment](https://github.com/thedevs-network/kutt/issues/269#issuecomment-628604256) how it can be done manually)
- **REPORT_EMAIL**: Kutt offers a form to report malicious links which are sent to this mail-address
