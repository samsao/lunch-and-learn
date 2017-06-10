import _ from 'lodash';

// Source: http://emailregex.com/
/* eslint-disable max-len */
/* eslint-disable no-useless-escape */
const EMAIL_PATTERN = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

function isValid(regexPattern): (value: string) => boolean {
  return (value: string) => regexPattern.test(value);
}

export function isNotEmpty(value: string): boolean {
  return !_.isNull(value) && !_.isUndefined(value) && !_.isEmpty(value);
}

export const isValidEmail = isValid(EMAIL_PATTERN);
