# test-goss

## 目的

- goss を試す
- goss バイナリは ansible で配る
- テスト対象の VM は vagrant + virtualbox で作成する
- 今回は「ansible で nginx サーバを構築 →goss で単体テスト」の流れを試す

## 環境

- centos7
- virtual box
- mac

## ディレクトリ構成

概説

- vagrant 設定は `./vagrant` 配下に用意する
- ansible 設定は `./ansible` 配下に用意する

構成

- 最終的なディレクトリ構成

  ```bash
  .
  ├── README.md
  ├── ansible # ansible関連の設定を格納
  │   ├── inventories
  │   │   └── hosts
  │   ├── roles
  │   │   ├── goss
  │   │   │   ├── files
  │   │   │   │   ├── goss
  │   │   │   │   └── goss.yaml
  │   │   │   └── tasks
  │   │   │       └── main.yml
  │   │   └── yum
  │   │       ├── files
  │   │       │   └── nginx.repo
  │   │       └── tasks
  │   │           └── main.yml
  │   └── site.yml
  └── vagrant # vagrant関連の設定を格納
      └── test-centos7
          ├── .vagrant # vagrantコマンドで自動生成 (サブディレクトリは省略)
          └── Vagrantfile # vagrantコマンドで自動生成
  ```

## 手順

### 諸々のインストール

- goss を github から取得する

  ```bash
  curl -L https://github.com/aelsabbahy/goss/releases/download/v0.3.9/goss-linux-amd64 -o goss
  ```

  バイナリ形式ですぐに実行可能なファイルとして取得される。
  ansible で配るため、のちの工程で`./ansible/roles/goss/files`に格納する。

- ansible のインストール

  ```terminal
  brew install ansible
  ```

- virtual box

  ```terminal
  brew install --cask virtualbox
  ```

- vagrant

  ```terminal
  brew install --cask vagrant
  ```

### vagrant を利用し、virtual box 上に centos7 の VM を作成する

vagrant + virtualboxでのlinux環境準備は、下記を参照

<https://github.com/vnzzzz/env-linux-vm>

## ansible を利用して goss を実行

- inventoriesを設定する

  ホスト名、SSH鍵（vagrantにより自動作成）などを設定する

- ansible playbook を実行

  ```bash
  cd ansible
  ansible-playbook -i inventories/hosts site.yml
  ```

  設定が正しければ、下記のように ansible の実行結果が表示され、その中で goss の実行結果が出力される。

  ```bash
  PLAY [target-servers] **********************************************************************************************************

  TASK [Gathering Facts] *********************************************************************************************************
  ok: [192.168.56.10]

  TASK [yum : add nginx repo] ****************************************************************************************************
  ok: [192.168.56.10]

  TASK [yum : install nginx] *****************************************************************************************************
  ok: [192.168.56.10]

  TASK [yum : restart & enable nginx] ********************************************************************************************
  changed: [192.168.56.10]

  TASK [goss : Copy goss to remote host] *****************************************************************************************
  changed: [192.168.56.10] => (item={'file': 'files/goss', 'mode': '751'})
  changed: [192.168.56.10] => (item={'file': 'files/goss.yaml', 'mode': '666'})

  TASK [goss : Exec Goss Validate] ***********************************************************************************************
  changed: [192.168.56.10]

  TASK [goss : Goss results] *****************************************************************************************************
  ok: [192.168.56.10] => {
    "msg": {
      "changed": true,
      "cmd": [
        "./goss",
        "validate",
        "--format",
        "documentation"
      ],
      "delta": "0:00:00.047702",
      "end": "2022-02-27 13:05:08.362238",
      "failed": false,
      "msg": "",
      "rc": 0,
      "start": "2022-02-27 13:05:08.314536",
      "stderr": "",
      "stderr_lines": [],
      "stdout": "Title: nginx が起動していること\nProcess: nginx: running: matches expectation: [true]\nTitle: 80 ポートをリッスンしていること\nPort: tcp:80: listening: matches expectation: [true]\nTitle: nginxの設定ファイルが存在すること\nFile: /etc/nginx/nginx.conf: exists: matches expectation: [true]\nTitle: nginx 1.20.2 がインストールされていること\nPackage: nginx: installed: matches expectation: [true]\nPackage: nginx: version: matches expectation: [[\"1.20.2\"]]\nTitle: nginx がサービスに登録されていること\nService: nginx: enabled: matches expectation: [true]\nService: nginx: running: matches expectation: [true]\nTitle: httpで疎通できること\nHTTP: http://localhost: status: matches expectation: [200]\n\n\nTotal Duration: 0.043s\nCount: 8, Failed: 0, Skipped: 0",
      "stdout_lines": [
        "Title: nginx が起動していること",
        "Process: nginx: running: matches expectation: [true]",
        "Title: 80 ポートをリッスンしていること",
        "Port: tcp:80: listening: matches expectation: [true]",
        "Title: nginxの設定ファイルが存在すること",
        "File: /etc/nginx/nginx.conf: exists: matches expectation: [true]",
        "Title: nginx 1.20.2 がインストールされていること",
        "Package: nginx: installed: matches expectation: [true]",
        "Package: nginx: version: matches expectation: [[\"1.20.2\"]]",
        "Title: nginx がサービスに登録されていること",
        "Service: nginx: enabled: matches expectation: [true]",
        "Service: nginx: running: matches expectation: [true]",
        "Title: httpで疎通できること",
        "HTTP: http://localhost: status: matches expectation: [200]",
        "",
        "",
        "Total Duration: 0.043s",
        "Count: 8, Failed: 0, Skipped: 0"
      ]
    }
  }

  TASK [goss : Delete Goss] ******************************************************************************************************
  changed: [192.168.56.10] => (item=/root/goss)
  changed: [192.168.56.10] => (item=/root/goss.yaml)

  PLAY RECAP *********************************************************************************************************************
  192.168.56.10              : ok=8    changed=4    unreachable=0    failed=0    skipped=0    rescued=0    ignored=0
  ```

## 備考

- 今回はローカルの mac で ansible を実行したが、ansible コントロールノードも vagrant で構築しても良かったかもしれない
- 次は molcule と組み合わせてみたい
