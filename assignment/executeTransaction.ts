import {
  Connection,
  sendAndConfirmRawTransaction,
} from '@solana/web3.js';
import base58 from 'bs58';
import dotenv from 'dotenv';
import fs from 'fs';
dotenv.config();

const connection = new Connection('http://localhost:8899', 'confirmed');

async function sendTransactionToNetwork () {
  const serializedTx = fs.readFileSync('durable-tx', 'utf-8');
  // 2. Submit the durable transaction.
  // 2.1 Decode the serialized transaction.
  const tx = base58.decode(serializedTx);

  // 2.2 Submit it using the `sendAndConfirmRawTransaction` function.
  const sig = await sendAndConfirmRawTransaction(connection, tx as Buffer, {
    skipPreflight: true,
  });

  console.log(
    'Transaction Signature:',
    `https://explorer.solana.com/tx/${sig}?cluster=custom&customUrl=http%3A%2F%2Flocalhost%3A8899`,
  );
}

sendTransactionToNetwork();