# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic
Versioning](https://semver.org/spec/v2.0.0.html).

## [2.0.1] (22-04-17)

### Fixed

-   Add pipeline for turborepo trying to fix the Heroku `start` script

## [2.0.0] (22-04-17)

### Changed

-   Refactor the app structure , splitting it into the server and client
    applications. [Turborepo](https://turborepo.org/) has been employed to manage
    the individual apps and running their appropriate compilation and development
    integrates better with Turborepo.
-   The client app is now using React to display the results from Aztro. Further
    details have been included in the results display. The React single page
    application relies on custom Webpack configuration.

### Removed

-   The server app no longer has the 404 page, instead the React single page app
    is served for all `GET` requests.

## [1.0.0] - 2022-03-22

### Added

-   Create basic NodeJS app fetching horoscope data from the Aztro API. The app
    uses Handlebars to display the results.
