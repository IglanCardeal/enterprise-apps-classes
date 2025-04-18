<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" /></a>
</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest

<p align="center">A progressive <a href="http://nodejs.org" target="_blank">Node.js</a> framework for building efficient and scalable server-side applications.</p>
<p align="center">
  <a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/v/@nestjs/core.svg" alt="NPM Version" /></a>
  <a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/l/@nestjs/core.svg" alt="Package License" /></a>
  <a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/dm/@nestjs/common.svg" alt="NPM Downloads" /></a>
  <a href="https://circleci.com/gh/nestjs/nest" target="_blank"><img src="https://img.shields.io/circleci/build/github/nestjs/nest/master" alt="CircleCI" /></a>
  <a href="https://coveralls.io/github/nestjs/nest?branch=master" target="_blank"><img src="https://coveralls.io/repos/github/nestjs/nest/badge.svg?branch=master#9" alt="Coverage" /></a>
  <a href="https://discord.gg/G7Qnnhy" target="_blank"><img src="https://img.shields.io/badge/discord-online-brightgreen.svg" alt="Discord"/></a>
  <a href="https://opencollective.com/nest#backer" target="_blank"><img src="https://opencollective.com/nest/backers/badge.svg" alt="Backers on Open Collective" /></a>
  <a href="https://opencollective.com/nest#sponsor" target="_blank"><img src="https://opencollective.com/nest/sponsors/badge.svg" alt="Sponsors on Open Collective" /></a>
  <a href="https://paypal.me/kamilmysliwiec" target="_blank"><img src="https://img.shields.io/badge/Donate-PayPal-ff3f59.svg"/></a>
  <a href="https://opencollective.com/nest#sponsor"  target="_blank"><img src="https://img.shields.io/badge/Support%20us-Open%20Collective-41B883.svg" alt="Support us"></a>
  <a href="https://twitter.com/nestframework" target="_blank"><img src="https://img.shields.io/twitter/follow/nestframework.svg?style=social&label=Follow"></a>
</p>

## Project Overview

Fakeflix is a Netflix-like streaming platform built with NestJS, implementing both REST and GraphQL APIs. The project follows enterprise-grade architecture patterns with clear separation of concerns and modern development practices.

### Architecture

The application is built using:
- NestJS as the main framework
- Modular architecture with clear separation of concerns
- Dual API support (REST and GraphQL)
- Dual database setup (TypeORM and Prisma)

### Main Modules

#### Content Module
- Video content management (movies, TV shows, episodes)
- External movie rating integration (MovieDB API)
- Video uploads and thumbnails handling

#### Identity Module
- User authentication and authorization
- User account management
- JWT-based authentication
- Password hashing with bcrypt
- GraphQL API for user operations
- Prisma ORM for database interactions

#### Billing Module
- Payment processing
- Subscription management
- Drizzle ORM for database interactions

### Database Structure

The project uses three separate schemas:

**Identity Schema:**
- User management
- Authentication data
- Managed with Prisma ORM

**Content Schema:**
- Movies
- TV Shows
- Episodes
- Videos
- Thumbnails
- Managed with TypeORM

**Billing Schema:**
- Payment information
- Subscription details
- Managed with Drizzle ORM

### Technical Stack

**Backend:**
- NestJS (Node.js framework)
- TypeScript
- GraphQL (Apollo Server)
- REST APIs

**Databases:**
- PostgreSQL
- Prisma (identity management)
- TypeORM (content management)
- Drizzle (billing management)

**Testing:**
- Jest
- E2E testing support
- Nock for HTTP mocking

**Infrastructure:**
- Docker (development database)
- Environment-based configuration

### Project Structure
```
src/
├── module/
│   ├── content/         # Content management
│   ├── identity/        # User management
│   ├── billing/         # Billing management
│   └── shared/          # Shared modules and utilities
database/
├── content/             # Content database configurations
├── identity/            # Identity database configurations
└── billing/             # Billing database configurations
test/                    # Test configurations and utilities
```

### Development Tools
- Package Management: Yarn
- Node Version: 18.17.1
- Database: PostgreSQL 15 (via Docker)
- Testing: Jest with E2E support
- Code Quality: ESLint + Prettier

## Installation

Recommend to use the `--frozen-lockfile` flag

```bash
$ yarn --frozen-lockfile
```

## Getting Started

### Prerequisites
- Node.js 18.17.1
- Docker and Docker Compose
- PostgreSQL 15
- Yarn package manager

### Environment Setup
1. Copy the example environment file:
```bash
$ cp .env.example .env
```

2. Configure and adjust your environment variables.

### Docker Setup
Start the development databases using Docker:

```bash
# Start all services
$ docker-compose up -d

# Start specific database
$ docker-compose up -d postgres

# Stop all services
$ docker-compose down

# View logs
$ docker-compose logs -f
```

### Database Setup
1. Start the Docker containers
2. Run migrations for each database:
```bash
# Content database
$ yarn run content:db:migrate

# Identity database
$ yarn run identity:db:migrate

# Billing database
$ yarn run billing:db:migrate
```

## API Documentation

### REST API
The REST API documentation is available at:
- Swagger UI: http://localhost:3000/api
- OpenAPI JSON: http://localhost:3000/api-json

### GraphQL API
The GraphQL playground is available at:
- http://localhost:3000/graphql

GraphQL schema can be explored interactively in the playground.

## Running the app

```bash
# development
$ yarn run start

# watch mode
$ yarn run start:dev

# production mode
$ yarn run start:prod
```

## Test

```bash
# unit tests
$ yarn run test

# e2e tests
$ yarn run test:e2e

# test coverage
$ yarn run test:cov
```

## Database Management

```bash
# Content Database (TypeORM)
# Generate content database migrations
$ yarn run content:db:generate

# Run content database migrations
$ yarn run content:db:migrate

# Drop content database schema
$ yarn run content:db:drop

# Identity Database (Prisma)
# Generate identity database migrations
$ yarn run identity:db:generate

# Push identity database changes
$ yarn run identity:db:migrate

# Billing Database (Drizzle)
# Generate billing database migrations
$ yarn run billing:db:generate

# Run billing database migrations
$ yarn run billing:db:migrate

# Push billing database changes
$ yarn run billing:db:push

# Drop billing database schema
$ yarn run billing:db:drop
```

## Support

Nest is an MIT-licensed open source project. It can grow thanks to the sponsors and support by the amazing backers. If you'd like to join them, please [read more here](https://docs.nestjs.com/support).

## Stay in touch

- Author - [Kamil Myśliwiec](https://kamilmysliwiec.com)
- Website - [https://nestjs.com](https://nestjs.com/)
- Twitter - [@nestframework](https://twitter.com/nestframework)

## License

Nest is [MIT licensed](LICENSE).
