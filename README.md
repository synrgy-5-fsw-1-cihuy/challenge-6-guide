# Challenge 6 Guide

This is a simple REST API with Repository Pattern.

Please read the [GUIDE](./GUIDE.md) to understand the application workflow.

## Installation

```bash
git clone git@github.com:synrgy-5-fsw-1-cihuy/challenge-6-guide.git
cd challenge-6-guide
npm install
```

## Usage

```bash
npm run dev
```

## Database Migration

```bash
npx sequelize-cli db:migrate
```

## Database Seed

```bash
npx sequelize-cli db:seed:all
```

# Repository Pattern

## Main Concept of Repository Pattern

Request -> Route -> Controller -> Service -> Repository -> Database -> Repository -> Service -> Controller -> Response

### Controller

- Handle request and response
- Call service

### Service

- Handle business logic
- Call repository

### Repository

- Handle database query
