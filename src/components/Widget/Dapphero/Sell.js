
import React, { useState } from 'react';
import clsx from 'clsx';
import styles from './styles.module.scss';

function Sell() {

  const [addressOfToken, setAddressOfToken] = useState("")
  const [tokenId, setTokenId] = useState("")

  const onSetAddressOfToken = (e) => {
    setAddressOfToken(e.target.value)
  }

  const onSetTokenId = (e) => {
    setTokenId(e.target.value)
  }

    return (
      <div>
        <header>
          <div
            data-dh-feature="customContract"
            data-dh-property-method-id="_usF"
            data-dh-property-auto-invoke="false"
            data-dh-property-contract-name="MolScribe"
            data-dh-property-method-name="makeOffer"
          >
            <section>
          <aside className={clsx(styles.aside)}><section>
          <input
            type="text"
            className={clsx(styles.input)}
            placeholder="tokenAddress"
            data-dh-property-method-id="_usF"
            data-dh-property-input-name="tokenAddress"
            onChange={onSetAddressOfToken}
            value={addressOfToken}
          />
          </section>
          <section>
          <input
            type="text"
            className={clsx(styles.input)}
            placeholder="tokenId"
            data-dh-property-method-id="_usF"
            data-dh-property-input-name="tokenId"
            onChange={onSetTokenId}
            value={tokenId}
          />
          </section>
          <section>
          <input
            type="text"
            className={clsx(styles.input)}
            placeholder="buyer"
            data-dh-property-method-id="_usF"
            data-dh-property-input-name="buyer"
          />
          </section>
          <section>
          <input
            type="text"
            className={clsx(styles.input)}
            placeholder="transactionValue"
            data-dh-property-method-id="_usF"
            data-dh-property-input-name="transactionValue"
          />
          </section>
  
          <button className="button button--block button--primary" data-dh-property-invoke="true" data-dh-property-method-id="_usF">
            makeOffer
          </button>
          </aside></section>
          </div>
        </header>
      </div>
    )
}

export default Sell;
