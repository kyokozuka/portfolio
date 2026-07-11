import { describe, it, expect } from 'vitest';
import { groupSkillsByCategory, getAnimationDelay, formatProjectStatus } from './uiuxUtils';
import type { UIUXSkill } from '@/features/uiux/data';

const skill = (name: string, category: string): UIUXSkill => ({
  name,
  category,
  icon: '',
  color: '',
});

describe('groupSkillsByCategory', () => {
  it('カテゴリごとにスキルをまとめる', () => {
    const skills = [
      skill('Figma', 'Design'),
      skill('Miro', 'Design'),
      skill('React', 'Dev'),
    ];
    const grouped = groupSkillsByCategory(skills);

    expect(Object.keys(grouped)).toEqual(['Design', 'Dev']);
    expect(grouped.Design).toHaveLength(2);
    expect(grouped.Dev).toHaveLength(1);
  });

  it('空配列は空オブジェクトを返す', () => {
    expect(groupSkillsByCategory([])).toEqual({});
  });
});

describe('getAnimationDelay', () => {
  it('index と base から遅延秒を計算する', () => {
    expect(getAnimationDelay(2)).toBe('0.2s');
    expect(getAnimationDelay(3, 0.5)).toBe('1.5s');
  });
});

describe('formatProjectStatus', () => {
  it('completed の配色クラスを返す', () => {
    expect(formatProjectStatus('completed').bgColor).toBe('bg-green-100');
  });

  it('未知ステータスは gray 系にフォールバックする', () => {
    expect(formatProjectStatus('unknown').bgColor).toBe('bg-gray-100');
  });
});
