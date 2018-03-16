# setup

## インストール
```
bundle install
```

## 必要なら yarnのupgrade
```
brew upgrade yarn
```

## フロント側の諸々install
```
yarn install
```

## フロント側のビルド
```
bundle exec bin/webpack
```

## DB create
```
bundle exec rake db:create
```

## DB migrate
```
bundle exec rake db:migrate
```

## テストデータ挿入
```
rake db:seed
```

## スタート
```
yarn start
```

```
http://localhost:3000/
```

# 参考

- ruby-on-rails
- React
- Redux
- [GraphQL](http://graphql.org/learn/)
- [Apollo Client](https://www.apollographql.com/docs/react/)
- [Material-UI](http://www.material-ui.com/#/)


# HOCについて
- [Higher-Order Components - React](https://reactjs.org/docs/higher-order-components.html)
- [React HOC (Higher Order Component) Example](https://gist.github.com/Restuta/07005e844a1d46eca678)
- [React の Higher-order Components の利用方法 - Qiita](https://qiita.com/numanomanu/items/2b66d8b2887d44f857dc)
