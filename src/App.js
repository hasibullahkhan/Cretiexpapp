import React from 'react'
import CertificateEntry from "./Component/CardCertificate/Certificate"
import ItemMasterEntry from "./Component/CardCertificate/ItemMaster"

function App() {
  return (
    <div  >

      <CertificateEntry head1="Certificate Entry" lbl1="Certificate# " lbl2="Vender#" lbl3="Item#" lbl4="Amount" lbl5="Total Notification" lbl6="No of Notification Send" />
      {<br />}
      {<br />}
      <ItemMasterEntry head1="Item Master Entry" lbl1="Item# " lbl2="Name#" lbl3="Description#" />
      <div>
        {<br />}
       <ItemMasterEntry head1="Vender Master Entry" lbl1="Vender# " lbl2="Name#" lbl3="Description#" /> 
      </div>
    </div>
  )
}

export default App

