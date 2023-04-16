# flowl-ui

## Memo

- 構築用サーバの起動

  port 4000 で起動するように`package.json`を書き換えているので、下記を実行後にブラウザで[localhost:4000](http://localhost:4000)を開く

  ```bash
  npm run start
  ```

  hot reload で、ソースを編集後に`ctrl+S`で自動反映される

- gitの設定
  - containerの中からgit push
    - [Sharing Git credentials with your container](https://code.visualstudio.com/docs/remote/containers#_sharing-git-credentials-with-your-container)

  - 新しいbranch作成

    ```bash
    git checkout -b (新しいブランチ名) (元にするブランチ名)
    ```

## Todo

- API認証

## Reference

- Dev environment
  - [【React】Docker Composeで開発環境を構築](https://zenn.dev/chida/articles/51ba4ec06a0724)
  - [【完全版】React + FastAPIで開発するモダンなwebアプリ](https://zenn.dev/sawao/articles/15a9cf0e3360a7)
- React + typescript
  - [日本一わかりやすいtypescript講座](https://www.youtube.com/playlist?list=PLX8Rsrpnn3IW0REXnTWQp79mxCvHkIrad)
  - [【初心者】React × TypeScript 基本の型定義](https://zenn.dev/ogakuzuko/articles/react-typescript-for-beginner)
  - [propsとstateのイメージをつかむ【はじめてのReact】](https://qiita.com/rio_threehouse/items/7632f5a593cf218b9504)
  - [React + TypeScriptでpropsと型を便利に扱うTips集](https://zenn.dev/so_nishimura/articles/e9afde3b7dc779)
  - [APIをリクエストするCustom HooksをTypeScriptで書いてみよう](https://zenn.dev/shikky0331/articles/96fe7208a6efb57f5b7e)
- Auth
  - [Reactでの認証時にJWTをCookieに設定する方法](https://zenn.dev/marokanatani/articles/d0777a34641d22)
  - [react-cookieでcookie管理をする。](https://zenn.dev/iroristudio/articles/0bc4729fefbc41)
  - [[React]~Admin画面5:ログイン認証とログアウトの実装 ~](https://selfnote.work/20210726/programming/react-next-admin-5/)
  - [React:React Router v6 で 認証されていないユーザーや権限がないユーザーをリダイレクトする](https://zenn.dev/longbridge/articles/61b05d8bdb014d)
