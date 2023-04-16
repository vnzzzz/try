# Reactレポジトリのテスト実行環境

## 環境準備手順

1. プロジェクト作成

    ```bash
    git clone [URL]

    or 

    npx create-react-app [PROJECT NAME] --template typescript
    ```

1. package.jsonの書き換え

    4000番ポートで起動するように置き換え
    "start": "PORT=4000 react-scripts start"

1. react app 起動

    ```bash
    cd [project directory]
    npm run start
    ```

## リポジトリのリスト

- <https://github.com/OskarAsplin/react-ts-redux-oauth2-template>
