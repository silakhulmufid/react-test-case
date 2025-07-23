import { describe, it, expect } from 'vitest';
import createSlug from './createSlug'

describe('createSlug', () => {
  it('should convert basic string to slug', () => {
    expect(createSlug('Hello World')).toBe('hello-world');
  });

  it('should handle string with special characters', () => {
    expect(createSlug('Hello World!')).toBe('hello-world');
    expect(createSlug('Hello, World!')).toBe('hello-world');
    expect(createSlug('Hello@World#')).toBe('hello-world');
  });

  it('should handle string with numbers', () => {
    expect(createSlug('Hello World 123')).toBe('hello-world-123');
    expect(createSlug('Article 2024')).toBe('article-2024');
  });

  it('should collapse multiple spaces and special characters into single hyphen', () => {
    expect(createSlug('Hello    World')).toBe('hello-world');
    expect(createSlug('Hello!!!World')).toBe('hello-world');
    expect(createSlug('Hello...World')).toBe('hello-world');
  });

  it('should remove leading and trailing hyphens', () => {
    expect(createSlug('!Hello World!')).toBe('hello-world');
    expect(createSlug('---Hello World---')).toBe('hello-world');
    expect(createSlug('...Hello World...')).toBe('hello-world');
  });

  it('should handle empty string', () => {
    expect(createSlug()).toBe('');
  });

  it('should handle string with only special characters', () => {
    expect(createSlug('!!!')).toBe('');
    expect(createSlug('   ')).toBe('');
    expect(createSlug('---')).toBe('');
  });

  it('should handle string with mixed case', () => {
    expect(createSlug('Hello WORLD')).toBe('hello-world');
    expect(createSlug('CamelCase String')).toBe('camelcase-string');
  });

  it('should handle unicode characters', () => {
    expect(createSlug('Café & Restaurant')).toBe('caf-restaurant');
    expect(createSlug('Naïve Approach')).toBe('na-ve-approach');
  });

  it('should handle very long strings', () => {
    const longString = 'This is a very long title with many words and special characters!@#$%';
    expect(createSlug(longString)).toBe('this-is-a-very-long-title-with-many-words-and-special-characters');
  });

  it('should handle strings with whitespace at beginning and end', () => {
    expect(createSlug('  Hello World  ')).toBe('hello-world');
    expect(createSlug('   Title   ')).toBe('title');
  });

  it('should handle consecutive special characters mixed with spaces', () => {
    expect(createSlug('Hello!!! World??? Test')).toBe('hello-world-test');
    expect(createSlug('One & Two | Three')).toBe('one-two-three');
  });

  it('should handle single character', () => {
    expect(createSlug('A')).toBe('a');
    expect(createSlug('!')).toBe('');
    expect(createSlug('1')).toBe('1');
  });

  it('should handle strings with underscores', () => {
    expect(createSlug('hello_world')).toBe('hello-world');
    expect(createSlug('test_case_123')).toBe('test-case-123');
  });
});