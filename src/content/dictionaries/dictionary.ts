// UI 文言の辞書の型。ロケール追加・キー追加はこの型で契約を固定し、
// 各言語ファイルで抜けを型エラーとして検出できるようにする。
export type Dictionary = {
  nav: {
    home: string;
    software: string;
    uiux: string;
    contact: string;
  };
};
