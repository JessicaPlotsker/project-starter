import React from 'react';
import { 
  BrowserRouter as Router, 
  Switch, 
  Route, 
  Link,
  NavLink
} from 'react-router-dom';
import PostsListPage from './pages/PostsListPage';
import PostFormPage from './pages/PostFormPage';
import ShowPostPage from './pages/ShowPostPage';
import AboutUsPage from './pages/AboutUsPage';
import {form} from 'react-bootstrap';

import './App.css';

//we will start from here for now 

// function Navigation(props) {
//   return (
//     <nav className="navbar navbar-expand-sm navbar-dark bg-dark shadow mb-3">
//       <Link className="navbar-brand" to="/">Micro Blog</Link>
//       <ul className="navbar-nav mr-auto">
//         <li className="nav-item">
//           <NavLink className="nav-link" exact to="/posts/new">
//             Create a Micro Post
//           </NavLink>
//         </li>
//         <li className="nav-item">
//           <NavLink className="nav-link" exact to="/about-us">
//             About Us
//           </NavLink>
//         </li>
//       </ul>
//     </nav>
//   );
// }


class App extends React.Component {
  render() {
    return (
      <div>
        <image src="/assets/AniLibLogo.png"/>
        <h1> AniLib </h1>
     


  <form.control type="text" placeholder="Eneter a Title"/>

      <button>
        O
      </button>
      </div>
//         <Router>
//           <Navigation />
//           <div className="container-fluid text-center">
//             <div className="row justify-content-center">
//               <Switch>
//                 <Route path="/posts/new" component={PostFormPage} />
//                 <Route path="/posts/:id" component={ShowPostPage} />
//                 <Route path="/about-us" component={AboutUsPage} />
//                 <Route path="/" component={PostsListPage} />
//               </Switch>
//             </div>
//           </div>
//         </Router>
    );
  }
}


export default App;
