# to create React App project

- npx create-react-app blog-app
- cd blog-app
- npm install @babel/plugin-proposal-private-property-in-object -D [optional]
- npm start

# to install bootstrap

- npm install bootstrap
- import "bootstrap/dist/css/bootstrap.min.css" in index.js

# React v16.8 -> Hooks introduced

- Maintain the state in functional comp also

- Stateful : comp have its own state
- Stateless : comp does not have its own state

# Class life cycle methods -

- componentDidMount : useEffect(cb, [])
- componentDidUpdate : useEffect(cb, [Dependency])
- componentWillUnmount : useEffect(cb => CleanupFn, [Dependency])
