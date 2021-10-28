jest.mock('node-fetch');
import fetch from 'node-fetch';
import handler from '.';
const { Response } = jest.requireActual('node-fetch');