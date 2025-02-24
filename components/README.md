# コンポネントのまとめ

## Level1: Basic Components

コンポーネントとして使える最小の要素。Button, Text, List, TextLink, Label, User Iconなど。 通常状態ではElevationの差がなく、hoverなどによって初めてElevationが変化する。

### BUTTONS（ボタン）

- STORIES
  - variant
    - secondary : 通常アクション系
    - primary : 業務処理などの処理実行系（青系）
    - danger : データ削除などの処理実行系（赤系）
  - [ ] アイコン ※意味を分けるか
    - アイコンあり :
    - アイコン無し :
  - ステータス
    - 非活性
    - インフォメーション : ボタンの説明、ホバーで説明を表示
    - ローディング : 処理実行中のアニメーション
    - 選択実行処理 : 一つのボタンでアクションを分割する場合

[SmartHR UI BUTTONS](https://story.smarthr-ui.dev/?path=/docs/buttons%EF%BC%88%E3%83%9C%E3%82%BF%E3%83%B3%EF%BC%89-button--docs&globals=backgrounds.grid:!false;)

#### 選択系

##### ラジオ系

単一選択系オブジェクト

- ラジオボタン
- 選択可能ボタン
- プルダウン

##### チェックボックス系

複数選択可能

#### 入力エリア

- 入力オブジェクト種類
  - 単一入力
    - パターン
      - 半角英数全角
      - パスワード
      - メールアドレス
    - 用途
      - テンプレート名
  - 複数行入力
    - 用途
      - テンプレート内容の入力

### Level2: Combined Components

コンポーネントを複数組み合わせて作るコンポーネント。Dropdown, Breadcrumbs, Pagination, Toaster, Form Controll, Navigationなど。
  
#### table 一覧

- 想定機能
  - 一覧設定
    - 表示項目変更
    - 一括設定
      - 列名変換（システム内で利用できるように項目名に変換する）
        - [ ] 未設定箇所がどこかわかるようにする仕組みが必要
  - 一覧表示
    - 関連情報
    - ステータス表示
    - アクションボタン（テンプレート編集、音声作成）
  - 実行処理（行単位）
    - 詳細表示
    - 削除
  - 実行処理（列単位）
    - 列名称変更
  - 実行処理（一括単位）
    - 一括削除
    - エクスポート
    - インポート
  - その他機能
    - 絞り込み
      - テキストでの絞り込み
      - 分類での絞り込み（ステータス等）
    - 並び替え
    - ページャ
    - 一覧更新
- 用途
  - 時刻表の一覧表示し、選択した時刻表に対するアクションができる

参考

- [freee](https://vibes.freee.co.jp/?path=/docs/lv2-listtable-groupedlisttable--docs)
- [SmartHr](https://story.smarthr-ui.dev/?path=/story/smarthr-patterns_%E3%82%88%E3%81%8F%E3%81%82%E3%82%8B%E3%83%86%E3%83%BC%E3%83%96%E3%83%AB--default)

### Level3: Layout Patterns

画面全体に影響を与えるコンポーネント。Modal, Alertなど。

### WORK

