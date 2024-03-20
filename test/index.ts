import {
  Connection,
  Keypair,
  LAMPORTS_PER_SOL,
  NONCE_ACCOUNT_LENGTH,
  NonceAccount,
  PublicKey,
  sendAndConfirmRawTransaction,
  sendAndConfirmTransaction,
  SystemProgram,
  Transaction,
} from '@solana/web3.js';
import { initializeKeypair, makeKeypairs } from '@solana-developers/helpers';
import base58 from 'bs58';
import assert from 'assert';
import dotenv from 'dotenv';
dotenv.config();

describe('transfer-hook', () => {
  const connection = new Connection('http://localhost:8899', 'confirmed');

  it('Creates a durable transaction and submits it', async () => {});

  it('Fails if the nonce has advanced', async () => {});

  it('Advances the nonce account even if the transaction fails', async () => {});

  it('The nonce account will not advance if the transaction fails because the nonce auth did not sign the transaction', async () => {});

  it('Submits after changing the nonce auth to an already signed address', async () => {});
});
