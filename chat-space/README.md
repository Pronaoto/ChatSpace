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



## members table
|column|type|Options|
|------|----|-------|
|user_id|integer|null: false|
|group_id|integer|null: false|

### Association
- belongs_to :user
- belongs_to :group


## messages table
|column|type|Options|
|------|----|-------|
|user_id|integer|null: false|
|body|text|-------|
|image|string|-------|
|group_id|integer|null: false|

### Association
- belongs_to :user
- belongs_to :group

## users table
|column|type|Options|
|------|----|-------|
|user_id|integer|null: false|
|user_name|string|null: false|
|email|integer|null: false|
|own_group_id|integer|null: false|
|group_id|integer|null: false|

### Association
- has_many :groups, through: :members
- has_many :messages
- has_many :menmbers


## groups table
|column|type|Options|
|------|----|-------|
|user_id|integer|null: false|
|group_id|integer|null: false|


### Association
- has_many :members
- has_many :users, through: :members
- belongs_to :user
- has_many :messages










