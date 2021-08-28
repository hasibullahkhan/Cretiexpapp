import React from 'react';
import CertificateEntry from "./Component/CardCertificate/Certificate";
import ItemMasterEntry from "./Component/CardCertificate/ItemMaster";
import TaskList from './Component/taskList';
import Menu from "./Component/Menu";
import Department from './Component/Department';
import PostList from "./PostList"
import PostForm from "./PostForm"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";


function App() {
  return (
    <Router>
      <div  >
        <Menu />
        <Switch>
          <Route path="/Certificate" exact component={Certificate} />
          <Route path="/ItemMaster" component={ItemMaster} />
          <Route path="/VenderMaster" component={VenderMaster} />
          <Route path="/TaskList" component={TaskList} />
          <Route path="/Department" component={Department} />
          <Route path="/PostList" component={PostListF} />
        </Switch>
      </div>
    </Router>
  )
}

export default App

function Certificate() {
  return (
    <CertificateEntry head1="Certificate Entry" lbl1="Certificate# " lbl2="Vender#" lbl3="Item#" lbl4="Amount" lbl5="Total Notification" lbl6="No of Notification Send" />
  );
}

function ItemMaster() {
  return (
    <ItemMasterEntry head1="Item Master Entry" lbl1="Item# " lbl2="Name#" lbl3="Description#" />
  )
}

function VenderMaster() {
  return (
    <ItemMasterEntry head1="Vender Master Entry" lbl1="Vender# " lbl2="Name#" lbl3="Description#" />
  )
}
function PostListF() {
  return (
    <div>
      {/* <PostList /> */}
      <PostForm />
    </div>
  )
}



