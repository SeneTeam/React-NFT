/* eslint-disable @typescript-eslint/no-unused-vars */
import { useEffect, useState } from "react";
import styled from "styled-components";
import { Snackbar } from "@material-ui/core";
import Alert from "@material-ui/lab/Alert";

import * as anchor from "@project-serum/anchor";

import { LAMPORTS_PER_SOL, PublicKey } from "@solana/web3.js";

import { useAnchorWallet } from "@solana/wallet-adapter-react";
import { WalletDialogButton } from "@solana/wallet-adapter-material-ui";
import { GatewayProvider } from "@civic/solana-gateway-react";
import { MintButton } from "./MintButton";

import {
  CandyMachine,
  awaitTransactionSignatureConfirmation,
  getCandyMachineState,
  mintOneToken,
  shortenAddress,
  CANDY_MACHINE_PROGRAM,
} from "./candy-machine";

import { AlertState } from "./utils";

const ConnectButton = styled(WalletDialogButton)``;

const MintContainer = styled.div`
  backgroundColor: "black",
  fontSize: "20px",
  font-family: "Holtwood One SC, serif;
  minWidth: "150px",
  color: "white",
  justifyContent: "center",`; // add your styles here

export interface HomeProps {
  candyMachineId: anchor.web3.PublicKey;
  connection: anchor.web3.Connection;
  txTimeout: number;
  rpcHost: string;
}

const Home = (props: HomeProps) => {
  const [balance, setBalance] = useState<number>();
  const [isMinting, setIsMinting] = useState(false); // true when user got to press MINT
  const [isActive, setIsActive] = useState(false); // true when countdown completes

  const [itemsAvailable, setItemsAvailable] = useState(0);
  const [itemsRedeemed, setItemsRedeemed] = useState(0);
  const [itemsRemaining, setItemsRemaining] = useState(0);

  const [alertState, setAlertState] = useState<AlertState>({
    open: false,
    message: "",
    severity: undefined,
  });

  const wallet = useAnchorWallet();
  const [candyMachine, setCandyMachine] = useState<CandyMachine>();

  const rpcUrl = props.rpcHost;

  const refreshCandyMachineState = () => {
    (async () => {
      console.log("refresh cm");
      if (!wallet) return;

      const cndy = await getCandyMachineState(
        wallet as anchor.Wallet,
        props.candyMachineId,
        props.connection
      );

      console.log(cndy);
      setCandyMachine(cndy);

      setItemsAvailable(cndy.state.itemsAvailable);
      setItemsRemaining(cndy.state.itemsRemaining);
      setItemsRedeemed(cndy.state.itemsRedeemed);
      setIsActive(cndy.state.isActive);
    })();
  };

  const onMint = async () => {
    try {
      setIsMinting(true);
      document.getElementById("#identity")?.click();
      if (wallet && candyMachine?.program && wallet.publicKey) {
        const mintTxId = (
          await mintOneToken(candyMachine, wallet.publicKey)
        )[0];

        let status: any = { err: true };
        if (mintTxId) {
          status = await awaitTransactionSignatureConfirmation(
            mintTxId,
            props.txTimeout,
            props.connection,
            "singleGossip",
            true
          );
        }

        if (!status?.err) {
          setAlertState({
            open: true,
            message: "Congratulations! Mint succeeded!",
            severity: "success",
          });
        } else {
          setAlertState({
            open: true,
            message: "Mint failed! Please try again!",
            severity: "error",
          });
        }
      }
    } catch (error: any) {
      // TODO: blech:
      let message = error.msg || "Minting failed! Please try again!";
      if (!error.msg) {
        if (!error.message) {
          message = "Transaction Timeout! Please try again.";
        } else if (error.message.indexOf("0x138")) {
        } else if (error.message.indexOf("0x137")) {
          message = `SOLD OUT!`;
        } else if (error.message.indexOf("0x135")) {
          message = `Insufficient funds to mint. Please fund your wallet.`;
        }
      } else {
        if (error.code === 311) {
          message = `SOLD OUT!`;
        } else if (error.code === 312) {
          message = `Minting period hasn't started yet.`;
        }
      }

      setAlertState({
        open: true,
        message,
        severity: "error",
      });
    } finally {
      if (wallet) {
        const balance = await props.connection.getBalance(wallet.publicKey);
        setBalance(balance / LAMPORTS_PER_SOL);
      }
      setIsMinting(false);
      refreshCandyMachineState();
    }
  };

  useEffect(() => {
    (async () => {
      if (wallet) {
        const balance = await props.connection.getBalance(wallet.publicKey);
        setBalance(balance / LAMPORTS_PER_SOL);
      }
    })();
  }, [wallet, props.connection]);

  useEffect(refreshCandyMachineState, [
    wallet,
    props.candyMachineId,
    props.connection,
  ]);

  return (
    <main>
    {/* {wallet && (
      <p>Wallet {shortenAddress(wallet.publicKey.toBase58() || "")}</p>
    )} */}

    {/* {wallet && <p>Balance: {(balance || 0).toLocaleString()} SOL</p>} */}

    {wallet && (
      <h3 style={{ textShadow: "1px 1px #0c0c0c" }}>
        {itemsRedeemed} / {itemsAvailable} Minted
      </h3>
    )}
    {
      <MintContainer>
        {!wallet ? (
          <ConnectButton
          style={{
            backgroundColor: "#2B0B99",
            fontSize: "20px",
            fontFamily: "Exo, sans-serif",
            minWidth: "150px",
            justifyContent: "center",
          }}
        >
          Connect Wallet
        </ConnectButton>
        ) : isActive &&
          candyMachine?.state.gatekeeper &&
          wallet.publicKey &&
          wallet.signTransaction ? (
          <GatewayProvider
            wallet={{
              publicKey:
                wallet.publicKey || new PublicKey(CANDY_MACHINE_PROGRAM),
              //@ts-ignore
              signTransaction: wallet.signTransaction,
            }}
            // // Replace with following when added
            // gatekeeperNetwork={candyMachine.state.gatekeeper_network}
            gatekeeperNetwork={
              candyMachine?.state?.gatekeeper?.gatekeeperNetwork
            } // This is the ignite (captcha) network
            /// Don't need this for mainnet
            
          >
            <MintButton
              candyMachine={candyMachine}
              isMinting={isMinting}
              onMint={onMint}
            />
          </GatewayProvider>
        ) : (
          <MintButton
            candyMachine={candyMachine}
            isMinting={isMinting}
            onMint={onMint}
          />
        )}
      </MintContainer>
    }

    <Snackbar
      open={alertState.open}
      autoHideDuration={6000}
      onClose={() => setAlertState({ ...alertState, open: false })}
    >
      <Alert
        onClose={() => setAlertState({ ...alertState, open: false })}
        severity={alertState.severity}
      >
        {alertState.message}
      </Alert>
    </Snackbar>
  </main>
  );
};

export default Home;
