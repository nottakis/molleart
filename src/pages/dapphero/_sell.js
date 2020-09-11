
import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.scss';

function Sell() {
    return (
      <div>
        <header>
          <div
            data-dh-feature="customContract"
            data-dh-property-method-id="8qwX"
            data-dh-property-auto-invoke="false"
            data-dh-property-contract-name="lexArtWrapper"
            data-dh-property-method-name="makeOffer"
          >
            <section>
          <aside><section>
          <input
            type="text"
            className={clsx(styles.button)}
            placeholder="tokenAddress"
            data-dh-property-method-id="8qwX"
            data-dh-property-input-name="tokenAddress"
          />
          </section>
          <section>
          <input
            type="text"
            className="button button--outline button--block button--secondary"
            placeholder="tokenId"
            data-dh-property-method-id="8qwX"
            data-dh-property-input-name="tokenId"
          />
          </section>
          <section>
          <input
            type="text"
            className={clsx(styles.button)}
            placeholder="buyer"
            data-dh-property-method-id="8qwX"
            data-dh-property-input-name="buyer"
          />
          </section>
          <section>
          <input
            type="text"
            className={clsx(styles.button)}
            placeholder="transactionValue"
            data-dh-property-method-id="8qwX"
            data-dh-property-input-name="transactionValue"
          />
          </section>
  
          <button class="button button--block button--primary" data-dh-property-invoke="true" data-dh-property-method-id="8qwX">
            makeOffer
          </button>
          </aside></section>
          </div>
        </header>
      </div>
    )
}

export default Sell;
