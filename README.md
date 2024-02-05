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

### Global Context

```jsx
// HomeLayout.jsx

import { Outlet, useNavigation } from 'react-router-dom';
import Navbar from '../components/Navbar';

const HomeLayout = () => {
  const value = 'some value';
  return (
    <>
      <Navbar />
      <section className='page'>
        <Outlet context={{ value }} />
      </section>
    </>
  );
};
export default HomeLayout;
```

```jsx
// CocktailCard.jsx
import { useOutletContext } from 'react-router-dom';

const CocktailCard = ({ image, name, id, info, glass }) => {
  const data = useOutletContext();
  console.log(data);
  // 其他代码
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

## Fetch Data

### useEffect Approach

useEffect 在 initial render 后运行，也就是先加载网页，在 initial render 后再 fetch 数据。但是在 React Router 中有 loader 函数在 render 之前给 route 提供数据，相当于 pre-fetching，在加载页面前就 fetch 到数据。

```jsx
// Landing.jsx

const fetchSomething = async () => {
  try {
    const response = await axios.get('/someUrl');
    console.log(response.data);
  } catch (error) {
    console.error(error);
  }
};

useEffect(() => {
  fetchSomething();
}, []);
```

### Loader
> Each route can define a "loader" function to provide data to the route element before it renders.

loader 必须返回什么，（even `null`）,否则会报错。

loader 不是 hook，当 work with React Query 的时候要尤其记住这一点。

```jsx
// Landing.jsx

import { useLoaderData } from 'react-router-dom';

export const loader = async () => {
  return 'something';
};

const Landing = () => {
  const data = useLoaderData();
  console.log(data);
  return <h1>Landing</h1>;
};
export default Landing;
```

```jsx
// App.jsx

import { loader as landingLoader } from './pages/Landing.jsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomeLayout />,
    errorElement:<Error/>
    children: [
      {
        index: true,
        loader: landingLoader,
        element: <Landing />,
      },
      // alternative approach
      {
        index: true,
        loader: () => {
          // do stuff here
        },
        element: <Landing />,

      },
      // rest of the routes
    ],
  },
]);
```

### TheCocktailDB

TheCocktialDB 提供 a bunch of cocktail。

[API](https://www.thecocktaildb.com/)

- Search cocktail by name - `www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita`
- Lookup full cocktail details by id - `www.thecocktaildb.com/api/json/v1/1/lookup.php?i=11007`

### Landing - Fetch Drinks

```jsx
// Landing.jsx

import { useLoaderData } from 'react-router-dom';
import axios from 'axios';

const cocktailSearchUrl =
  'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=';

export const loader = async () => {
  const searchTerm = 'margarita';
  const response = await axios.get(`${cocktailSearchUrl}${searchTerm}`);
  return { drinks: response.data.drinks, searchTerm };
};

const Landing = () => {
  const { searchTerm, drinks } = useLoaderData();
  console.log(drinks);
  return <h1>Landing page</h1>;
};

export default Landing;
```

- empty search term returns some default drinks
- if search term yields not drinks drinks:null