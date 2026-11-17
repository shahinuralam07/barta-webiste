import test from 'node:test';
import assert from 'node:assert/strict';
import {
  getNextTheme,
  isValidThemeMode,
  resolveInitialTheme,
  THEME_STORAGE_KEY,
} from './theme';

test('isValidThemeMode accepts only light and dark', () => {
  assert.equal(isValidThemeMode('light'), true);
  assert.equal(isValidThemeMode('dark'), true);
  assert.equal(isValidThemeMode('system'), false);
  assert.equal(isValidThemeMode(''), false);
  assert.equal(isValidThemeMode(null), false);
});

test('resolveInitialTheme prioritizes persisted localStorage value over OS preference', () => {
  assert.equal(resolveInitialTheme('dark', false), 'dark');
  assert.equal(resolveInitialTheme('light', true), 'light');
  assert.equal(resolveInitialTheme(null, true), 'dark');
  assert.equal(resolveInitialTheme(null, false), 'light');
  assert.equal(resolveInitialTheme('invalid-theme', true), 'dark');
  assert.equal(resolveInitialTheme('invalid-theme', false), 'light');
});

test('getNextTheme toggles between light and dark and uses stable storage key', () => {
  assert.equal(getNextTheme('light'), 'dark');
  assert.equal(getNextTheme('dark'), 'light');
  assert.equal(THEME_STORAGE_KEY, 'barta-theme');
});
