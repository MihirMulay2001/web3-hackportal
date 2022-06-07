export const connectWalletHandler = async (setCurrentAccount) => {
      const {ethereum} = window;
      if(!ethereum){
        alert("Allow website to access metamask wallet")
      }else{
        try{
          const accounts = await ethereum.request({method: 'eth_requestAccounts'})
          setCurrentAccount(accounts[0])
        }catch(error){
          console.log(error);
        }
      }
   }