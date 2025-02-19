import { getMappingFilePath } from '@/core/src/shared/utils';
import { expect, describe, it, vi, beforeEach } from 'vitest';
import fs from 'fs';

describe('mappings', () => {
  const file = '/Users/zlx/code-inspector/node_modules/pkg-1/a/b/c';
  const correntPath = '/Users/zlx/code-inspector/packages/pkg-1/a/b/c';

  beforeEach(() => {
    vi.mock('fs');
    vi.mocked(fs.existsSync).mockReturnValue(true);
  });

  it('return real file with record and slash', () => {
    const mappings = {
      'pkg-1': '/Users/zlx/code-inspector/packages/pkg-1',
    };
    const target = getMappingFilePath(file, mappings);
    expect(target).to.be.equal(correntPath);
  });

  it('return original file when real file not found', () => {
    vi.mocked(fs.existsSync).mockReturnValue(false);
    const mappings = {
      'pkg-1': '/Users/zlx/code-inspector/packages/pkg-1',
    };
    const target = getMappingFilePath(file, mappings);
    expect(target).to.be.equal(file);
  });

  it('record: short find slash, replacement slash', () => {
    const mappings = {
      'pkg-1/': '/Users/zlx/code-inspector/packages/pkg-1/',
    };
    const target = getMappingFilePath(file, mappings);
    expect(target).to.be.equal(correntPath);
  });

  it('record: full find', () => {
    const mappings = {
      '/Users/zlx/code-inspector/node_modules/pkg-1':
        '/Users/zlx/code-inspector/packages/pkg-1/',
    };
    const target = getMappingFilePath(file, mappings);
    expect(target).to.be.equal(correntPath);
  });

  it('record: no match', () => {
    const mappings = {
      'pkg-2': '/Users/zlx/code-inspector/packages/pkg-2',
    };
    const target = getMappingFilePath(file, mappings);
    expect(target).to.be.equal(file);
  });

  it('array: short find', () => {
    const mappings = [
      {
        find: 'pkg-2',
        replacement: '/Users/zlx/code-inspector/packages/pkg-2',
      },
      {
        find: 'pkg-1',
        replacement: '/Users/zlx/code-inspector/packages/pkg-1',
      },
    ];
    const target = getMappingFilePath(file, mappings);
    expect(target).to.be.equal(correntPath);
  });

  it('array: regexp', () => {
    const mappings = [
      {
        find: 'pkg-2',
        replacement: '/Users/zlx/code-inspector/packages/pkg-2',
      },
      {
        find: /pkg\-1/,
        replacement: '/Users/zlx/code-inspector/packages/pkg-1',
      },
    ];
    const target = getMappingFilePath(file, mappings);
    expect(target).to.be.equal(correntPath);
  });

  it('array: no match', () => {
    const mappings = [
      {
        find: 'pkg-2',
        replacement: '/Users/zlx/code-inspector/packages/pkg-2',
      },
      {
        find: /pkg\-3/,
        replacement: '/Users/zlx/code-inspector/packages/pkg-1',
      },
    ];
    const target = getMappingFilePath(file, mappings);
    expect(target).to.be.equal(file);
  });

  it('empty mappings', () => {
    const mappings = undefined;
    const target = getMappingFilePath(file, mappings);
    expect(target).to.be.equal(file);
  });
});
