
import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.scss';

function Buy() {
    return (
      <div>
        <header>
          <div
            data-dh-feature="customContract"
            data-dh-property-method-id="8I_L"
            data-dh-property-auto-invoke="false"
            data-dh-property-contract-name="lexArtWrapper"
            data-dh-property-method-name="acceptOffer"
          >
            <section>
          <aside><section>
          <input
            type="text"
            className={clsx(styles.input)}
            placeholder="tokenAddress"
            data-dh-property-method-id="8I_L"
            data-dh-property-input-name="tokenAddress"
          />
          </section>
          <section>
          <input
            type="text"
            className={clsx(styles.input)}
            placeholder="tokenId"
            data-dh-property-method-id="8I_L"
            data-dh-property-input-name="tokenId"
          />
          </section>
          <section>
          <input
            type="text"
            className={clsx(styles.input)}
            placeholder="EthValue"
            data-dh-property-method-id="8I_L"
            data-dh-property-input-name="EthValue"
          />
          </section>
  
          <button className="button button--block button--primary" data-dh-property-invoke="true" data-dh-property-method-id="8I_L">
          acceptOffer
          </button>
          </aside></section>
          </div>
        </header>
      </div>
    )
}

export default Buy;
