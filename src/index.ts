import { clusterApiUrl, Connection } from '@solana/web3.js';

async function main() {
  const connection = new Connection(clusterApiUrl('devnet'), 'finalized');
}

main()
  .then(() => {
    console.log('Finished successfully');
    process.exit(0);
  })
  .catch((error) => {
    console.log(error);
    process.exit(1);
  });
