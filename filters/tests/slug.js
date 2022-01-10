import test from 'ava';
import slug from '../slug.js';

test('slug a string', (t) => {
  t.is(slug('this is a simple string'), 'this-is-a-simple-string');
});

test('slug a string with numbers and random spaces', (t) => {
  t.is(slug('let\'s throw s0me random numb3rs 1n here 42'), 'lets-throw-s0me-random-numb3rs-1n-here-42');
  t.is(slug('oops   extra  space    s   '), 'oops-extra-space-s');
});

test('slug accented characters', (t) => {
  t.is(slug('à'), 'a');
  t.is(slug('á'), 'a');
  t.is(slug('ä'), 'a');
  t.is(slug('â'), 'a');
  t.is(slug('è'), 'e');
  t.is(slug('é'), 'e');
  t.is(slug('ë'), 'e');
  t.is(slug('ê'), 'e');
  t.is(slug('ì'), 'i');
  t.is(slug('í'), 'i');
  t.is(slug('ï'), 'i');
  t.is(slug('î'), 'i');
  t.is(slug('ò'), 'o');
  t.is(slug('ó'), 'o');
  t.is(slug('ö'), 'o');
  t.is(slug('ô'), 'o');
  t.is(slug('ù'), 'u');
  t.is(slug('ú'), 'u');
  t.is(slug('ù'), 'u');
  t.is(slug('ü'), 'u');
  t.is(slug('û'), 'u');
  t.is(slug('ñ'), 'n');
  t.is(slug('ç'), 'c');
});

test('slug punctuation characters', (t) => {
  t.is(slug('·'), '-');
  t.is(slug('/'), '-');
  t.is(slug('_'), '-');
  t.is(slug(','), '-');
  t.is(slug(':'), '-');
  t.is(slug(';'), '-');
});
