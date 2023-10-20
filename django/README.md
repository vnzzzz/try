# djangoのチュートリアル用

## 目的

- djangoについてなんとなく理解する
  - [チュートリアル](https://docs.djangoproject.com/ja/4.0/contents/)をなぞるための環境を準備
- port管理が面倒なのでtraefikの裏で動かす
  - traefikの構築については[こちら](https://github.com/vnzzzz/docker-mgr)を参照

## 初期構築手順

1. `mysite`という名前でプロジェクトを作成

    ```bash
    docker-compose run django-web django-admin startproject mysite
    ```

1. DBの接続設定を`setting.py`で編集
    docker-compose.ymlで作成したpostgresにつながるように編集する。

    ```bash
    DATABASES = {
        'default': {
            'ENGINE': 'django.db.backends.postgresql',
            'NAME': 'postgres',
            'USER': 'postgres',
            'PASSWORD': 'postgres',
            'HOST': 'django-db',
            'PORT': 5432,
        }
    }
    ```

1. コンテナを起動する

    ```bash
    docker-compose up -d --build
    ```

1. djangoのバージョン確認

    ```bash
    docker-compose exec django-web python -m django --version  
    ```

## 初めてのアプリ

1. pollsディレクトリの作成

    ```bash
    docker-compose exec -w /code/mysite django-web python manage.py startapp polls
    ```

1. 初期migrationの実施

    ```bash
    docker-compose exec -w /code/mysite django-web python manage.py migrate
    ```

1. `polls/models.py`でpollsのモデル設定

1. `mysite/settings.py`でpollsをAppにインストール

1. migration用のファイルの作成

    ```bash
    docker-compose exec -w /code/mysite django-web python manage.py makemigrations polls
    ```

1. migrationで実行されるSQLの確認

    ```bash
    docker-compose exec -w /code/mysite django-web python manage.py sqlmigrate polls 0001
    ```

1. migrationの実施

    ```bash
    docker-compose exec -w /code/mysite django-web python manage.py migrate
    ```

1. database APIの実行

    ```bash
    docker-compose exec -w /code/mysite django-web python manage.py shell
    ```

## 管理ユーザーの追加

1. 管理ユーザーの作成

    ```bash
    docker-compose exec -w /code/mysite django-web python manage.py createsuperuser
    ```

## テストの実行

1. `polls/test.py`ファイルを編集する

1. テストを実行する

    ```bash
    docker-compose exec -w /code/mysite django-web python manage.py test polls
    ```

## API経由でのテストクライアントの利用

1. database APIの実行

    ```bash
    docker-compose exec -w /code/mysite django-web python manage.py shell
    ```

1. テスト環境のセットアップ

    ```bash
    from django.test.utils import setup_test_environment
    setup_test_environment()
    ```

1. テストクラスのインポート

    ```bash
    from django.test import Client
    client = Client()
    ```

1. テスト実行

    ```bash
    response = client.get('/')
    response.status_code

    from django.urls import reverse
    response = client.get(reverse('polls:index'))
    response.status_code
    response.content
    response.context['latest_question_list']
    ```
