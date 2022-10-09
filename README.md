<p align="center"><img src="https://github.com/derryderajat/pen-dekin/blob/e4e9c29c3311227c0305b5ddb3e058dfbe51bb26/homepage.png" alt="Pen-dekin"></p>

# Pen-dekin V0

**Pen-dekin** is a modern URL shortener with support for custom domains. Shorten URLs, manage your links .

_Contributions and bug reports are welcome._

[https://pen-dekin.vercel.app/](https://pen-dekin.vercel.app/)


## Table of Contents

- [Key Features](#key-features)
- [Stack](#stack)
- [Setup](#setup)
- [Donate](#donate)
- [Contributing](#contributing)

## Key Features

- Free and open source.
- Custom domain support.
- Custom URLs for shortened links
- RESTful API.

## Stack

- Node (Web server)
- React (UI library)
- Next (Universal/server-side rendered React)
- Tailiwind (CSS styling solution library)
- MongoDB (database)

## Setup

### Manual

You need to have [Node.js](https://nodejs.org/), [MongoDB](https://www.mongodb.com/) installed.

1. Clone this repository or [download the latest zip](https://github.com/derryderajat/pen-dekin.git).
2. Copy `.example.env` to `.env.local` and fill it properly ([see below](#configuration)).
3. Install dependencies: `npm install`.
4. Run for development: `npm run dev`.
5. Run for production: `npm run build` then `npm start`.


### Configuration

For the minimal configuration the following settings have to be changed in the `.env`-file:

- **MONGO_URI**: Your mongodb URI
- **SERVER**: Your hostname 


## Donate

Pen-dekin is free of charge and free of ads. Help us keep our servers running and motivate us to work on this project by donating to our Trakteer wallet:

<a href="https://trakteer.id/derryderajat/tip">
<img src="https://cdn.trakteer.id/images/embed/trbtn-red-1.png" alt="Kutt.it" height="40px">
</a>

## Contributing

Pull requests are welcome. You'll probably find lots of improvements to be made.

Open issues for feedback, requesting features, reporting bugs or discussing ideas.

