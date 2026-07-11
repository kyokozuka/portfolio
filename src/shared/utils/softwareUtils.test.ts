import { describe, it, expect } from 'vitest';
import {
  formatDuration,
  getProjectProgress,
  formatTechStack,
  getProjectGradient,
} from './softwareUtils';

describe('formatDuration', () => {
  it('複数年は "Ny" 形式で返す', () => {
    expect(formatDuration('2020-01-01', '2023-01-01')).toBe('3y');
  });

  it('1年未満は "Nm" 形式で返す', () => {
    expect(formatDuration('2022-01-01', '2022-04-01')).toBe('3m');
  });
});

describe('getProjectProgress', () => {
  it('ステータスに応じた進捗率を返す（大文字小文字を無視）', () => {
    expect(getProjectProgress('completed')).toBe(100);
    expect(getProjectProgress('In Progress')).toBe(60);
    expect(getProjectProgress('planning')).toBe(20);
  });

  it('未知のステータスは 0 を返す', () => {
    expect(getProjectProgress('unknown')).toBe(0);
  });
});

describe('formatTechStack', () => {
  it('3件以下はそのまま連結する', () => {
    expect(formatTechStack(['React', 'TypeScript'])).toBe('React, TypeScript');
  });

  it('4件以上は先頭2件 + 残り件数を返す', () => {
    expect(formatTechStack(['React', 'TypeScript', 'Next.js', 'Node'])).toBe(
      'React, TypeScript +2 more',
    );
  });
});

describe('getProjectGradient', () => {
  it('既知のタイプに対応するグラデーションを返す', () => {
    expect(getProjectGradient('web')).toBe('from-blue-500 to-cyan-500');
  });

  it('未知のタイプは default グラデーションを返す', () => {
    expect(getProjectGradient('unknown')).toBe('from-gray-500 to-slate-500');
  });
});
