# MixMaster

## SPA

SPA 是单页面应用程序（Single-Page Application）的缩写，是一种无需重新载入整个页面即可动态更新内容的网络应用程序。它通过加载初始 HTML、CSS 和 JavaScript 资源，然后在用户与应用程序交互时动态获取数据并更新 DOM 来实现这一目标。

## React Router

> React Router DOM Library allows us to create multi-page experiences within the single-page application.

> It facilitates navigation between different components and manages the rendering of specific content based on the current URL.

[React Router](https://reactrouter.com/en/main) 是 React 应用程序中用于处理路由和导航的 JavaScript 库。它提供了一种声明式方法来定义应用程序的路由，并根据当前 URL 呈现不同的组件。通过将 URL 映射到特定组件并管理历史记录和 URL 变更，React Router 允许开发者在 SPA 中创建流畅的客户端导航体验。

### Install

```sh
# npm i react-router-dom@6.11.2
npm i react-router-dom
```

### Basic Router

```jsx
// App.jsx

import { createBrowserRouter, RouterProvider } from 'react-router-dom';

const router = createBrowserRouter([
  {
    path: '/',
    element: <h2>home page</h2>,
  },
  {
    path: '/about',
    element: (
      <div>
        <h2>about page</h2>
      </div>
    ),
  },
]);
const App = () => {
  return <RouterProvider router={router} />;
};
export default App;
```

### Setup Pages

> pages are components
1. create src/pages
2. create About, Cocktail, Error, HomeLayout, Landing, Newsletter, index.js
3. export from `index.js`
    ```js
    // pages/index.js

    export { default as Landing } from './Landing';
    export { default as About } from './About';
    export { default as Cocktail } from './Cocktail';
    export { default as Newsletter } from './Newsletter';
    export { default as HomeLayout } from './HomeLayout';
    export { default as Error } from './Error';
    ```
4. import in `App.jsx`
    ```jsx
    import {
      HomeLayout,
      About,
      Landing,
      Error,
      Newsletter,
      Cocktail,
    } from './pages';
    ```

### Link Component

> We are not going back to the server to request a resource. All the routing effectively is happening on the frontend

```jsx
// HomeLayout.jsx

import { Link } from 'react-router-dom';
const HomeLayout = () => {
  return (
    <div>
      <h1>HomeLayout</h1>
      <Link to='/about'>About</Link>
    </div>
  );
};
export default HomeLayout;
```

```jsx
// About.jsx

import { Link } from 'react-router-dom';

const About = () => {
  return (
    <div>
      <h1>About</h1>
      <Link to='/'>Back Home</Link>
    </div>
  );
};
export default About;
```

### Nested Pages

应用场景：每个页面都需要 Navbar 和 Footer

```jsx
// App.jsx

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomeLayout />,
    children: [
      {
        path: 'landing',
        element: <Landing />,
      },
      {
        path: 'cocktail',
        element: <Cocktail />,
      },
      {
        path: 'newsletter',
        element: <Newsletter />,
      },
      {
        path: 'about',
        element: <About />,
      },
    ],
  },
]);
```

```jsx
// HomeLayout.jsx

import { Link, Outlet } from 'react-router-dom';
const HomeLayout = () => {
  return (
    <div>
      <nav>navbar</nav>
      <Outlet />
    </div>
  );
};
export default HomeLayout;
```

```jsx
{
  index:true
  element: <Landing />,
}
```

## Styled Components

> CSS in JavaScript, no name collisions

- [Styled Components Docs](https://styled-components.com/)
- [Styled Components Course](https://www.udemy.com/course/styled-components-tutorial-and-project-course/?referralCode=9DABB172FCB2625B663F)

### Install

```sh
npm install styled-components
```

### Setup

```jsx
import styled from 'styled-components';

const El = styled.el`
  // styles go here
`;
```

```jsx
import styled from 'styled-components';
const StyledBtn = styled.button`
  background: red;
  color: white;
  font-size: 2rem;
  padding: 1rem;
`;
```

### Alternative Setup

style entire react component

```jsx
const Wrapper = styled.el``;

const Component = () => {
  return (
    <Wrapper>
      <h1> Component</h1>
    </Wrapper>
  );
};
```

### VS Code Extension

- vscode-styled-components