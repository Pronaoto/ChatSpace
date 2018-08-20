# README

This README would normally document whatever steps are necessary to get the
application up and running.

Things you may want to cover:

* Ruby version

* System dependencies

* Configuration

* Database creation

* Database initialization

* How to run the test suite

* Services (job queues, cache servers, search engines, etc.)

* Deployment instructions

* ...

##membersテーブル
|column|type|Option|
|------|----|------|
|user_id|interger|null: false, foreign_key: true|
|group_id|integer|null: false, foreign_key: true|

### Association
- belongs_to :group
- belongs_to :user

##messagesテーブル
|column|type|Option|
|------|----|------|
|user_id|interger|null: false, foreign_key: true|
|body|text|null: false|
|image|string|null: false|
|group_id|integer|null: false, foreign_key: true|

###Association
- has_and_belongs_to_many :users
- has_and_belongs_to_many :groups

##usersテーブル
|column|type|Option|
|------|----|------|
|user_id|interger|null: false, foreign_key: true|
|user_name|string|null: false|
|email|integer|null: false|
|own_group_id|integer|null: false, foreign_key: true|
|group_id|integer|null: false, foreign_key: true|

###Association
-has_many :messages
-has_and_belongs_to_many :groups

##groupsテーブル
|column|type|Option|
|------|----|------|
|group_id|integer|null: false, foreign_key: true|
|user_id|interger|null: false, foreign_key: true|

###Association
-belongs_to :user
-has_many :messages
-has_many :members









