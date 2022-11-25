# Challenge 6 Guide

This is a simple REST API with Repository Pattern.

Please read the [Guide](./GUIDE.md) to understand the application workflow.

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

## What is Repository Pattern?

Repository pattern is a design pattern that provides an abstraction layer between the domain and data mapping layers using a repository interface. This pattern can be implemented using different technologies like Hibernate, Spring Data, etc.

## Why Repository Pattern?

- It provides a clean separation and more robust design between the domain and data mapping layers.
- It provides the same set of operations to the domain layer, hiding the implementation details of the persistence framework.
- It promotes the use of unit of work and domain-driven design patterns.

## How Repository Pattern Works?

- The repository pattern is a layer of abstraction between the domain model and the data mapping layer.
