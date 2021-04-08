import React, { Children } from 'react'
import BitcoinPage from '../pages/btc-page'
import Link from "next/link";
import { url } from 'inspector';
import EthereumPage from '../pages/eth-page';
import { useRouter } from 'next/router'

// const router = useRouter();

const DisplayPage = () => {
       const router = useRouter()
       
       const test = '/btc-page'
       console.log(router.pathname)

       if(test == '/btc-page')
       {
       return(

              <BitcoinPage></BitcoinPage>

       )
       }
       // }


       // return (
       //        if(cool == '/btc-page')
       // )

       
}


export default DisplayPage
