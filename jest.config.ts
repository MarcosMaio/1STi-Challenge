import type { Config } from 'jest';

export default async (): Promise<Config> => {
  return {
    verbose: true,
    moduleNameMapper: {
      '^@/(.*)$': '<rootDir>/src/$1',
    },
    testEnvironment: 'jest-environment-jsdom',
  };
};