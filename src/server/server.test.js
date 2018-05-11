import assert from 'assert';
import request from 'supertest';

import { server } from './server';

describe('Express routes from server level', () => {

	afterAll(() => {
		server.close();
	})

	describe('non-existent url', () => {

		const nonexistentApi = '/api/nonexistent';

		it('should return a 200 status', () => {
			return request(server).get(nonexistentApi).expect(200);
		})

		it('should return an html file', () => {
			return request(server).get(nonexistentApi).expect('Content-Type', /html/gi)
		})
	})
})

