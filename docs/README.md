# API Documentation

This folder contains the API documentation for the challenge.

## OpenAPI

The OpenAPI specification is a standard, programming language-agnostic interface description for REST APIs, which allows both humans and computers to discover and understand the capabilities of the service without access to source code, documentation, or through network traffic inspection.

## Postman

Postman is a collaboration platform for API development. Postman's features simplify each step of building an API and streamline collaboration so you can create better APIs—faster.

## Swagger UI

Swagger UI is an open-source tool that renders the OpenAPI specification as interactive documentation. It allows anyone — be it your development team or your end consumers — to visualize and interact with the API’s resources without having any of the implementation logic in place. It’s automatically generated from your OpenAPI definition.

## Creating the documentation

The documentation is created using the OpenAPI specification. The specification is written in YAML format and is located in the `docs/openapi.yaml` file.

To create the documentation, run the following command:

```bash
npm run docs
```

This command will generate the documentation in the `docs/api` folder.

## Viewing the documentation

To view the documentation, run the following command:

```bash
npm run docs:serve
```

This command will start a local server and open the documentation in your browser.

## Publishing the documentation

To publish the documentation, run the following command:

```bash
npm run docs:publish
```
