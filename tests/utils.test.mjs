import assert from 'node:assert';
import { kebab, camelCase, cleanFilename, mergeDeep } from '../utils.mjs';

assert.strictEqual(kebab('Hello World'), 'hello-world');
assert.strictEqual(camelCase('hello world'), 'helloWorld');
assert.strictEqual(cleanFilename('  My File! '), 'my_file');
assert.deepStrictEqual(mergeDeep({a:1}, {b:2}), {a:1, b:2});

console.log('All tests passed');
