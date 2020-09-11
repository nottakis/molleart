
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
            className={clsx(styles.button)}
            placeholder="address"
            data-dh-property-method-id="8I_L"
            data-dh-property-input-name="tokenAddress"
          />
          </section>
          <section>
          <input
            type="text"
            className="button button--outline button--block button--secondary"
            placeholder="uint256"
            data-dh-property-method-id="8I_L"
            data-dh-property-input-name="tokenId"
          />
          </section>
          <section>
          <input
            type="text"
            className={clsx(styles.button)}
            placeholder="EthValue"
            data-dh-property-method-id="8I_L"
            data-dh-property-input-name="EthValue"
          />
          </section>
  
          <button class="button button--block button--primary" data-dh-property-invoke="true" data-dh-property-method-id="8I_L">
          acceptOffer
          </button>
          </aside></section>
          </div>
        </header>
      </div>
    )
}

export default Buy;
