import { createServer, Model, Factory, Response } from 'miragejs';
import { faker } from '@faker-js/faker';

type User = {
  name: string;
  email: string;
  created_at: string;
}

export function makeServer() {
  const server = createServer({
    models: {
      user: Model.extend<Partial<User>>({})
    },

    factories: {
      user: Factory.extend({
        name() {
          return faker.name.firstName() + ' ' + faker.name.lastName();
        },
        email() {
          return faker.internet.email().toLowerCase();
        },
        createdAt() {
          return faker.date.recent(10).toISOString();
        },
      })
    },

    seeds(server) {
      server.createList('user', 200);
    },

    routes() {
      this.namespace = 'api';
      this.timing = 750;

      this.get('/users', function (schema, request) {
        const { pageNumber = 1, perPage = 10 } = request.queryParams;

        const total = schema.all("user").length;

        const pageStart = (Number(pageNumber) - 1) * Number(perPage);
        const pageEnd = pageStart + Number(perPage);

        const users = this.serialize(schema.all("user"))
        .users.slice(pageStart, pageEnd);

        return new Response(
          200,
          { 'x-total-count': String(total) },
          { users }
        );

      });
      this.post('/users');

      // Reset namespace to default to avoid collisions with other routes
      this.namespace = '';
      this.passthrough();
    }
  });

  return server;
}