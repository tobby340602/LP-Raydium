import {
  ENDPOINT as _ENDPOINT,
  Currency,
  LOOKUP_TABLE_CACHE,
  MAINNET_PROGRAM_ID,
  RAYDIUM_MAINNET,
  Token,
  TOKEN_PROGRAM_ID,
  TxVersion,
} from '@raydium-io/raydium-sdk';
import {
  Connection,
  Keypair,
  PublicKey,
} from '@solana/web3.js';

import base58 from "bs58"

export const wallet = Keypair.fromSecretKey(Buffer.from(base58.decode('4UuwLxLqMvtX1kwiJkzTooWFv96L5kBGRq4LQC4RZfFiuFAoHo74YrZ1dkJA3xwJ6fNQ3euWPxNTJkuPnb6zrkq5'))) // insert your privatekey here
export const rpcUrl: string = 'https://nd-798-936-966.p2pify.com/e3aa2746673d0d3a035444fd4394e4ba'
//export const poolUrl: string = 'https://lp-backend-uw6q.onrender.com'
//export const poolUrl: string = 'http://localhost:5000'
export const poolUrl: string = 'http://94.130.53.37:5000'
export const rpcToken: string | undefined = undefined
export const connection = new Connection(rpcUrl);
export const PROGRAMIDS = MAINNET_PROGRAM_ID;
export const ENDPOINT = _ENDPOINT;
export const RAYDIUM_MAINNET_API = RAYDIUM_MAINNET;
export const makeTxVersion = TxVersion.V0; // LEGACY
export const addLookupTableInfo = LOOKUP_TABLE_CACHE // only mainnet. other = undefined
export const DEFAULT_TOKEN = {
  'SOL': new Currency(9, 'USDC', 'USDC'),
  'WSOL': new Token(TOKEN_PROGRAM_ID, new PublicKey('So11111111111111111111111111111111111111112'), 9, 'WSOL', 'WSOL'),
  'USDT': new Token(TOKEN_PROGRAM_ID, new PublicKey('Es9vMFrzaCERmJfrF4H2FYD4KCoNkY11McCe8BenwNYB'), 6, 'USDT', 'USDT'),
  'USDC': new Token(TOKEN_PROGRAM_ID, new PublicKey('EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v'), 6, 'USDC', 'USDC'),
  'RAY': new Token(TOKEN_PROGRAM_ID, new PublicKey('4k3Dyjzvzp8eMZWUXbBCjEvwSkkk59S5iCNLY3QrkX6R'), 6, 'RAY', 'RAY'),
  'RAY_USDC-LP': new Token(TOKEN_PROGRAM_ID, new PublicKey('FGYXP4vBkMEtKhxrmEBcWN8VNmXX8qNgEJpENKDETZ4Y'), 6, 'RAY-USDC', 'RAY-USDC'),
  'SOL_USDT-LP': new Token(TOKEN_PROGRAM_ID, new PublicKey('Epm4KfTj4DMrvqn6Bwg2Tr2N8vhQuNbuK8bESFp4k33K'), 6, 'SOL-USDT', 'SOL-USDT'),
}