import { Network, OpenSeaPort } from 'opensea-js';
import { Order, OrderSide } from 'opensea-js/lib/types';

const buyToken = async (tokenId: string) => {
  const tokenAddress = process.env.NEXT_PUBLIC_SNARK_TOKEN_ADDRESS || '';
console.log(tokenAddress)
console.log(tokenId)
  const provider = (window as any).ethereum;

  if (!provider) {
    throw { code: -1 }; // means metamask is not supported in this browser.
  }

  const seaport = new OpenSeaPort(provider, {
    networkName: Network.Rinkeby,
  });
  console.log('seaport', seaport);

  const accounts = await (window as any).ethereum.request({
    method: 'eth_requestAccounts',
  });

  const account = accounts[0];
  console.log(account);

  const order: Order = await seaport.api.getOrder({
    side: OrderSide.Sell,
    asset_contract_address: tokenAddress,
    token_id: 4,
  });
  console.log('order', order);

  const isOrderFulfillable = await seaport.isOrderFulfillable({
    order,
    accountAddress: String(account).toLowerCase(),
  });
  console.log('token permalink', order.asset?.openseaLink);
  console.log('isOrderFulfillable', isOrderFulfillable);

  const transactionHash = await seaport.fulfillOrder({
    order,
    accountAddress: String(account).toLowerCase(),
  });
  console.log('transactionHash', transactionHash);
};

export default buyToken;
