# linux

## 目的

- <https://github.com/Azure-Samples/jp-azureopenai-samples/blob/main/5.internal-document-search/README.md>
- 上記実行用の Linux VM (ubuntu) を virtualbox + vagrant で作成する

## 環境

- mac
- virtual box + vagrant
- linux

## ディレクトリ構成

概説

- vagrant 設定は `./vagrant` 配下に用意する

## command

```bash
# create nodes
vagrant up

# delete node
vagrant destory

# ssh
vagrant ssh aoai-client
```

## 構築メモ

```bash
# clone
git clone https://github.com/Azure-Samples/jp-azureopenai-samples.git

cd jp-azureopenai-samples/5.internal-document-search/

# azure login
azd auth login --use-device-code

# init
azd init

az login

az account set -s ef34163b-ba3d-4c41-bc48-4c92a0c92ab6

az ad user show --id vnz.self2_gmail.com#EXT#@vnzself2gmail.onmicrosoft.com -o tsv --query id

export AZURE_PRINCIPAL_ID="3c1e4aa0-f1c6-4928-a610-8028933ab4f9"

azd up
```
